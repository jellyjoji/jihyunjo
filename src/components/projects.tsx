import React from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/language-context";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("projects.paysm"),
      description: t("projects.paysmDesc"),
      image:
        "https://github.com/jellyjoji/jihyunjo/blob/main/src/assets/paysm.png?raw=true",
      tags: [
        "Next.js",
        "JavaScript",
        "SCSS",
        "HTML/CSS",
        "Node.js",
        "Figma",
        "UI/UX Design",
        "Responsive Design",
      ],
      liveUrl: "https://www.paysm.net",
      githubUrl: "https://github.com/jellyjoji/paysm.net",
    },
    {
      title: t("projects.paysmApp"),
      description: t("projects.paysmAppDesc"),
      image:
        "https://github.com/jellyjoji/jihyunjo/blob/main/src/assets/paysmApp.png?raw=true",
      tags: [
        "Next.js",
        "JavaScript",
        "SCSS",
        "HTML/CSS",
        "Node.js",
        "Figma",
        "UI/UX Design",
        "Responsive Design",
        "Prototyping",
      ],
      liveUrl:
        "https://www.figma.com/proto/VUgEzTMKx17xJTq4VBbkzd/PF?page-id=0%3A1&node-id=1-753&p=f&viewport=-78%2C-1918%2C0.19&t=gpGEfWBoaM02LRjw-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A753",
      githubUrl: "https://github.com/jellyjoji/app-paysm",
    },
    {
      title: t("projects.dashboard"),
      description: t("projects.dashboardDesc"),
      image:
        "https://jellyjo.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fddadffc7-7ba1-4929-abc1-abba1179d311%2F684449b2-28b9-4cd3-b63b-5efd523cea99%2F16_9-1.png?table=block&id=c199a837-123e-41d1-aad3-836f32b32c92&spaceId=ddadffc7-7ba1-4929-abc1-abba1179d311&width=2000&userId=&cache=v2",
      tags: [
        "Vue.js",
        "JavaScript",
        "SCSS",
        "HTML/CSS",
        "Node.js",
        "Figma",
        "UI/UX Design",
        "Responsive Design",
        "Prototyping",
        "Design Systems",
      ],
      liveUrl: "https://jellyjo.notion.site/",
      githubUrl: "https://github.com/jellyjoji/mini-project",
    },
    {
      title: t("projects.platform"),
      description: t("projects.platformDesc"),
      image:
        "https://jellyjo.notion.site/image/https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPyz12%2FbtsudiRXwlu%2FewOdXOsOu45WMp2zwUxx81%2Fimg.png?table=block&id=80460f00-58d6-4727-b27e-03f2de8dace6&spaceId=ddadffc7-7ba1-4929-abc1-abba1179d311&width=1400&userId=&cache=v2",
      tags: [
        "React.js",
        "JavaScript",
        "SCSS",
        "Tailwind CSS",
        "HTML/CSS",
        "Node.js",
        "REST APIs",
        "Figma",
        "UI/UX Design",
        "Responsive Design",
        "Accessibility",
        "Prototyping",
        "Design Systems",
      ],
      liveUrl:
        "https://jellyjo.notion.site/Portfolio_Jihyun-Jo-28b2643648e280af9d38cd77b0a70a0f",
      githubUrl: "https://github.com/jellyjoji/ready-act",
    },
    {
      title: t("projects.homework"),
      description: t("projects.homeworkDesc"),
      image:
        "https://github.com/jellyjoji/jihyunjo/blob/main/src/assets/homework.png?raw=true",
      tags: [
        "Figma",
        "UI/UX Design",
        "Responsive Design",
        "Accessibility",
        "Prototyping",
        "Design Systems",
      ],
      liveUrl:
        "https://www.figma.com/proto/s0Ip4rbunLFJ3TmW4KxQsk/Kids?page-id=6%3A2828&node-id=35-1580&p=f&viewport=462%2C217%2C0.07&t=swFy0yw9Ur1hERTa-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=35%3A1580",
      // githubUrl: "https://github.com/jellyjoji/jihyunjo",
    },
    {
      title: t("projects.healthcare"),
      description: t("projects.healthcareDesc"),
      image:
        "https://github.com/jellyjoji/jihyunjo/blob/main/src/assets/healthcare.png?raw=true",
      tags: [
        "Figma",
        "UI/UX Design",
        "Responsive Design",
        "Accessibility",
        "Prototyping",
        "Design Systems",
      ],
      liveUrl:
        "https://www.figma.com/proto/pSmT0GvCXghKRVDLGDMCMs/Mediorm?page-id=128%3A4926&node-id=495-6504&viewport=897%2C-1958%2C0.15&t=6cfXrc19yuOHHgrB-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=495%3A6504",
      // githubUrl: "https://github.com/jellyjoji/WeatherApp",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-6">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t("projects.liveDemo")}
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t("projects.code")}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
