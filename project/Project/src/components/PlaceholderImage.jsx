/**
 * Placeholder Image Component
 * 
 * When a project doesn't have an image, we show this placeholder instead.
 * It displays the project initials and category with a nice gradient background.
 */
 function PlaceholderImage({ title, category }) {
  // Get the first letter of each word in the title (max 2 letters)
  const initials = title.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  
  // Different color schemes for different project categories
  const categoryColors = {
    "Web App": ["rgba(6,182,212,0.25)", "rgba(20,184,166,0.25)", "#22d3ee"],
    "JavaScript": ["rgba(234,179,8,0.2)", "rgba(202,138,4,0.2)", "#facc15"],
    "APIs": ["rgba(99,102,241,0.25)", "rgba(139,92,246,0.25)", "#a78bfa"],
    "E-Commerce": ["rgba(236,72,153,0.2)", "rgba(168,85,247,0.2)", "#f472b6"],
  };
  
  const [from, to, accent] = categoryColors[category] || categoryColors["Web App"];

  return (
    <div className="aspect-video relative flex flex-col items-center justify-center gap-3"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-semibold text-xl border border-white/20"
        style={{ background: "rgba(255,255,255,0.08)", color: accent }}>
        {initials}
      </div>
      <span className="text-xs font-medium tracking-widest uppercase" style={{ color: accent, opacity: 0.8 }}>
        {category}
      </span>
    </div>
  );
}

export default PlaceholderImage