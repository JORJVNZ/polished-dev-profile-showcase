
import { Github, Link } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "DORSU IESMS",
      description: "Integrated Educational System Management Solution for Davao Oriental State University. A comprehensive platform that streamlines administrative processes and enhances student experience.",
      technologies: ["C#", "ASP.NET", "SQL Server", "Bootstrap", "Telerik UI"],
      github: "#",
      demo: "#",
      image: "placeholder.svg"
    },
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce solution with product management, user authentication, cart functionality, and payment processing integration.",
      technologies: ["TypeScript", "React", "Tailwind CSS", "MySQL"],
      github: "#",
      demo: "#",
      image: "placeholder.svg"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features and real-time updates.",
      technologies: ["JavaScript", "Ionic", "Firebase"],
      github: "#",
      demo: "#",
      image: "placeholder.svg"
    },
    {
      title: "Portfolio Website",
      description: "A clean, responsive developer portfolio website with dark/light mode toggle, smooth animations, and contact form.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100 font-display">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-neutral-200 dark:bg-neutral-700 rounded mb-4 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>
              
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 mt-auto">
                <a 
                  href={project.github} 
                  className="text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors inline-flex items-center"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github className="h-5 w-5 mr-1" /> Code
                </a>
                <a 
                  href={project.demo} 
                  className="text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors inline-flex items-center"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <Link className="h-5 w-5 mr-1" /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
