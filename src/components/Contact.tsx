import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_uwcr0ao", // Replace with your EmailJS Service ID
        "template_qa4btou", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "A5350LPv3bwrWv5wD" // Replace with your EmailJS Public Key
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-lightest-slate mb-2">Get In Touch</h2>
        <p className="text-slate mb-8 max-w-xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-navy border-slate text-light-slate"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-navy border-slate text-light-slate"
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full h-32 p-3 rounded-md bg-navy border border-slate text-light-slate focus:outline-none focus:ring-2 focus:ring-electric"
            />
            <Button type="submit" className="bg-electric text-navy hover:bg-electric/90">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Github className="h-5 w-5 text-electric" />
              <a href="https://github.com/Aditya-Gupta171" target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-electric">
                github.com/Aditya-Gupta171
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="h-5 w-5 text-electric" />
              <a href="https://www.linkedin.com/in/adityagupta27/" target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-electric">
              linkedin.com/in/adityagupta27/
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;