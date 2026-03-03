"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
    Star,
    CheckCircle2,
    ArrowRight,
    GraduationCap,
    RotateCcw,
} from "lucide-react";
import type { Organisme } from "@/lib/data/organismes";

interface OrganismeFiltersProps {
    organismes: Organisme[];
}

const FORMAT_OPTIONS = ["présentiel", "distanciel", "hybride", "e-learning"] as const;

const BUDGET_RANGES = [
    { label: "< 2 000 €", max: 2000 },
    { label: "2 000 – 5 000 €", max: 5000 },
    { label: "5 000 – 10 000 €", max: 10000 },
    { label: "> 10 000 €", max: Infinity },
] as const;

function extractMaxPrice(priceRange: string): number {
    const matches = priceRange.match(/[\d\s]+/g);
    if (!matches) return 0;
    const numbers = matches
        .map((m) => parseInt(m.replace(/\s/g, ""), 10))
        .filter((n) => !isNaN(n));
    return numbers.length > 0 ? Math.max(...numbers) : 0;
}

export function OrganismeFilters({ organismes }: OrganismeFiltersProps) {
    const [cpfOnly, setCpfOnly] = useState(false);
    const [selectedFormats, setSelectedFormats] = useState<Set<string>>(new Set());
    const [selectedBudget, setSelectedBudget] = useState<number | null>(null);

    const filtered = useMemo(() => {
        return organismes.filter((org) => {
            if (cpfOnly && !org.cpfEligible) return false;
            if (selectedFormats.size > 0) {
                const hasFormat = org.formats.some((f) => selectedFormats.has(f));
                if (!hasFormat) return false;
            }
            if (selectedBudget !== null) {
                const maxPrice = extractMaxPrice(org.priceRange);
                const range = BUDGET_RANGES.find((r) => r.max === selectedBudget);
                if (range) {
                    if (range.max === Infinity) {
                        if (maxPrice <= 10000) return false;
                    } else if (range.max === 2000) {
                        if (maxPrice > 2000) return false;
                    } else if (range.max === 5000) {
                        if (maxPrice < 2000 || maxPrice > 5000) return false;
                    } else if (range.max === 10000) {
                        if (maxPrice < 5000 || maxPrice > 10000) return false;
                    }
                }
            }
            return true;
        });
    }, [organismes, cpfOnly, selectedFormats, selectedBudget]);

    function toggleFormat(format: string) {
        setSelectedFormats((prev) => {
            const next = new Set(prev);
            if (next.has(format)) {
                next.delete(format);
            } else {
                next.add(format);
            }
            return next;
        });
    }

    function resetFilters() {
        setCpfOnly(false);
        setSelectedFormats(new Set());
        setSelectedBudget(null);
    }

    const hasActiveFilters = cpfOnly || selectedFormats.size > 0 || selectedBudget !== null;

    return (
        <div>
            {/* Filters bar */}
            <div className="glass-card p-4 md:p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    {/* CPF toggle */}
                    <label className="flex items-center gap-2 cursor-pointer shrink-0">
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={cpfOnly}
                                onChange={(e) => setCpfOnly(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-9 h-5 bg-surface-200 rounded-full peer-checked:bg-primary-600 transition-colors" />
                            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm peer-checked:translate-x-4 transition-transform" />
                        </div>
                        <span className="text-sm font-medium text-surface-700">CPF uniquement</span>
                    </label>

                    {/* Format pills */}
                    <div className="flex flex-wrap gap-2">
                        {FORMAT_OPTIONS.map((format) => (
                            <button
                                key={format}
                                onClick={() => toggleFormat(format)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                                    selectedFormats.has(format)
                                        ? "bg-primary-600 text-white border-primary-600"
                                        : "bg-white text-surface-600 border-surface-200 hover:border-primary-300"
                                }`}
                            >
                                {format}
                            </button>
                        ))}
                    </div>

                    {/* Budget */}
                    <div className="flex flex-wrap gap-2">
                        {BUDGET_RANGES.map((range) => (
                            <button
                                key={range.label}
                                onClick={() =>
                                    setSelectedBudget(
                                        selectedBudget === range.max ? null : range.max
                                    )
                                }
                                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                                    selectedBudget === range.max
                                        ? "bg-primary-600 text-white border-primary-600"
                                        : "bg-white text-surface-600 border-surface-200 hover:border-primary-300"
                                }`}
                            >
                                {range.label}
                            </button>
                        ))}
                    </div>

                    {/* Reset */}
                    {hasActiveFilters && (
                        <button
                            onClick={resetFilters}
                            className="text-xs text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 shrink-0"
                        >
                            <RotateCcw className="w-3 h-3" />
                            Réinitialiser
                        </button>
                    )}
                </div>
            </div>

            {/* Results */}
            {filtered.length > 0 ? (
                <div className="space-y-6">
                    {filtered.map((org, index) => (
                        <div key={org.slug} className="glass-card p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                {/* Rank */}
                                <div className="flex items-center gap-4 md:flex-col md:items-center shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                                        <span className="text-lg font-bold text-primary-600">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        <span className="text-sm font-semibold">{org.rating}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold text-surface-900">
                                                {org.name}
                                            </h3>
                                            <p className="text-sm text-surface-500">{org.tagline}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-primary-600">
                                                {org.priceRange}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-surface-600 mb-4 line-clamp-3">
                                        {org.description.slice(0, 250)}…
                                    </p>

                                    {/* Pros */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                                        {org.prosAndCons.pros.slice(0, 4).map((pro) => (
                                            <div
                                                key={pro}
                                                className="flex items-start gap-2 text-sm text-surface-600"
                                            >
                                                <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                                                <span>{pro}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Badges + CTA */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-surface-100">
                                        <div className="flex flex-wrap gap-1.5">
                                            {org.certifications.map((c) => (
                                                <span key={c} className="badge badge-qualiopi text-[10px]">
                                                    {c}
                                                </span>
                                            ))}
                                            {org.cpfEligible && (
                                                <span className="badge badge-cpf text-[10px]">CPF</span>
                                            )}
                                            {org.formats.map((f) => (
                                                <span
                                                    key={f}
                                                    className="badge text-[10px] bg-surface-100 text-surface-600"
                                                >
                                                    {f}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            href={`/organisme/${org.slug}`}
                                            className="btn-primary text-sm"
                                        >
                                            Voir l&apos;avis complet
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="glass-card p-8 text-center">
                    <GraduationCap className="w-12 h-12 text-surface-300 mx-auto mb-4" />
                    <p className="text-surface-500 mb-4">
                        Aucun organisme ne correspond à vos critères.
                    </p>
                    <button
                        onClick={resetFilters}
                        className="btn-primary text-sm"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Réinitialiser les filtres
                    </button>
                </div>
            )}
        </div>
    );
}
