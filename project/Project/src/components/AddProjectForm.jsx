import { useState } from "react";
import { PlusIcon, CheckIcon, ErrorIcon } from "../icons";

/**
 * Add Project Form Component
 * 
 * A form that lets users add new projects to the portfolio.
 * It validates the input and shows success/error messages.
 */
export default function AddProjectForm({ onAdd, formRef }) {
  // Form data stores what the user types in each field
  const [formData, setFormData] = useState({ title: "", description: "", image: "", category: "" });
  // Errors stores validation error messages for each field
  const [errors, setErrors] = useState({});
  // Show a success message after adding a project
  const [showSuccess, setShowSuccess] = useState(false);

  // Check if all required fields are filled in correctly
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Project title is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (formData.image && !/^https?:\/\/.+/.test(formData.image.trim())) {
      newErrors.image = "Please enter a valid URL";
    }
    return newErrors;
  };

  // What happens when the user clicks "Add Project"
  const handleSubmit = () => {
    // First, check if everything is valid
    const newErrors = validateForm();
    // If there are errors, show them and stop here
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Everything looks good! Add the project
    onAdd({
      id: Date.now(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      category: formData.category.trim(),
      image: formData.image.trim(),
    });

    // Clear the form and show success message
    setFormData({ title: "", description: "", image: "", category: "" });
    setErrors({});
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    // Scroll to the projects section so user can see their new project
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Update a single form field and clear its error if it had one
  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  // Define all the form fields we need
  const formFields = [
    { key: "title", label: "Project Title", placeholder: "Enter project title", type: "input" },
    { key: "description", label: "Description", placeholder: "Enter project description", type: "textarea" },
    { key: "image", label: "Image URL", placeholder: "https://example.com/image.jpg", type: "input" },
    { key: "category", label: "Category", placeholder: "e.g., Web App, JavaScript", type: "input" },
  ];

  return (
    <section id="add-project" ref={formRef} className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="rounded-2xl border border-white/20 p-8"
          style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(16px)" }}>
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6">
            Add New Project
          </h2>

          {/* Success message */}
          {showSuccess && (
            <div className="flex items-center gap-3 mb-6 p-4 rounded-lg border border-green-500/30"
              style={{ background: "rgba(34,197,94,0.1)" }}>
              <CheckIcon />
              <span className="text-green-300 text-sm font-medium">Project added successfully!</span>
            </div>
          )}

          {/* Form fields */}
          <div className="flex flex-col gap-6">
            {formFields.map(({ key, label, placeholder, type }) => (
              <div key={key}>
                <label className="block text-gray-300 text-sm font-medium mb-2">{label}</label>
                {/* input*/}
                {type === "textarea" ? (
                  <textarea
                  id={key}
                  name={key}
                    rows={4}
                    value={formData[key]}
                    onChange={(e) => updateField(key, e.target.value)}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: `1px solid ${errors[key] ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.2)"}`,
                    }}
                  />
                ) : (
                  <input
                  id={key}
                  name={key}
                    type="text"
                    value={formData[key]}
                    onChange={(e) => updateField(key, e.target.value)}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: `1px solid ${errors[key] ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.2)"}`,
                    }}
                  />
                )}
                {errors[key] && (
                  <div className="flex items-center gap-1.5 mt-2">
                    <ErrorIcon />
                    <span className="text-red-400 text-xs">{errors[key]}</span>
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-teal-500 hover:brightness-110 transition-all shadow-lg">
              <PlusIcon />
              Add Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
