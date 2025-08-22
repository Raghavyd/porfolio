import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "HTML", icon: "🌐", color: "from-orange-100 to-orange-200", iconColor: "text-orange-600" },
  { name: "CSS", icon: "🎨", color: "from-blue-100 to-blue-200", iconColor: "text-blue-600" },
  { name: "JavaScript", icon: "⚡", color: "from-yellow-100 to-yellow-200", iconColor: "text-yellow-600" },
  { name: "React", icon: "⚛️", color: "from-cyan-100 to-cyan-200", iconColor: "text-cyan-600" },
  { name: "Node.js", icon: "🟢", color: "from-green-100 to-green-200", iconColor: "text-green-600" },
  { name: "Express", icon: "🚀", color: "from-purple-100 to-purple-200", iconColor: "text-purple-600" },
  { name: "C++", icon: "💻", color: "from-indigo-100 to-indigo-200", iconColor: "text-indigo-600" },
  { name: "Problem Solving", icon: "🧠", color: "from-red-100 to-red-200", iconColor: "text-red-600" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50" data-testid="section-skills">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-testid="text-skills-title">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-skills-description">
            A comprehensive toolkit for building modern web applications and solving complex problems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              data-testid={`card-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
            >
              <Card className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center p-6">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-3xl`}>
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg" data-testid={`text-skill-name-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                    {skill.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
