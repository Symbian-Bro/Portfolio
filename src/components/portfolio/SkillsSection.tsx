import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Linux Development",
      skills: ["C/C++", "GTK", "Qt", "GLib", "D-Bus", "X11/Wayland", "systemd"],
      color: "primary"
    },
    {
      category: "Android Development", 
      skills: ["Java", "Kotlin", "Android SDK", "NDK", "AOSP", "Gradle", "JNI"],
      color: "accent"
    },
    {
      category: "Security & FOSS",
      skills: ["NSS", "OpenSSL", "GNU Toolchain", "Git", "Autotools", "CMake", "Cryptography"],
      color: "primary-glow"
    }
  ];

  return (
    <section id="skills" className="portfolio-section">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit built through continuous learning and hands-on experience
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.category} 
              className={`portfolio-card fade-in-delay-${index + 1} group`}
            >
              <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-surface-muted text-text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center fade-in-delay-3">
          <Card className="portfolio-card max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">5+</h4>
                <p className="text-text-secondary">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-accent mb-2">7+</h4>
                <p className="text-text-secondary">Technologies Mastered</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary-glow mb-2">4+</h4>
                <p className="text-text-secondary">Years Experience</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;