export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse space-y-4 w-full max-w-4xl px-4">
                <div className="h-8 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-5/6" />
                <div className="h-4 bg-muted rounded w-2/3" />
            </div>
        </div>
    );
}
