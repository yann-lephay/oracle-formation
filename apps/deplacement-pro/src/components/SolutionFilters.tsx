"use client";

import { categories } from "@/lib/data/categories";

interface SolutionFiltersProps {
  selected: string;
  onChange: (slug: string) => void;
}

export function SolutionFilters({ selected, onChange }: SolutionFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("")}
        className={`text-xs border rounded px-3 py-1.5 transition-colors ${
          selected === ""
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-background text-muted-foreground border-border hover:border-primary"
        }`}
      >
        Toutes
      </button>
      {categories.map((c) => (
        <button
          key={c.slug}
          onClick={() => onChange(c.slug)}
          className={`text-xs border rounded px-3 py-1.5 transition-colors ${
            selected === c.slug
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background text-muted-foreground border-border hover:border-primary"
          }`}
        >
          {c.shortName}
        </button>
      ))}
    </div>
  );
}
