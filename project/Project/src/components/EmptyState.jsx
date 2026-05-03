

/**
 * Empty State Component
 * 
 * Shows a friendly message when there are no projects to display.
 * This could be because the search returned no results, or there are no projects yet.
 */
function EmptyState({ isSearch }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 rounded-2xl border border-white/20"
      style={{ background: "rgba(255,255,255,0.05)" }}>
     <searchIcon/>
      <h3 className="text-gray-300 text-xl font-medium mt-4 mb-2">
        {isSearch ? "No results found" : "No projects yet"}
      </h3>
      <p className="text-gray-400 text-sm">
        {isSearch ? "Try adjusting your search terms" : "Add your first project to get started!"}
      </p>
    </div>
  );
}
