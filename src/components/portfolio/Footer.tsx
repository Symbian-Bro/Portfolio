import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "#",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "#",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-elevated border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center space-y-8">
          {/* Logo & Tagline */}
          <div>
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300 mb-2"
            >
              Your Name
            </button>
            <p className="text-text-secondary">
              Creating digital experiences that make a difference
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-muted rounded-full flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button 
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="text-text-secondary hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })}
              className="text-text-secondary hover:text-primary transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
              className="text-text-secondary hover:text-primary transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="text-text-secondary hover:text-primary transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-text-secondary hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-text-muted text-sm flex items-center justify-center gap-1">
              © {currentYear} Built with <Heart className="h-4 w-4 text-red-500" /> by Your Name
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;