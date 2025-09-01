import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
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
            <span className="gradient-text">SIDDHARTH K P</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-text-secondary mb-8 font-light">
            Native App Developer & Open-source enthusiast
          </h2>
        </div>
        
        {/* Description */}
        <div className="fade-in-delay-1">
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Contributing to the GNU Project, developing native Linux and Android applications, 
            and working with CUSAT FOSS to advance software freedom and security.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="https://github.com/symbian-bro" target="_blank"><Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
            View My Work
          </Button></a>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="fade-in-delay-3 flex justify-center space-x-6 mb-16">
          <a href="#" className="text-text-muted hover:text-primary transition-colors duration-300" title="GitHub">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-text-muted hover:text-primary transition-colors duration-300" title="GitLab">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.42l3.684-11.333H8.316L12 21.42z"/>
              <path d="M3.16 10.087L1.123 15.55c-.197.502.07 1.07.507 1.313L12 21.42l-8.84-11.333z"/>
              <path d="M3.16 10.087h5.156L6.456 3.54c-.126-.385-.491-.385-.617 0L3.16 10.087z"/>
              <path d="M20.84 10.087L22.877 15.55c.197.502-.07 1.07-.507 1.313L12 21.42l8.84-11.333z"/>
              <path d="M20.84 10.087h-5.156L17.544 3.54c.126-.385.491-.385.617 0l2.679 6.547z"/>
            </svg>
          </a>
          <a href="#" className="text-text-muted hover:text-primary transition-colors duration-300" title="Matrix">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M.5.5v23h23v-23zM2.5 21.5v-19h19v19z"/>
              <path d="M3.5 2.5h1v19h-1zM19.5 2.5h1v19h-1z"/>
              <circle cx="6" cy="7" r="1"/>
              <circle cx="9" cy="7" r="1"/>
              <circle cx="12" cy="7" r="1"/>
              <circle cx="6" cy="12" r="1"/>
              <circle cx="9" cy="12" r="1"/>
              <circle cx="12" cy="12" r="1"/>
              <circle cx="6" cy="17" r="1"/>
              <circle cx="9" cy="17" r="1"/>
              <circle cx="12" cy="17" r="1"/>
            </svg>
          </a>
          <a href="#" className="text-text-muted hover:text-primary transition-colors duration-300" title="Instagram">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-text-muted hover:text-primary transition-colors duration-300" title="LinkedIn">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-text-muted hover:text-primary transition-colors duration-300" title="Email">
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