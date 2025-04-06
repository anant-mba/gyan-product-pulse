
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Innovating & Scaling Products for <span className="text-primary">Global Impact</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Product Manager | Business Operations | Strategy Development | Process Design | Entrepreneur
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="#experience">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              
              <Button asChild variant="secondary">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Let's Connect
                </a>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/20 to-primary/40 opacity-70 blur"></div>
              <div className="relative bg-card rounded-lg shadow-xl overflow-hidden p-2">
                <img 
                  src="/lovable-uploads/6378bdd0-c3f9-4846-b43d-093d50f9cc51.png" 
                  alt="Anant Gyan - Product Manager" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
