import { MenuIcon, CloseIcon } from "../icons";

/**
 * Navigation Bar Component
 * 
 * This is the sticky header at the top of the page.
 * It shows the logo, navigation links, and a button to add new projects.
 * On mobile devices, it displays a hamburger menu instead.
 */
 function Navbar({ onAddClick, mobileOpen, setMobileOpen }) {
  const navLinks = ["Home", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-md border-b border-white/20"
      style={{ background: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
          Creative Agency
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              {item}
            </a>
          ))}
          <button onClick={onAddClick}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:brightness-110 transition-all shadow-lg">
             +  Add Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden backdrop-blur-md border-b border-white/20 px-4 py-4 flex flex-col gap-4"
          style={{ background: "rgba(255,255,255,0.07)" }}>
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              {item}
            </a>
          ))}
          <button onClick={() => { onAddClick(); setMobileOpen(false); }}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-left">
            + Add Project
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar