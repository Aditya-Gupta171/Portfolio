import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-navy py-20 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-lightest-slate">About Me</h2>
        
        <div className="text-slate space-y-4">
          <p>
            I am a 3rd-year CSE student at KLU Vijayawada, passionate about creating robust and scalable backend solutions. My journey in software development has been focused on mastering Python frameworks like Django and Flask, while maintaining a keen interest in AI and Machine Learning.
          </p>
          
          <p>
            With a strong foundation in backend development, I specialize in building RESTful APIs, implementing efficient database structures, and ensuring high-performance applications. My approach combines clean code practices with scalable architecture to deliver impactful solutions.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="border-electric text-electric hover:bg-electric/10">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" className="border-electric text-electric hover:bg-electric/10">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button variant="outline" className="border-electric text-electric hover:bg-electric/10">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button variant="outline" className="border-electric text-electric hover:bg-electric/10">
            <FileText className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;