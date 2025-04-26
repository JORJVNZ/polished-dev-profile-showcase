
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start max-w-5xl mx-auto">
          <div className="md:flex-1">
            <p className="text-primary dark:text-primary-light font-medium mb-4 animate-fade-in">
              Hi, my name is
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 font-display animate-fade-in" style={{ animationDelay: "100ms" }}>
              John Doe
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-600 dark:text-neutral-400 mb-8 font-display animate-fade-in" style={{ animationDelay: "200ms" }}>
              I build exceptional web solutions.
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: "300ms" }}>
              I'm a professional web developer specializing in creating robust, scalable applications with modern frameworks and tools. Let's build something amazing together.
            </p>
            <div className="flex space-x-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button asChild className="bg-primary hover:bg-primary-dark text-white">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline">
                <a href="#" className="text-neutral-700 dark:text-neutral-300">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 md:ml-12 animate-fade-in" style={{ animationDelay: "500ms" }}>
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 p-2">
                <Avatar className="w-full h-full">
                  <AvatarImage src="placeholder.svg" alt="Profile" className="object-cover" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
