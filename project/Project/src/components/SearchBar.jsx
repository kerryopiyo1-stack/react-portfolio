import { SearchIcon } from "../icons";

/**
 * Search Bar Component
 * 
 * Allows users to search through projects by title, description, or category.
 * The search happens in real-time as you type.
 */
function SearchBar({ value, onChange }) {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-8">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <SearchIcon />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search projects..."
          className="w-full pl-12 pr-4 py-3 rounded-xl text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}
        />
      </div>
    </div>
  );
}
export default SearchBar;
