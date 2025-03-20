import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "KhanMango",
      description: "A MERN stack e-commerce platform for mango trading, featuring real-time updates, secure payment integration, and responsive design.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      github: "#",
      live: "#"
    },
    {
      title: "Anaj Becho",
      description: "A Django-based agricultural marketplace enabling farmers to sell their produce directly to consumers, built with Python and Bootstrap.",
      tech: ["Django", "Python", "Bootstrap", "MySQL", "REST API"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-navy py-20 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        <h2 className="text-3xl font-bold text-lightest-slate">Featured Projects</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-navy/50 p-6 rounded-lg border border-electric/20 hover:border-electric transition-all group"
            >
              <h3 className="text-xl font-semibold text-light-slate mb-3">{project.title}</h3>
              <p className="text-slate mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-electric text-sm px-3 py-1 rounded-full border border-electric/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button variant="ghost" className="text-slate hover:text-electric">
                  <Github className="w-5 h-5 mr-2" />
                  Code
                </Button>
                <Button variant="ghost" className="text-slate hover:text-electric">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;