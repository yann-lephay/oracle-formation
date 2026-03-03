"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, GraduationCap, Building2, MapPin } from "lucide-react";
import { domaines } from "@/lib/data/domaines";
import { organismes } from "@/lib/data/organismes";
import { topVilles } from "@/lib/data/villes";

interface SearchResult {
    label: string;
    href: string;
    category: "Formations" | "Organismes" | "Villes";
}

function normalize(str: string): string {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

const MAX_PER_CATEGORY = 3;

function search(query: string): SearchResult[] {
    if (!query || query.length < 2) return [];

    const q = normalize(query);
    const results: SearchResult[] = [];

    // Search domaines
    const matchedDomaines = domaines.filter((d) => {
        const fields = [d.name, d.shortName, ...d.keywords];
        return fields.some((f) => normalize(f).includes(q));
    });
    for (const d of matchedDomaines.slice(0, MAX_PER_CATEGORY)) {
        results.push({
            label: `Formation ${d.name}`,
            href: `/formation/${d.slug}`,
            category: "Formations",
        });
    }

    // Search organismes
    const matchedOrganismes = organismes.filter((o) => {
        return normalize(o.name).includes(q) || normalize(o.tagline).includes(q);
    });
    for (const o of matchedOrganismes.slice(0, MAX_PER_CATEGORY)) {
        results.push({
            label: o.name,
            href: `/organisme/${o.slug}`,
            category: "Organismes",
        });
    }

    // Search villes
    const matchedVilles = topVilles.filter((v) => {
        return normalize(v.name).includes(q);
    });
    for (const v of matchedVilles.slice(0, MAX_PER_CATEGORY)) {
        results.push({
            label: v.name,
            href: `/formation/developpeur-web/${v.slug}`,
            category: "Villes",
        });
    }

    return results;
}

const categoryIcons = {
    Formations: GraduationCap,
    Organismes: Building2,
    Villes: MapPin,
};

export function SearchBar() {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const listboxRef = useRef<HTMLDivElement>(null);

    const results = useMemo(() => search(query), [query]);

    const categories = useMemo(() => {
        const cats: { name: string; items: SearchResult[] }[] = [];
        const seen = new Set<string>();
        for (const r of results) {
            if (!seen.has(r.category)) {
                seen.add(r.category);
                cats.push({
                    name: r.category,
                    items: results.filter((x) => x.category === r.category),
                });
            }
        }
        return cats;
    }, [results]);

    const flatResults = useMemo(() => results, [results]);

    const selectResult = useCallback(
        (result: SearchResult) => {
            setQuery("");
            setIsOpen(false);
            router.push(result.href);
        },
        [router]
    );

    function handleKeyDown(e: React.KeyboardEvent) {
        if (!isOpen || flatResults.length === 0) {
            if (e.key === "Enter") {
                e.preventDefault();
                if (query.length >= 2) {
                    router.push("/#domaines");
                }
            }
            return;
        }

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setActiveIndex((prev) =>
                    prev < flatResults.length - 1 ? prev + 1 : 0
                );
                break;
            case "ArrowUp":
                e.preventDefault();
                setActiveIndex((prev) =>
                    prev > 0 ? prev - 1 : flatResults.length - 1
                );
                break;
            case "Enter":
                e.preventDefault();
                if (activeIndex >= 0 && activeIndex < flatResults.length) {
                    selectResult(flatResults[activeIndex]);
                }
                break;
            case "Escape":
                setIsOpen(false);
                setActiveIndex(-1);
                inputRef.current?.blur();
                break;
        }
    }

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                listboxRef.current &&
                !listboxRef.current.contains(e.target as Node) &&
                inputRef.current &&
                !inputRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const showDropdown = isOpen && results.length > 0;

    return (
        <div className="max-w-xl mx-auto relative">
            <div className="flex items-center bg-surface rounded border border-border overflow-hidden">
                <div className="flex items-center gap-2 pl-4 text-muted-foreground">
                    <Search className="w-5 h-5" />
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                        setActiveIndex(-1);
                    }}
                    onFocus={() => {
                        if (results.length > 0) setIsOpen(true);
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Ex : formation développeur web, data analyst, marketing digital…"
                    className="flex-1 px-3 py-3.5 text-foreground placeholder:text-muted-foreground text-sm outline-none bg-transparent"
                    aria-label="Rechercher une formation"
                    role="combobox"
                    aria-expanded={showDropdown}
                    aria-controls="search-listbox"
                    aria-activedescendant={
                        activeIndex >= 0 ? `search-option-${activeIndex}` : undefined
                    }
                    autoComplete="off"
                />
                <button
                    type="button"
                    onClick={() => {
                        if (activeIndex >= 0 && activeIndex < flatResults.length) {
                            selectResult(flatResults[activeIndex]);
                        } else {
                            router.push("/#domaines");
                        }
                    }}
                    className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3.5 text-sm font-medium transition-colors"
                >
                    Chercher
                </button>
            </div>

            {/* Dropdown */}
            {showDropdown && (
                <div
                    ref={listboxRef}
                    id="search-listbox"
                    role="listbox"
                    className="absolute top-full left-0 right-0 mt-1 bg-surface rounded border border-border overflow-hidden z-50 shadow-sm"
                >
                    {categories.map((cat) => {
                        const CatIcon = categoryIcons[cat.name as keyof typeof categoryIcons];
                        return (
                            <div key={cat.name}>
                                <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-muted flex items-center gap-1.5">
                                    <CatIcon className="w-3.5 h-3.5" />
                                    {cat.name}
                                </div>
                                {cat.items.map((item) => {
                                    const globalIndex = flatResults.indexOf(item);
                                    return (
                                        <button
                                            key={item.href}
                                            id={`search-option-${globalIndex}`}
                                            role="option"
                                            aria-selected={globalIndex === activeIndex}
                                            className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                                                globalIndex === activeIndex
                                                    ? "bg-muted text-accent"
                                                    : "text-foreground hover:bg-muted"
                                            }`}
                                            onMouseEnter={() => setActiveIndex(globalIndex)}
                                            onClick={() => selectResult(item)}
                                        >
                                            {item.label}
                                        </button>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
