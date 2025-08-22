export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-8 px-6 bg-gray-900 text-white" data-testid="footer-main">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400" data-testid="text-copyright">
              © 2025 <span className="text-white font-semibold">Aman Kumar</span>. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              data-testid="link-footer-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              data-testid="link-footer-skills"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              data-testid="link-footer-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
