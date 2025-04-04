
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Anant Gyan. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#home" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#experience" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
