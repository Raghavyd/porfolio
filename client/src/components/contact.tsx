import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const contacts = [
  {
    id: "email",
    title: "Email",
    value: "amankumar900651@gmail.com",
    href: "mailto:amankumar900651@gmail.com",
    icon: Mail,
    gradient: "from-red-50 to-pink-50",
    iconBg: "bg-red-100 group-hover:bg-red-200",
    iconColor: "text-red-600"
  },
  {
    id: "github",
    title: "GitHub",
    value: "@amankumar900651",
    href: "https://github.com/amankumar900651",
    icon: Github,
    gradient: "from-gray-50 to-slate-50",
    iconBg: "bg-gray-100 group-hover:bg-gray-200",
    iconColor: "text-gray-700"
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    value: "aman-kumar-900651",
    href: "https://linkedin.com/in/aman-kumar-900651",
    icon: Linkedin,
    gradient: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-100 group-hover:bg-blue-200",
    iconColor: "text-blue-600"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white" data-testid="section-contact">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-testid="text-contact-title">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed" data-testid="text-contact-description">
              I'm open to internships, collaborations, and exciting opportunities in web development and AI. 
              Let's build something amazing together!
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  data-testid={`card-contact-${contact.id}`}
                >
                  <Card className={`group bg-gradient-to-br ${contact.gradient} rounded-2xl border hover:shadow-xl transform transition-all duration-300`}>
                    <CardContent className="p-8">
                      <a 
                        href={contact.href}
                        target={contact.id !== "email" ? "_blank" : undefined}
                        rel={contact.id !== "email" ? "noopener noreferrer" : undefined}
                        className="block"
                        data-testid={`link-${contact.id}`}
                      >
                        <div className={`w-16 h-16 mx-auto mb-4 ${contact.iconBg} rounded-xl flex items-center justify-center transition-colors duration-300`}>
                          <IconComponent className={`w-8 h-8 ${contact.iconColor}`} />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2" data-testid={`text-contact-title-${contact.id}`}>
                          {contact.title}
                        </h3>
                        <p className="text-gray-600 text-sm" data-testid={`text-contact-value-${contact.id}`}>
                          {contact.value}
                        </p>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            data-testid="card-collaboration"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Code editor with colorful syntax highlighting and web development setup" 
                  className="w-full h-full object-cover opacity-20"
                  data-testid="img-collaboration-bg"
                />
              </div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-collaboration-title">
                  Ready to Collaborate?
                </h3>
                <p className="text-blue-100 mb-6" data-testid="text-collaboration-description">
                  Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
                </p>
                <Button
                  asChild
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  data-testid="button-send-message"
                >
                  <a href="mailto:amankumar900651@gmail.com">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
