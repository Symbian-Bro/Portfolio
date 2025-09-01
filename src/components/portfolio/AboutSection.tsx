import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Open Source",
      description: "Contributing to FOSS projects and maintaining software that respects user freedom and privacy."
    },
    {
      icon: <Palette className="h-8 w-8 text-accent" />,
      title: "Native Development",
      description: "Building efficient Linux desktop and Android applications using native technologies."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-glow" />,
      title: "Security Focus",
      description: "Creating handy tools to enhance cybersecurity awareness and productivity."
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
            Open-source advocate with 3 years of experience in native application development and FOSS contributions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="fade-in-delay-1">
            <h3 className="text-2xl font-semibold mb-6 text-text-primary">
              Hello! I'm SIDDHARTH
            </h3>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I'm a passionate open-source developer based in Kannur, 
                specializing in native Linux desktop applications and Android development. 
                My journey in tech started 3 years ago when I discovered the power 
                of free and open-source software.
              </p>
              <p>
                As a volunteer for the GNU Project and contributor to various FOSS initiatives, 
                I'm committed to advancing software freedom and security. I believe that great 
                software should be accessible, secure, and respectful of user privacy.
              </p>
              <p>
                I'm always excited to contribute to projects that make a positive impact 
                on the FOSS community and collaborate with fellow developers who share 
                my passion for open-source principles and user empowerment.
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