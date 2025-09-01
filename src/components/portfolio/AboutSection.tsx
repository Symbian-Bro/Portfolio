import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and modern standards."
    },
    {
      icon: <Palette className="h-8 w-8 text-accent" />,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-glow" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless functionality."
    }
  ];

  return (
    <section id="about" className="portfolio-section bg-surface-elevated/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Passionate developer with [X] years of experience creating digital solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="fade-in-delay-1">
            <h3 className="text-2xl font-semibold mb-6 text-text-primary">
              Hello! I'm [Your Name]
            </h3>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I'm a passionate full-stack developer based in [Your Location], 
                specializing in creating digital experiences that combine beautiful 
                design with robust functionality. My journey in tech started [X years ago] 
                when I [brief origin story].
              </p>
              <p>
                When I'm not coding, you can find me [your hobbies/interests]. 
                I believe that great software is built by people who understand 
                both the technical and human sides of problems.
              </p>
              <p>
                I'm always excited to work on projects that make a positive impact 
                and collaborate with teams that share my passion for quality and innovation.
              </p>
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div className="fade-in-delay-2 space-y-6">
            {highlights.map((item, index) => (
              <Card key={index} className="portfolio-card border-l-4 border-l-primary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-surface-muted rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary">
                      {item.description}
                    </p>
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

export default AboutSection;