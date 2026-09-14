/**
 * Corner chip marking this as a sample-data build.
 *
 * Rendered only outside production so a review deployment is never mistaken
 * for real content, and the production bundle carries nothing.
 */
export function SampleBadge() {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-3 left-3 z-[80] rounded-full bg-gc-dark/85 px-3 py-1.5 text-[0.6875rem] font-medium text-white backdrop-blur-sm"
    >
      Sample data — not real content
    </div>
  );
}
