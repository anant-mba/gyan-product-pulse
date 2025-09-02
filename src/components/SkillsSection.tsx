
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Briefcase, 
  Users, 
  LineChart, 
  Database, 
  PenTool, 
  GanttChart, 
  Layers,
  Award
} from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      name: "Product Strategy",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      skills: ["Market Analysis", "Roadmap Planning", "Competitive Analysis", "User Empathy"]
    },
    {
      name: "Development Methodologies",
      icon: <GanttChart className="h-8 w-8 text-primary" />,
      skills: ["Agile / Scrum", "Kanban", "Waterfall", "Lean Startup"]
    },
    {
      name: "Product Management",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["Product Lifecycle Management", "Feature Scoping (PRD)", "Security & Regulatory Awareness", "OKR/KPIs Tracking"]
    },
    {
      name: "User Research",
      icon: <Users className="h-8 w-8 text-primary" />,
      skills: ["User Interviews", "Usability Testing", "Persona Development", "Journey Mapping"]
    },
    {
      name: "Analytics",
      icon: <LineChart className="h-8 w-8 text-primary" />,
      skills: ["Product Metrics", "A/B Testing"]
    },
    {
      name: "Tools",
      icon: <PenTool className="h-8 w-8 text-primary" />,
      skills: ["JIRA", "Mixpanel", "HubSpot", "Figma", "Etherscan"]
    },
    {
      name: "Business Intelligence",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      skills: ["Market Sizing", "KPI Development", "Stakeholder Management", "Requirement Gathering"]
    },
    {
      name: "Product Design",
      icon: <Layers className="h-8 w-8 text-primary" />,
      skills: ["Information Architecture", "Wireframing", "UX Principles", "Design Systems"]
    }
  ];

  const certifications = [
    {
      title: "Certified Scrum Product Owner (CSPO)",
      provider: "Scrum Alliance",
      year: "2024"
    },
    {
      title: "Certified Scrum Master (CSM)",
      provider: "Scrum Alliance",
      year: "2024"
    },
    {
      title: "Project Management",
      provider: "Microsoft & LinkedIn",
      year: "2021"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">
          Skills & <span className="text-primary">Tools</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center h-full">
                  <div className="mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-heading text-center">{category.name}</h3>
                  <ul className="space-y-2 w-full">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-muted-foreground text-center">{skill}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-center mb-8 font-heading flex items-center justify-center">
            <Award className="mr-2 text-primary" />
            Certifications
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                    <p className="text-muted-foreground">{cert.provider}</p>
                    <p className="text-sm text-primary">{cert.year}</p>
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

export default SkillsSection;
