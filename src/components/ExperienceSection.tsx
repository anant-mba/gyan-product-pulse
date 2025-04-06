
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from 'lucide-react';

type CaseStudy = {
  company: string;
  role: string;
  problem: string;
  contribution: string;
  outcomes: string[];
  tags: string[];
  award?: string;
};

const ExperienceSection: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      company: "Google",
      role: "Product Manager (CS)",
      problem: "SQL queries within internal tools were slow and inefficient.",
      contribution: "Evaluated AI-driven optimization models on 100+ SQL queries.",
      outcomes: [
        "Led product vision for 98% performance improvement",
        "Managed product lifecycle using Agile methodology",
        "Prioritized AI features that enabled smarter data processing"
      ],
      tags: ["Product Management", "AI", "SQL Optimization", "Agile"]
    },
    {
      company: "Smart Charging Technology",
      role: "Product Market Research Intern",
      problem: "Unclear demand for power solutions in international markets.",
      contribution: "Conducted market analysis and customer outreach.",
      outcomes: [
        "Researched 75+ companies",
        "Identified 3 key market needs and 60+ leads",
        "Converted 5 leads into clients through demos and surveys"
      ],
      tags: ["Market Research", "Customer Acquisition"]
    },
    {
      company: "CryptoSmartlife",
      role: "Product Manager",
      problem: "No user-facing product in place, with a tight 3-month runway to create a complex fintech platform while ensuring user trust, regulatory readiness, and seamless UX.",
      contribution: "Led a 14-member team to streamline product operations.",
      outcomes: [
        "Expanded into Europe with projected $1.5M revenue",
        "Reduced payment errors, saving $200K in 5 years",
        "Cut KYC time by 95% with automation",
        "Reduced churn by 45% through Slack-integrated API monitoring"
      ],
      tags: ["Product Management", "Operations Management", "Business Strategy", "Fintech", "KYC Automation", "API Monitoring"],
      award: "Best Maverick Award"
    },
    {
      company: "InfyCrypto",
      role: "Product & Portfolio Manager",
      problem: "Lack of a structured crypto trading experience for HNWIs in India.",
      contribution: "Built India's first OTC crypto desk; optimized client portfolios.",
      outcomes: [
        "Managed $60K+ in client assets",
        "Saved $36K+ in premium fees via negotiation",
        "Partnered with 3 liquidity providers for better execution"
      ],
      tags: ["Crypto", "OTC Trading", "Portfolio Management"]
    },
    {
      company: "DCEX",
      role: "Associate Product Manager (Founding Team)",
      problem: "Needed market entry and process design from scratch.",
      contribution: "First hire, led go-to-market and product operations.",
      outcomes: [
        "Acquired 5,000+ users in 3 months",
        "Led a 7-person cross-functional team",
        "Designed OTC service processes and increased revenue by 8%"
      ],
      tags: ["Product Management", "Operations Management", "Performance Optimization", "Go-to-Market", "Process Design", "Team Leadership"]
    },
    {
      company: "Tata Consultancy Services",
      role: "Assistant System Engineer",
      problem: "System latency and SLA breaches for FMCG client.",
      contribution: "Redesigned core systems and streamlined performance.",
      outcomes: [
        "Improved system performance",
        "Reduced SLA breaches by 30%"
      ],
      tags: ["System Design", "Performance Optimization", "FMCG"],
      award: "TCS On The Spot Award"
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <h2 className="section-title">
          Experience
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="card-hover overflow-hidden border-t-4 border-t-primary">
              <CardHeader className="bg-muted/30">
                <CardTitle>{study.company}</CardTitle>
                <CardDescription>{study.role}</CardDescription>
                {study.award && (
                  <div className="flex items-center mt-2 text-primary">
                    <Award className="h-4 w-4 mr-1" />
                    <span className="text-sm">{study.award}</span>
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h4 className="font-bold text-base mb-1">Problem:</h4>
                  <p className="text-muted-foreground">{study.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-base mb-1">My Role:</h4>
                  <p className="text-muted-foreground">{study.contribution}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-base mb-1">Outcome:</h4>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    {study.outcomes.map((outcome, i) => (
                      <li key={i}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-2 flex flex-wrap gap-2">
                  {study.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-secondary/50">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
