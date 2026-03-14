import { ExternalLink } from "lucide-react";

interface Source {
  label: string;
  url?: string;
  date: string;
}

export function SourceCitations({ sources }: { sources: Source[] }) {
  return (
    <div className="mt-6 pt-4 border-t border-border/50">
      <p className="text-xs text-muted-foreground">
        Sources :{" "}
        {sources.map((source, i) => (
          <span key={source.label}>
            {i > 0 && " | "}
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 hover:text-primary transition-colors"
              >
                {source.label} ({source.date})
                <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
              </a>
            ) : (
              <span>
                {source.label} ({source.date})
              </span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}
