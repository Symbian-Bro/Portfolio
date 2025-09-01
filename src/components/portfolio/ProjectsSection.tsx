import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Quick Vantage",
      description: "System management utility for Lenovo laptops running Linux.",
      image: "images/qv.png",
      technologies: ["Python", "Shell", "Qt Designer", "PyQt5", "Sys-administration"],
      liveUrl: "#",
      githubUrl: "https://github.com/Symbian-Bro/quick-vantage-python-flavour",
      featured: true
    },
    {
      title: "Primary Selection Logger",
      description: "A lightweight tool to log primary selection data of X server on Linux systems.",
      image: "images/logger.png",
      technologies: ["Python", "Cybersecurity", "Productivity", "X11"],
      liveUrl: "#",
      githubUrl: "https://github.com/Symbian-Bro/primary-selection-logger",
      featured: true
    },
    {
      title: "GNU Project Contribution",
      description: "Contributed to GNU Malayalam Translation Team.",
      image: "images/gnu.png", 
      technologies: ["Lokalize", "Poedit", "Git", "Language","Localization","GNU"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Brightnessctl Extension",
      description: "Developed a brightnessctl extension that will adjust the brightness accroding to the ambient light.",
      image: "/images/bldr.png",
      technologies: ["Python", "Brightnessctl", "Arduino", "C++", "CPS", "Electronics"],
      liveUrl: "#",
      githubUrl: "https://github.com/Symbian-Bro/brightnessctl-ldr",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="portfolio-section">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating impactful solutions
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center fade-in-delay-${index + 1}`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Card className="portfolio-card overflow-hidden group">
                  <div className="aspect-video bg-surface-muted relative overflow-hidden">
                    <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </Card>
              </div>
              
              {/* Project Details */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-surface-muted">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects Grid */}
        <div className="fade-in-delay-3">
          <h3 className="text-2xl font-bold text-center mb-12">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={project.title} className="portfolio-card group">
                {/* Project Image */}
                <div className="aspect-video bg-surface-muted relative overflow-hidden rounded-lg mb-4">
                  <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                </div>
                
                {/* Project Details */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-text-primary">
                    {project.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
