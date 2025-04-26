
import { Code, Database } from "lucide-react";

export const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      icon: <Code className="h-6 w-6 text-purple" />,
      skills: ["JavaScript", "TypeScript", "C#", "Java", "HTML/CSS"]
    },
    {
      category: "Frameworks",
      icon: <Code className="h-6 w-6 text-purple" />,
      skills: ["ASP.NET", "Bootstrap", "Tailwind CSS", "Ionic Framework"]
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6 text-purple" />,
      skills: ["MySQL", "SQL Server"]
    },
    {
      category: "Tools",
      icon: <Code className="h-6 w-6 text-purple" />,
      skills: ["Git", "Visual Studio", "VS Code", "Telerik Controls"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-neutral-100 dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100 font-display">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillsData.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
