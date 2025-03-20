import { Button } from "@/components/ui/button";
import { FileText, Send } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-24 py-20 bg-navy text-light-slate">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile image for mobile (shown above text on small screens) */}
        <div className="flex justify-center md:hidden order-first mb-8 animate-fade-in">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-electric">
            <img 
              src="/lovable-uploads/40b421d3-5e13-4bb3-a424-27f643f87bd8.png" 
              alt="Aditya Gupta" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="animate-fade-in">
          <p className="text-electric mb-4 font-mono">Hi, my name is</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-lightest-slate mb-4">
            Aditya Gupta.
          </h1>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate mb-6">
            I turn ideas into scalable solutions.
          </h2>
          <p className="text-slate max-w-xl mb-8 text-lg">
            I'm a backend developer and AI enthusiast specializing in building robust and scalable applications. 
            Currently focused on creating impactful solutions using Python frameworks and exploring AI/ML technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-transparent border-2 border-electric text-electric hover:bg-electric/10">
              <FileText className="mr-2 h-4 w-4" /> View Resume
            </Button>
            <Button className="bg-electric text-navy hover:bg-electric/90">
              <Send className="mr-2 h-4 w-4" /> Get in Touch
            </Button>
          </div>
        </div>
        
        {/* Profile image for desktop (shown on the right on larger screens) */}
        <div className="relative animate-fade-in hidden md:block order-last">
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-electric">
            <img 
              src="/lovable-uploads/40b421d3-5e13-4bb3-a424-27f643f87bd8.png" 
              alt="Aditya Gupta" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;