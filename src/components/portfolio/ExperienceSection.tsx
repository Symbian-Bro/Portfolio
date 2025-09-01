import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Company Name",
      period: "2022 - Present",
      location: "Remote / City, Country",
      description: "Led development of scalable web applications serving 100K+ users. Implemented modern React architecture and improved performance by 40%.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      achievements: [
        "Reduced application load time by 40%",
        "Led team of 4 developers",
        "Architected microservices infrastructure"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Previous Company",
      period: "2020 - 2022",
      location: "City, Country",
      description: "Developed responsive web applications with focus on user experience and accessibility. Collaborated with design team to implement pixel-perfect interfaces.",
      technologies: ["Vue.js", "JavaScript", "SCSS", "Figma"],
      achievements: [
        "Implemented design system used across 5+ products",
        "Improved mobile performance by 30%",
        "Mentored 2 junior developers"
      ]
    },
    {
      role: "Junior Developer",
      company: "First Company",
      period: "2019 - 2020",
      location: "City, Country", 
      description: "Started my professional journey building features for e-commerce platforms. Gained experience in full-stack development and agile methodologies.",
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
      achievements: [
        "Shipped 15+ major features",
        "Reduced bug reports by 25%",
        "Completed advanced training programs"
      ]
    }
  ];

  return (
    <section id="experience" className="portfolio-section bg-surface-elevated/50">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative mb-12 fade-in-delay-${index + 1}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 mt-6" />
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:mr-8' : 'md:pl-1/2 md:ml-8'}`}>
                <Card className="portfolio-card">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-text-primary mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-text-primary mb-2">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div>
                    <h5 className="text-sm font-semibold text-text-primary mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;