export default function Loading() {
    return (
        <div className="section-padding">
            <div className="container-narrow mx-auto px-4">
                <div className="animate-pulse space-y-4 max-w-3xl">
                    <div className="h-8 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-5/6" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                    <div className="h-48 bg-muted rounded mt-6" />
                </div>
            </div>
        </div>
    );
}
