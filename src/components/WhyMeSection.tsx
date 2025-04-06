
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Target, Zap } from 'lucide-react';

const WhyMeSection: React.FC = () => {
  const strengths = [
    {
      title: "Product Vision & Execution",
      icon: <Target className="h-8 w-8 text-primary" />,
      description: "I excel at translating business requirements into actionable product strategies with measurable outcomes. My track record shows consistent delivery of products that meet both user needs and business objectives."
    },
    {
      title: "Cross-Functional Collaboration",
      icon: <Star className="h-8 w-8 text-primary" />,
      description: "I build strong relationships across development, design, marketing, and business teams to ensure alignment and efficient execution. This collaborative approach has been key to successful launches across multiple continents."
    },
    {
      title: "Analytical Problem-Solving",
      icon: <Zap className="h-8 w-8 text-primary" />,
      description: "My data-driven approach has led to significant improvements in performance metrics, such as reducing payment errors and cutting KYC time by 95% through strategic automation and process optimization."
    }
  ];

  const keyQualities = [
    "Strategic thinker with execution focus",
    "Effective communicator across technical and business domains",
    "Data-driven decision maker",
    "Process optimization specialist",
    "Adaptable leader with global experience",
    "User-centric product designer"
  ];

  return (
    <section id="why-me" className="py-24 bg-gradient-to-br from-background to-primary/5">
      <div className="section-container">
        <h2 className="section-title">
          Why <span className="text-primary">Me?</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {strengths.map((strength, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    {strength.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading">{strength.title}</h3>
                  <p className="text-muted-foreground">{strength.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
          <div className="bg-card border rounded-lg p-8 shadow-sm md:max-w-md">
            <h3 className="text-xl font-bold mb-6 text-center font-heading">Key Qualities That Set Me Apart</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyQualities.map((quality, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <p>{quality}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:max-w-md">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Product Lifecycle" 
              className="rounded-lg shadow-lg border border-muted"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
