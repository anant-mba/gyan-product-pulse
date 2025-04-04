
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Award, Users } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "MBA, Technology Strategy & Product Management",
      institution: "University of Wisconsin-Madison",
      period: "2021 - 2023",
      highlights: [
        "President, Entrepreneurship Club",
        "Consumer Strategy Consulting Assistant",
        "Elected Representative for 2 years"
      ]
    },
    {
      degree: "B.Tech in Information Technology",
      institution: "West Bengal University of Technology",
      period: "2015 - 2019",
      highlights: []
    }
  ];

  const leadership = [
    {
      title: "President, Graduate Entrepreneurship Association",
      description: "Organized pitch competitions & mentorship events connecting students with entrepreneurs and investors."
    },
    {
      title: "Community Involvement",
      description: "Promoting financial literacy in Tribal Nations and supporting digital inclusion via tech tools."
    }
  ];

  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <h2 className="section-title">
          Education & <span className="text-primary">Leadership</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-heading flex items-center">
              <Award className="mr-2 text-primary" /> Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription>{edu.institution}</CardDescription>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <CalendarDays size={16} className="mr-1" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {edu.highlights.length > 0 && (
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
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
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-heading flex items-center">
              <Users className="mr-2 text-primary" /> Leadership & Impact
            </h3>
            
            <div className="space-y-6">
              {leadership.map((item, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
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
