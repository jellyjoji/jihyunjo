import React from "react";
import { Code, Palette, Zap } from "lucide-react";
import { Badge } from "./ui/badge";
import { useLanguage } from "../contexts/language-context";

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.frontend"),
      icon: Code,
      skills: [
        "React.js",
        "Next.js",
        "JavaScript",
        "SCSS",
        "Tailwind CSS",
        "HTML/CSS",
      ],
    },
    {
      title: t("skills.backend"),
      icon: Code,
      skills: ["Node.js", "REST APIs", "SQL"],
    },
    {
      title: t("skills.tools"),
      icon: Zap,
      skills: ["Git", "GitHub", "VS Code", "npm/yarn", "Webpack", "Vite"],
    },
    {
      title: t("skills.design"),
      icon: Palette,
      skills: [
        "Figma",
        "UI/UX Design",
        "Responsive Design",
        "Accessibility",
        "Prototyping",
        "Design Systems",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-6">
            {t("skills.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
