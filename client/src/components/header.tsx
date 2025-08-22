import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm" 
          : "bg-white/90 backdrop-blur-md border-b border-gray-200"
      }`}
      data-testid="header-navigation"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900" data-testid="text-logo">
            Aman Kumar
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              data-testid="link-projects-desktop"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              data-testid="link-skills-desktop"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              data-testid="link-contact-desktop"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100" data-testid="menu-mobile">
            <div className="flex flex-col space-y-3 mt-4">
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                data-testid="link-projects-mobile"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("skills")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                data-testid="link-skills-mobile"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                data-testid="link-contact-mobile"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
