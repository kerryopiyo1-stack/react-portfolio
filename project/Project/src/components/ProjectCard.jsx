import { useState } from "react";
import { TagIcon, GitHubIcon } from "../icons";
import PlaceholderImage from "./PlaceholderImage";

/**
 * Project Card Component
 * 
 * Displays a single project with its image, title, description, and category.
 * Clicking on a card takes you to the project's GitHub repository.
 */
function ProjectCard({ project }) {
  // Track if the image failed to load so we can show a placeholder
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={project.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl overflow-hidden border border-white/20 transition-all duration-300 hover:scale-105 hover:border-white/30 hover:shadow-2xl block"
      style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", textDecoration: "none" }}
    >
      {/* Project Image */}
      {project.image && !imgError ? (   //if image exits and no error- show image
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ) : (
        <PlaceholderImage title={project.title} category={project.category} />
      )}

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TagIcon />
            <span className="text-xs font-medium px-3 py-1 rounded-full border border-white/20 text-cyan-300"
              style={{ background: "linear-gradient(90deg, rgba(6,182,212,0.3), rgba(20,184,166,0.3))" }}>
              {project.category}
            </span>
          </div>
          <div className="opacity-40 group-hover:opacity-100 transition-opacity">
            <GitHubIcon />
          </div>
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
      </div>
    </a>
  );
}

export default ProjectCard