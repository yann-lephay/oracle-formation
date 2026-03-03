"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { solutions } from "@/lib/data/solutions";
import { categories } from "@/lib/data/categories";
import { guides } from "@/lib/data/guides";

interface SearchResult {
  label: string;
  href: string;
  type: string;
}

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const allItems = useMemo<SearchResult[]>(
    () => [
      ...solutions.map((s) => ({
        label: s.name,
        href: `/solution/${s.slug}`,
        type: "Solutions",
      })),
      ...categories.map((c) => ({
        label: c.name,
        href: `/${c.slug}`,
        type: "Catégories",
      })),
      ...guides.map((g) => ({
        label: g.shortTitle,
        href: `/guides/${g.slug}`,
        type: "Guides",
      })),
    ],
    []
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = normalize(query);
    return allItems
      .filter((item) => normalize(item.label).includes(q))
      .slice(0, 8);
  }, [query, allItems]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0 && results[activeIndex]) {
      e.preventDefault();
      router.push(results[activeIndex].href);
      setOpen(false);
      setQuery("");
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={ref} className="relative max-w-md mx-auto w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => query.trim() && setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Rechercher une solution, catégorie, guide…"
          className="w-full pl-10 pr-4 py-2.5 text-sm border border-border rounded bg-surface text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-haspopup="listbox"
        />
      </div>

      {open && results.length > 0 && (
        <ul
          className="absolute top-full left-0 right-0 mt-1 bg-surface border border-border rounded shadow-sm max-h-72 overflow-y-auto z-50"
          role="listbox"
        >
          {results.map((result, index) => (
            <li key={result.href} role="option" aria-selected={index === activeIndex}>
              <button
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors ${
                  index === activeIndex ? "bg-muted" : "hover:bg-muted"
                }`}
                onClick={() => {
                  router.push(result.href);
                  setOpen(false);
                  setQuery("");
                }}
              >
                <span className="text-foreground">{result.label}</span>
                <span className="badge text-[10px]">{result.type}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
