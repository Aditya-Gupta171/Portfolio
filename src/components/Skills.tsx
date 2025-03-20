import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { cn } from "../lib/utils";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Lenis from '@studio-freight/lenis';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "logos:python" },
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Java", icon: "logos:java" },
      ],
    },
    {
      title: "Frameworks & Technologies",
      skills: [
        { name: "Django", icon: "vscode-icons:file-type-django" },
        { name: "Flask", icon: "simple-icons:flask", className: "text-white" },
        { name: "React", icon: "logos:react" },
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { 
          name: "MERN Stack", 
          customIcons: [
            { icon: "logos:mongodb", className: "w-8 h-8" },
            { icon: "logos:express", className: "w-8 h-8" },
            { icon: "logos:react", className: "w-8 h-8" },
            { icon: "logos:nodejs", className: "w-8 h-8" }
          ]
        },
      ],
    },
    {
      title: "Tools & Databases",
      skills: [
        { name: "MySQL", icon: "logos:mysql" },
        { name: "MongoDB", icon: "logos:mongodb" },
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "Firebase", icon: "logos:firebase" },
        { name: "Docker", icon: "logos:docker-icon" },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)" }
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="min-h-screen bg-navy py-32 px-6 lg:px-24 relative overflow-hidden"
    >
      {/* Animated tech background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-r from-electric to-blue-500 blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-l from-electric to-purple-500 blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <Badge 
            variant="outline" 
            className="px-4 py-1 mb-4 text-electric border-electric font-mono text-sm"
          >
             EXPERTISE 
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Technical Skills
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Technologies and tools I've mastered throughout my journey
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title} 
              variants={categoryVariants}
              className="space-y-5"
            >
              <Card className="bg-navy/30 border border-electric/20 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-transparent" />
                <CardContent className="p-6 z-10 relative">
                  <h3 className="text-xl font-medium text-light-slate mb-6 flex items-center">
                    <span className="text-electric mr-2"></span> 
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover="hover"
                        className="flex flex-col items-center p-4 rounded-lg border border-electric/20 bg-navy/80 backdrop-blur-sm hover:border-electric transition-all duration-300"
                      >
                        {skill.customIcons ? (
                          // For MERN Stack, show multiple icons
                          <motion.div 
                            className="flex flex-wrap justify-center gap-1 mb-2"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            {skill.customIcons.map((customIcon, index) => (
                              <Icon 
                                key={index}
                                icon={customIcon.icon} 
                                className={customIcon.className || "w-8 h-8"}
                              />
                            ))}
                          </motion.div>
                        ) : (
                          <motion.div 
                            whileHover={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon 
                              icon={skill.icon} 
                              className={cn("w-16 h-16 mb-4 text-electric", skill.className || "")}
                            />
                          </motion.div>
                        )}
                        <span className="text-slate font-medium text-center text-sm md:text-base">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;