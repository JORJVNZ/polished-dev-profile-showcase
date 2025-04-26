
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100 font-display">
          Get In Touch
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label 
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Name
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-purple hover:bg-purple-dark text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                  Contact Information
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                  Feel free to reach out to me directly or by filling out the contact form. I'll get back to you as soon as possible.
                </p>
                
                <div className="flex flex-col space-y-4">
                  <a 
                    href="mailto:info@example.com"
                    className="flex items-center text-neutral-700 dark:text-neutral-300 hover:text-purple dark:hover:text-purple-light transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    info@example.com
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                  Connect
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-purple hover:text-white dark:hover:bg-purple dark:hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-purple hover:text-white dark:hover:bg-purple dark:hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="mailto:info@example.com"
                    className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-purple hover:text-white dark:hover:bg-purple dark:hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
