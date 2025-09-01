import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "City, Country",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="portfolio-section bg-surface-elevated/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Let's create something amazing together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="fade-in-delay-1">
            <h3 className="text-2xl font-semibold text-text-primary mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-secondary">
                      {item.label}
                    </p>
                    <a 
                      href={item.href}
                      className="text-text-primary hover:text-primary transition-colors duration-300 font-medium"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <Card className="portfolio-card">
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Why Work With Me?
              </h4>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Fast and reliable communication
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Clean, maintainable code
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  User-focused design approach
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  On-time project delivery
                </li>
              </ul>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="fade-in-delay-2">
            <Card className="portfolio-card">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="bg-surface-muted border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="bg-surface-muted border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="john@example.com"
                    className="bg-surface-muted border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project Discussion"
                    className="bg-surface-muted border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-surface-muted border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;