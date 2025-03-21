import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "KhanaMangao",
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="min-h-screen bg-navy py-20 px-4 sm:px-6 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-lightest-slate text-center sm:text-left"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.title}
              variants={projectVariants}
              className="bg-navy/50 p-5 sm:p-6 rounded-lg border border-electric/20 hover:border-electric transition-all group"
            >
              <h3 className="text-xl font-semibold text-light-slate mb-3">{project.title}</h3>
              <p className="text-slate mb-4 text-sm sm:text-base">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-electric text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border border-electric/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="text-slate hover:text-electric">
                  <Github className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm">Code</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-slate hover:text-electric">
                  <ExternalLink className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm">Live Demo</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;