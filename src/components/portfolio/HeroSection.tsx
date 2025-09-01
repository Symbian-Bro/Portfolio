import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-primary-glow/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 text-center z-10">
        {/* Name & Title */}
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-text-secondary mb-8 font-light">
            Full Stack Developer & UI/UX Designer
          </h2>
        </div>
        
        {/* Description */}
        <div className="fade-in-delay-1">
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about creating beautiful, functional digital experiences that solve real-world problems. 
            I specialize in modern web technologies and user-centered design.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="fade-in-delay-3 flex justify-center space-x-6 mb-16">
          <a href="#" className="text-text-muted hover:text-primary transition-colors duration-300">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-text-muted hover:text-primary transition-colors duration-300">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-text-muted hover:text-primary transition-colors duration-300">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="fade-in-delay-3 animate-bounce">
          <ArrowDown className="h-6 w-6 text-text-muted mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;