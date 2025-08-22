import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FolderOpen, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center" data-testid="section-hero">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" data-testid="text-hero-title">
                <span className="text-blue-600">Full Stack Developer</span>
                <br />& Problem Solver
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl" data-testid="text-hero-description">
                Hi, I'm <span className="font-semibold text-gray-900">Aman</span>, a B.Tech student at{" "}
                <span className="font-semibold text-gray-900">Netaji Subhas Engineering College</span>. 
                I love building web apps, exploring AI, and working on projects that solve real problems.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                data-testid="button-view-projects"
              >
                <FolderOpen className="mr-2 h-5 w-5" />
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                data-testid="button-get-in-touch"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern coding workspace with multiple monitors showing code" 
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              data-testid="img-hero-workspace"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
