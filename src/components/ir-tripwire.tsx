import React, { useEffect } from "react";
import { ArrowLeft, ArrowDown, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSelector } from "./language-selector";
import { useLanguage } from "../contexts/language-context";

const REPO_FOLDER_URL =
  "https://github.com/jellyjoji/arduino-projects/tree/main/ir_tripwire_v1";
const YOUTUBE_VIDEO_ID = "WEJk4NfAY6w";

export function IrTripwire() {
  const { t, language } = useLanguage();
  const ko = language === "ko";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scenarioSteps = ko
    ? [
        "빔 연결 · 초록 LED",
        "사람 또는 물체가 빔을 차단",
        "ESP32가 상태 변화 감지",
        "빨간 LED · Active/Passive 부저 경고",
        "빔 복구 · 초록 LED",
      ]
    : [
        "Beam connected · green LED",
        "A person or object blocks the beam",
        "ESP32 detects the state change",
        "Red LED · active/passive buzzer alert",
        "Beam restored · green LED",
      ];

  const implementation = ko
    ? [
        "38 kHz 적외선 송신 및 디지털 수신 상태 판정",
        "3 ms 검사 구간에서 수신 신호 확인",
        "이전 프레임과 현재 프레임을 비교한 에지 기반 이벤트 감지",
        "RGB LED 색상으로 대기·경보 상태 표현",
        "두 종류의 부저를 결합한 경고 사운드",
        "시리얼 모니터를 통한 상태 이벤트 로깅",
      ]
    : [
        "Transmits 38kHz infrared and judges the digital receive state",
        "Checks the received signal in 3ms inspection windows",
        "Edge-based event detection by comparing the previous and current frame",
        "RGB LED color represents the standby/alarm state",
        "Alert sound combining two kinds of buzzers",
        "Logs state events through the serial monitor",
      ];

  const hardware = ko
    ? [
        "ESP32 계열 보드",
        "IR 송신 LED 및 디지털 IR 수신 모듈",
        "RGB LED",
        "Active buzzer와 Passive buzzer",
      ]
    : [
        "ESP32-family board",
        "IR transmitter LED and digital IR receiver module",
        "RGB LED",
        "Active buzzer and passive buzzer",
      ];

  const nextSteps = ko
    ? [
        "비차단 타이머 방식으로 경고음과 센서 감지를 동시에 처리",
        "차단 지속 시간이나 반복 횟수에 따른 경보 패턴 추가",
        "여러 빔을 배치해 통과 방향 또는 구간 구분",
        "송신기·수신기 정렬 상태를 확인하는 진단 모드 추가",
      ]
    : [
        "Handle the alert sound and sensor detection concurrently using a non-blocking timer",
        "Add alarm patterns based on how long or how often the beam is blocked",
        "Deploy multiple beams to distinguish direction of passage or separate zones",
        "Add a diagnostic mode to check transmitter/receiver alignment",
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
              {t("irTripwire.back")}
            </a>

            {/* Title block */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-3">
                {t("irTripwire.title")}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {t("irTripwire.subtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["ESP32", "38 kHz IR", "RGB LED", "Dual Buzzer"].map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                {t("irTripwire.intro")}
              </p>
            </div>

            {/* Video */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("irTripwire.videoHeading")}
              </h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="IR Invisible Tripwire demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Concept */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("irTripwire.conceptHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("irTripwire.conceptBody")}
              </p>
            </div>

            {/* Interaction flow */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-6">
                {t("irTripwire.scenarioHeading")}
              </h2>
              <div className="flex flex-col items-center gap-2 bg-muted/30 border border-border rounded-lg py-8 px-4">
                {scenarioSteps.map((step, i) => (
                  <React.Fragment key={step}>
                    <div className="px-4 py-2 rounded-md bg-background border border-border text-sm sm:text-base text-center">
                      {step}
                    </div>
                    {i < scenarioSteps.length - 1 && (
                      <ArrowDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Implementation */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("irTripwire.implementationHeading")}
              </h2>
              <ul className="space-y-2">
                {implementation.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span className="text-foreground">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hardware */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("irTripwire.hardwareHeading")}
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

            {/* Current scope */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("irTripwire.scopeHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("irTripwire.scopeBody")}
              </p>
            </div>

            {/* Next steps */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("irTripwire.nextStepsHeading")}
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
                  {t("irTripwire.repoLink")}
                </a>
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-16">
              {t("irTripwire.footerNote")}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
