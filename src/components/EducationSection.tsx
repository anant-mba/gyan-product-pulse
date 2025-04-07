
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "MBA, Technology Strategy & Product Management",
      institution: "University of Wisconsin-Madison",
      logo: "/lovable-uploads/c443d8cc-d340-43d5-9861-5aa5f7f4b2ac.png",
      highlights: [
        "Elected 1st year & consecutively 2nd year representative in GBA - Graduate Business Association",
        "Organized multiple networking events to promote UW-Madison motto - Together Forward"
      ]
    },
    {
      degree: "B.Tech in Information Technology",
      institution: "West Bengal University of Technology",
      logo: "/lovable-uploads/d2539da6-9110-4cf3-8a9a-e3751581de26.png",
      highlights: [
        "President of the chess club",
        "Organized cultural events at campus"
      ]
    }
  ];

  const leadership = [
    {
      title: "Graduate Assistant - Consumer Strategy",
      description: "Consulted teams in 28-company projects across 5+ industry segments, tackling business issues.",
      logo: "/lovable-uploads/c443d8cc-d340-43d5-9861-5aa5f7f4b2ac.png"
    },
    {
      title: "President, Graduate Entrepreneurship Association",
      description: "Organized pitch competitions & mentorship events connecting students with entrepreneurs and investors.",
      logo: "/lovable-uploads/c443d8cc-d340-43d5-9861-5aa5f7f4b2ac.png"
    }
  ];

  return (
    <section id="education" className="py-8 mb-8">
      <div className="section-container">
        <h2 className="section-title">
          Education & <span className="text-primary">Leadership</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading flex items-center">
              <Award className="mr-2 text-primary" /> Education
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover overflow-hidden h-full">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 flex-shrink-0 overflow-hidden rounded-md bg-secondary/20 p-1">
                          <img 
                            src={edu.logo} 
                            alt={edu.institution} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{edu.degree}</CardTitle>
                          <CardDescription>{edu.institution}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {edu.highlights.length > 0 && (
                    <CardContent className="pt-2">
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading flex items-center">
              <Users className="mr-2 text-primary" /> Leadership & Impact
            </h3>
            
            <div className="grid grid-cols-1 gap-6 h-full">
              {leadership.map((item, index) => (
                <Card key={index} className="card-hover h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 flex-shrink-0 overflow-hidden rounded-md bg-secondary/20 p-1">
                        <img 
                          src={item.logo} 
                          alt="University of Wisconsin-Madison" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
