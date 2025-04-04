
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="section-container">
        <h2 className="section-title">
          Let's <span className="text-primary">Connect</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg border-t-4 border-t-primary">
            <CardContent className="pt-6">
              <div className="text-center space-y-6">
                <p className="text-xl">
                  I'm currently exploring product roles and collaboration opportunities. Let's connect!
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-4 py-4">
                  <Button className="bg-primary hover:bg-primary/90 flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    <a href="mailto:anantgyan.mba@gmail.com" className="text-white">
                      anantgyan.mba@gmail.com
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 flex items-center">
                    <Linkedin className="mr-2 h-4 w-4" />
                    <a 
                      href="https://linkedin.com/in/anantgyan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/anantgyan
                    </a>
                  </Button>
                </div>
                
                <div className="pt-4">
                  <Button className="bg-navy hover:bg-navy/90 flex items-center mx-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
                
                <p className="text-muted-foreground pt-6">
                  Thank you for visiting my portfolio. I look forward to discussing how I can contribute to your product vision.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
