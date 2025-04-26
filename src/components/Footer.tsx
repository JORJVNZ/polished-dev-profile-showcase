
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="#about"
              className="text-neutral-600 dark:text-neutral-400 text-sm hover:text-purple dark:hover:text-purple-light transition-colors"
            >
              About
            </a>
            <a 
              href="#skills"
              className="text-neutral-600 dark:text-neutral-400 text-sm hover:text-purple dark:hover:text-purple-light transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects"
              className="text-neutral-600 dark:text-neutral-400 text-sm hover:text-purple dark:hover:text-purple-light transition-colors"
            >
              Projects
            </a>
            <a 
              href="#achievements"
              className="text-neutral-600 dark:text-neutral-400 text-sm hover:text-purple dark:hover:text-purple-light transition-colors"
            >
              Achievements
            </a>
            <a 
              href="#contact"
              className="text-neutral-600 dark:text-neutral-400 text-sm hover:text-purple dark:hover:text-purple-light transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
