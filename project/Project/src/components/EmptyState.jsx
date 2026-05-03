

/**
 * Empty State Component
 * 
 * Shows a friendly message when there are no projects to display.
 * This could be because the search returned no results, or there are no projects yet.
 */
export default function EmptyState({ isSearch }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 rounded-2xl border border-white/20"
      style={{ background: "rgba(255,255,255,0.05)" }}>
