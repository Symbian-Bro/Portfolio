import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "NSS Security Developer",
      company: "Mozilla/NSS Project",
      period: "2022 - Present",
      location: "Remote / Open Source",
      description: "Contributing to Network Security Services (NSS) library development, implementing cryptographic protocols and security enhancements for Firefox and other Mozilla products.",
      technologies: ["C", "C++", "NSS", "PKCS#11", "OpenSSL", "Cryptography"],
      achievements: [
        "Implemented new TLS 1.3 cipher suites",
        "Fixed critical security vulnerabilities",
        "Improved cryptographic performance by 25%"
      ]
    },
    {
      role: "GNU Project Volunteer",
      company: "Free Software Foundation",
      period: "2020 - Present",
      location: "Remote / Volunteer",
      description: "Active contributor to GNU coreutils and other GNU project components. Focus on code quality, performance optimization, and cross-platform compatibility.",
      technologies: ["C", "Shell Scripts", "Autotools", "GNU Toolchain", "Make"],
      achievements: [
        "Contributed patches to GNU coreutils",
        "Improved cross-platform compatibility",
        "Mentored new FOSS contributors"
      ]
    },
    {
      role: "Linux System Administrator",
      company: "[Company/Organization Name]",
      period: "2019 - 2022",
      location: "[City, Country]", 
      description: "Managed enterprise Linux infrastructure, automated deployment processes, and maintained high-availability systems. Specialized in security hardening and performance optimization.",
      technologies: ["Linux", "Bash", "systemd", "Docker", "Ansible", "Nginx"],
      achievements: [
        "Achieved 99.9% uptime across 50+ servers",
        "Automated deployment reducing setup time by 80%",
        "Implemented security policies and monitoring"
      ]
    },
    {
      role: "Android Developer",
      company: "[Previous Company/Project]",
      period: "2018 - 2020",
      location: "[City, Country]", 
      description: "Developed native Android applications with focus on performance, privacy, and user experience. Specialized in AOSP customization and low-level system integration.",
      technologies: ["Java", "Kotlin", "Android SDK", "NDK", "AOSP", "JNI"],
      achievements: [
        "Published 3+ open-source Android apps",
        "Contributed to AOSP security enhancements",
        "Optimized app performance and battery usage"
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
            My journey in open-source development, system administration, and native application development
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