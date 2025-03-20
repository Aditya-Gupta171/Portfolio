import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-navy py-20 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-lightest-slate">About Me</h2>
        
        <div className="text-slate space-y-4">
  <p>
    I am a pre-final year CSE student at KLU Vijayawada, passionate about full-stack development and building scalable applications.  
    I am proficient in MERN, Next.js, and TypeScript, with a strong foundation in backend technologies like Python, Django, and Flask.
  </p>

  <p>
    My expertise lies in developing high-performance applications, designing efficient database structures, and building robust RESTful APIs.  
    I follow clean code practices and scalable architectures to create impactful and efficient solutions, while also exploring AI and Machine Learning.
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