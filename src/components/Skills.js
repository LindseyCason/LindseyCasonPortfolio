import React from "react";

const CATEGORIES = [
  {
    title: "Core Development",
    skills: [
      "React & Next.js",
      "Node.js & Express",
      "TypeScript & JavaScript",
      "PostgreSQL / SQL Databases",
    ],
  },
  {
    title: "Quality Assurance & Automation",
    skills: [
      "Automated Testing Infrastructure",
      "Playwright & Pytest",
      "CI/CD Pipeline Integration",
      "Regression & API Testing",
    ],
  },
  {
    title: "Methodologies & Systems",
    skills: [
      "Git & GitHub Version Control",
      "Scalable State Architecture",
      "Continuous Improvement / Kaizen",
      "Agile & Sprint Management",
    ],
  },
];

export const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-16 py-24 sm:py-32">

      {/* Section header */}
      <div className="mb-16 lg:mb-20">
        <p className="font-sans text-brass text-xs tracking-[0.25em] uppercase mb-4">
          The Toolkit
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-parchment leading-tight max-w-2xl">
Technical Toolkit
        </h2>
      </div>

      {/* Three-column directory */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {CATEGORIES.map(({ title, skills }) => (
          <div key={title}>
            <h3 className="font-serif text-lg font-light text-parchment border-b border-espresso-border pb-4 mb-6">
              {title}
            </h3>
            <ul className="space-y-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="font-sans text-sm text-cashmere tracking-wide transition-all duration-400 hover:text-parchment hover:translate-x-1 cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
