
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
  Layers
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
      name: "Technical Skills",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["SQL", "AI-Driven Optimization", "Web3 & Blockchain", "Data Analysis"]
    },
    {
      name: "User Research",
      icon: <Users className="h-8 w-8 text-primary" />,
      skills: ["User Interviews", "Usability Testing", "Persona Development", "Journey Mapping"]
    },
    {
      name: "Analytics",
      icon: <LineChart className="h-8 w-8 text-primary" />,
      skills: ["Product Metrics", "Funnel Analysis", "Cohort Analysis", "A/B Testing"]
    },
    {
      name: "Tools",
      icon: <PenTool className="h-8 w-8 text-primary" />,
      skills: ["JIRA", "Mixpanel", "HubSpot", "Figma", "SQL"]
    },
    {
      name: "Business Intelligence",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      skills: ["Market Sizing", "Revenue Modeling", "KPI Development", "Stakeholder Management"]
    },
    {
      name: "Product Design",
      icon: <Layers className="h-8 w-8 text-primary" />,
      skills: ["Information Architecture", "Wireframing", "UX Principles", "Design Systems"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">
          Skills & <span className="text-primary">Tools</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-heading">{category.name}</h3>
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
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 font-heading">Certifications</h3>
          <div className="max-w-2xl mx-auto bg-card shadow-sm rounded-lg p-6 border">
            <p className="text-center text-muted-foreground italic">
              Add your certifications here (e.g., PM, AI/ML, Agile, etc.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
