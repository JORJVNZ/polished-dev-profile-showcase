
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Check for user's preferred theme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme) {
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (prefersDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        
        <div className="section-divider" />
        
        <About />
        
        <div className="section-divider" />
        
        <Skills />
        
        <div className="section-divider" />
        
        <Projects />
        
        <div className="section-divider" />
        
        <Achievements />
        
        <div className="section-divider" />
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
