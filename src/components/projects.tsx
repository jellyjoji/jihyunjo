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
      title: t("projects.ecommerce"),
      description: t("projects.ecommerceDesc"),
      image:
        "https://github.com/jellyjoji/jihyunjo/blob/main/src/assets/og.png?raw=true",
      tags: ["Next.js", "Node.js", "SCSS"],
      liveUrl: "https://www.paysm.net",
      githubUrl: "https://github.com/jellyjoji/paysm.net",
    },
    {
      title: t("projects.dashboard"),
      description: t("projects.dashboardDesc"),
      image:
        // "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        // "https://jellyjo.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fddadffc7-7ba1-4929-abc1-abba1179d311%2Fc0933214-13c2-4620-b22e-331bf2c008ef%2Flogin.png?table=block&id=dbb31f9c-4dd9-4bd6-b52e-9c9044ca5fb3&spaceId=ddadffc7-7ba1-4929-abc1-abba1179d311&width=2000&userId=&cache=v2",
        "https://jellyjo.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fddadffc7-7ba1-4929-abc1-abba1179d311%2F4fb55ae9-d91f-4ef1-966d-539191ea7d36%2Flogout.png?table=block&id=a490464f-ee0f-4172-92df-b302da3175f8&spaceId=ddadffc7-7ba1-4929-abc1-abba1179d311&width=1420&userId=&cache=v2",
      tags: ["Vue.js", "Node.js", "SCSS"],
      liveUrl: "https://jellyjo.notion.site/",
      githubUrl: "https://github.com/jellyjoji/mini-project",
    },
    {
      title: t("projects.ux"),
      description: t("projects.uxDesc"),
      image:
        "https://jellyjo.notion.site/image/https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPyz12%2FbtsudiRXwlu%2FewOdXOsOu45WMp2zwUxx81%2Fimg.png?table=block&id=80460f00-58d6-4727-b27e-03f2de8dace6&spaceId=ddadffc7-7ba1-4929-abc1-abba1179d311&width=1400&userId=&cache=v2",
      // "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      // "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FXemRa%2FbtrXBbjnwmI%2FAAAAAAAAAAAAAAAAAAAAAIsVNPcRV5RhJEXijOEOoqxwkrAtCvfy768QN9XoIo_0%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1761922799%26allow_ip%3D%26allow_referer%3D%26signature%3DyQ6VT4HAzVlurtmEqRnJ%252B9fRFaE%253D",
      // "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbM5PP9%2FbtrXnll55ih%2FAAAAAAAAAAAAAAAAAAAAAL3_RPXTlnxyuJ7nL3UmeaQmKQWU8fChTheBrJE36ii-%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1761922799%26allow_ip%3D%26allow_referer%3D%26signature%3DhZdghfM2%252Fiw8Jw06ld9Y5bc5jw0%253D",
      tags: ["React", "TypeScript", "D3.js", "Python", "FastAPI"],
      liveUrl:
        "https://jellyjo.notion.site/Resume-ba42ce1b90f4489d9d25376ef1c846f1",
      githubUrl: "https://github.com/jellyjoji/ready-act",
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
