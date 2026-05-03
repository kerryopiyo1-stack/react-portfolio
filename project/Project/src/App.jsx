import { useState, useRef } from "react";
import { PROJECTS } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ProjectGrid from "./components/ProjectGrid";
import AddProjectForm from "./components/AddProjectForm";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

/**
 * Main App Component
 * 
 * This is the root component that brings everything together.
 * It manages the state for projects, search, and mobile menu.
 */
function App() {
  // All the projects currently displayed (starts with initial data)
  const [projects, setProjects] = useState(PROJECTS);
  // What the user typed in the search box is stored
  const [searchQuery, setSearchQuery] = useState("");
  // Whether the mobile menu is open or closed it controls navBar menu
  const [mobileOpen, setMobileOpen] = useState(false);
  // Reference to the form so we can scroll to it
  const formRef = useRef(null);

  // Add a new project to the beginning of the list
  const handleAddProject = (project) => {
    setProjects([project, ...projects]);
  };

  // Scroll smoothly to the add project form
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen text-white"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #164e63 50%, #134e4a 100%)" }}>
      <Navbar onAddClick={scrollToForm} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main className="pt-16">
        <Hero />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <ProjectGrid projects={projects} searchQuery={searchQuery} /> 
        <AddProjectForm onAdd={handleAddProject} formRef={formRef} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


export default App