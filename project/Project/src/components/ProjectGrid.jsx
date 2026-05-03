import { GitHubIcon, ArrowIcon } from "../icons";
import ProjectCard from "./ProjectCard";
import EmptyState from "./EmptyState";

/**
 * Project Grid Component
 * 
 * Displays all projects in a responsive grid layout.
 * It filters projects based on the search query and shows an empty state if needed.
 */
function ProjectGrid({ projects, searchQuery }) {
  // Filter projects based on what the user typed in the search box
  const filteredProjects = projects.filter((p) => {
    const query = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  });

  return (
    //Displaying  the projects
    <section id="projects" className="max-w-7xl mx-auto px-4 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {filteredProjects.length === 0 ? (        //show if there is a project
          <EmptyState isSearch={searchQuery.length > 0} />  //no project found
        ) : (
          filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
        )}
      </div>

      {/* View all on GitHub button */}
      {filteredProjects.length > 0 && (     //only show this if there are projects
        <div className="flex justify-center">
          <a
            href="https://github.com/kerryopiyo1-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-white/20 text-gray-300 hover:text-white transition-all hover:border-cyan-400/50"
            style={{ background: "rgba(255,255,255,0.06)", textDecoration: "none" }}
          >
            <GitHubIcon />
            <span className="text-sm font-medium">View all projects on GitHub</span>
            <div className="transition-transform group-hover:translate-x-1">
              <ArrowIcon />
            </div>
          </a>
        </div>
      )}
    </section>
  );
}

export default ProjectGrid;
