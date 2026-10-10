import React, { useEffect } from "react";
import { ArrowLeft, ArrowDown, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSelector } from "./language-selector";
import { useLanguage } from "../contexts/language-context";

const REPO_FOLDER_URL =
  "https://github.com/jellyjoji/arduino-projects/tree/main/smart_greenhouse_v1";
const YOUTUBE_VIDEO_ID = "WCpTbx90ct8";

export function SmartGreenhouse() {
  const { t, language } = useLanguage();
  const ko = language === "ko";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const flowSteps = ko
    ? [
        "DHT11에서 온도·습도 측정",
        "ESP32에서 값 확인 및 기록",
        "기준값과 비교",
        "릴레이로 외부 장치 제어",
      ]
    : [
        "Measure temperature/humidity with DHT11",
        "Check and log the values on the ESP32",
        "Compare against reference values",
        "Control an external device via relay",
      ];

  const hardware = ko
    ? [
        "ESP32 개발 보드",
        "DHT11 온습도 센서 (DATA: GPIO 4)",
        "릴레이 모듈 (IN: GPIO 26)",
        "릴레이로 제어할 장치 — 확장 대상",
      ]
    : [
        "ESP32 development board",
        "DHT11 temperature/humidity sensor (DATA: GPIO 4)",
        "Relay module (IN: GPIO 26)",
        "Device to be controlled by the relay — to be added",
      ];

  const nextSteps = ko
    ? [
        "온도·습도 기준에 따른 릴레이 제어 조건 구현",
        "임계값 주변의 반복 전환을 막는 히스테리시스 적용",
        "센서 오류 시 릴레이의 안전 상태 정의",
        "팬 등 저전압 장치와 함께 동작 확인",
        "시리얼 로그와 시연 영상으로 동작 결과 기록",
      ]
    : [
        "Implement relay-control conditions based on temperature/humidity thresholds",
        "Add hysteresis to prevent repeated switching near the threshold",
        "Define a safe relay state for sensor-error cases",
        "Verify behavior with a fan or other low-voltage device",
        "Record the results with serial logs and a demo video",
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
              {ko ? "조지현" : "Jihyun Jo"}
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
          <div className="max-w-4xl mx-auto">
            <a
              href="#arduino-projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("smartGreenhouse.back")}
            </a>

            {/* Title block */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-3">
                {t("smartGreenhouse.title")}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {t("smartGreenhouse.subtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["ESP32", "DHT11", "Relay", "Arduino"].map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                {t("smartGreenhouse.intro")}
              </p>
            </div>

            {/* Video */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("smartGreenhouse.videoHeading")}
              </h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="Smart Greenhouse demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Concept */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("smartGreenhouse.conceptHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("smartGreenhouse.conceptBody")}
              </p>
            </div>

            {/* System flow */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-6">
                {t("smartGreenhouse.flowHeading")}
              </h2>
              <div className="flex flex-col items-center gap-2 bg-muted/30 border border-border rounded-lg py-8 px-4">
                {flowSteps.map((step, i) => (
                  <React.Fragment key={step}>
                    <div className="px-4 py-2 rounded-md bg-background border border-border text-sm sm:text-base text-center">
                      {step}
                    </div>
                    {i < flowSteps.length - 1 && (
                      <ArrowDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Hardware */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("smartGreenhouse.hardwareHeading")}
              </h2>
              <ul className="space-y-2">
                {hardware.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span className="text-foreground">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Current implementation status */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("smartGreenhouse.statusHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("smartGreenhouse.statusBody")}
              </p>
              <div className="bg-muted/30 border border-border rounded-lg p-4">
                <p className="text-sm text-foreground leading-relaxed">
                  {t("smartGreenhouse.statusNote")}
                </p>
              </div>
            </div>

            {/* Next steps */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("smartGreenhouse.nextStepsHeading")}
              </h2>
              <ul className="space-y-2">
                {nextSteps.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span className="text-foreground">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Repo link */}
            <div className="text-center">
              <Button asChild variant="outline">
                <a
                  href={REPO_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  {t("smartGreenhouse.repoLink")}
                </a>
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-16">
              {t("smartGreenhouse.footerNote")}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
