
import React from 'react';
import { Rocket, Globe, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: <Rocket size={32} />,
      number: "3+",
      text: "Digital Products Launched"
    },
    {
      icon: <Globe size={32} />,
      number: "3",
      text: "Continents, Global Market Experience"
    },
    {
      icon: <Briefcase size={32} />,
      number: "Industry",
      text: <><span>Fintech</span><br /><span>Web3.0</span></>
    },
    {
      icon: <GraduationCap size={32} />,
      number: "MBA",
      text: "Technology Strategy & Product Management"
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">
          Meet <span className="text-primary">Anant Gyan</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a Professional Product Management expert focused on Business Operations, Strategy Development, and Process Design. With experience leading products from ideation to launch across North America, Asia, and Europe, I've driven measurable outcomes like $1.5M projected revenue, 95% process automation, and a 98% improvement in performance.
            </p>
            <p className="text-lg leading-relaxed">
              My approach combines technical understanding with strategic vision, allowing me to identify market opportunities and build solutions that deliver real value. I collaborate effectively with engineering, design, and business teams to create products that users love and businesses rely on.
            </p>
            <p className="text-lg leading-relaxed">
              Throughout my career, I've specialized in Fintech sectors, solving complex business challenges and creating innovative user experiences that drive growth and efficiency.
            </p>
          </div>
          
          <div className="flex flex-col space-y-8">
            <h3 className="text-2xl font-bold text-center font-heading">Quick Highlights</h3>
            
            <div className="grid grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-container">
                  <div className="highlight-icon text-primary">
                    {item.icon}
                  </div>
                  <div className="highlight-number">{item.number}</div>
                  <div className="highlight-text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
