
import { Star } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      title: "Gold Winner - IT for Business Solutions",
      organization: "Regional Skills Competition",
      description: "Recognized as the Gold Winner in IT for Business Solutions at the Regional Skills Competition, showcasing exceptional technical skills and innovative problem-solving abilities."
    },
    {
      title: "Web Development NC III Holder",
      organization: "TESDA",
      description: "Successfully completed and passed the Web Development NC III certification, demonstrating proficiency in developing dynamic and responsive web applications."
    },
    {
      title: "Best Project Award",
      organization: "University Capstone Project",
      description: "Awarded for developing an outstanding web-based information system that improved institutional efficiency and data management."
    }
  ];

  return (
    <section id="achievements" className="py-16 bg-neutral-100 dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-neutral-900 dark:text-neutral-100 font-display">
          Achievements & Certifications
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700 mb-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple/10 dark:bg-purple/20 rounded-full mt-1">
                  <Star className="h-6 w-6 text-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-neutral-900 dark:text-neutral-100">
                    {achievement.title}
                  </h3>
                  <p className="text-purple dark:text-purple-light text-sm mb-3">
                    {achievement.organization}
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
