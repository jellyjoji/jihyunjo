import React, { useEffect } from "react";
import { ArrowLeft, CircuitBoard, ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSelector } from "./language-selector";
import { useLanguage } from "../contexts/language-context";

const REPO_URL = "https://github.com/jellyjoji/arduino-projects";

export function ArduinoProjects() {
  const { t, language } = useLanguage();

  // Opening this page should feel like landing on a fresh page, not mid-scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subProjects = [
    {
      folder: "LED_Fighter_v12",
      title: t("arduino.ledFighter"),
      description: t("arduino.ledFighterDesc"),
      detailPath: "#flow-wave",
    },
    {
      folder: "LED_Joystick_v1",
      title: t("arduino.ledJoystick"),
      description: t("arduino.ledJoystickDesc"),
      detailPath: "#joystick-led-matrix",
    },
    {
      folder: "Locker_v1",
      title: t("arduino.locker"),
      description: t("arduino.lockerDesc"),
      detailPath: "#smart-safe",
    },
    {
      folder: "smart_greenhouse_v1",
      title: t("arduino.smartGreenhouse"),
      description: t("arduino.smartGreenhouseDesc"),
      detailPath: "#smart-greenhouse",
    },
    {
      folder: "ir_tripwire_v1",
      title: t("arduino.irTripwire"),
      description: t("arduino.irTripwireDesc"),
      detailPath: "#ir-tripwire",
    },
    {
      folder: "touch_sensor_piano_v1",
      title: t("arduino.touchSensorPiano"),
      description: t("arduino.touchSensorPianoDesc"),
      detailPath: "#touch-sensor-piano",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a
              href="#projects"
              className="text-xl font-medium hover:text-muted-foreground transition-colors"
            >
              {language === "ko" ? "조지현" : "Jihyun Jo"}
            </a>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("arduino.back")}
            </a>

            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl font-medium mb-6">
                {t("arduino.pageTitle")}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                {t("arduino.pageSubtitle")}
              </p>
              <Button asChild variant="outline">
                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  {t("arduino.viewRepo")}
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subProjects.map((project) => (
                <Card
                  key={project.folder}
                  className="overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-video overflow-hidden flex items-center justify-center bg-muted">
                    {project.detailPath ? (
                      <a
                        href={project.detailPath}
                        className="flex items-center justify-center w-full h-full"
                      >
                        <CircuitBoard className="w-16 h-16 text-muted-foreground group-hover:scale-105 transition-transform duration-300" />
                      </a>
                    ) : (
                      <CircuitBoard className="w-16 h-16 text-muted-foreground group-hover:scale-105 transition-transform duration-300" />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>
                      {project.detailPath ? (
                        <a
                          href={project.detailPath}
                          className="hover:text-muted-foreground transition-colors"
                        >
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        Arduino
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        C++
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      {project.detailPath && (
                        <Button size="sm" asChild>
                          <a href={project.detailPath}>
                            {t("arduino.viewDetails")}
                          </a>
                        </Button>
                      )}
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={`${REPO_URL}/tree/main/${project.folder}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t("arduino.viewCode")}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
