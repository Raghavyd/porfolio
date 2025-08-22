import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Bot, Home } from "lucide-react";

const projects = [
  {
    id: "genix-ai",
    name: "Genix AI",
    description: "AI-powered assistant that can answer real-time queries and open desktop apps, built in VS Code with plans to scale to the web.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    link: "https://genix-ai-nu.vercel.app/",
    icon: Bot,
    tags: ["AI", "JavaScript"],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: "estate-website",
    name: "Estate Website",
    description: "Real estate website showcasing properties with a clean frontend built using React and modern UI design.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450",
    link: "https://estate-aman.vercel.app/",
    icon: Home,
    tags: ["React", "UI/UX"],
    gradient: "from-green-500 to-teal-600"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white" data-testid="section-projects">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-projects-description">
            Here are some of my recent projects that showcase my skills in web development and AI.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                data-testid={`card-project-${project.id}`}
              >
                <Card className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <img 
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover opacity-80"
                      data-testid={`img-project-${project.id}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 text-white">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="w-6 h-6" />
                        <span className="text-sm font-medium">{project.name}</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid={`text-project-name-${project.id}`}>
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed" data-testid={`text-project-description-${project.id}`}>
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        {project.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary" 
                            className="px-3 py-1 text-sm font-medium"
                            data-testid={`badge-tag-${tag.toLowerCase()}-${project.id}`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        asChild
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                        data-testid={`link-project-${project.id}`}
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
