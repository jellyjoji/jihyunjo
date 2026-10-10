import React, { useEffect } from "react";
import { ArrowLeft, ArrowDown, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSelector } from "./language-selector";
import { useLanguage } from "../contexts/language-context";

const REPO_FOLDER_URL =
  "https://github.com/jellyjoji/arduino-projects/tree/main/LED_Fighter_v12";
const YOUTUBE_VIDEO_ID = "zFAX9xJCNcM";

export function FlowWave() {
  const { t, language } = useLanguage();
  const ko = language === "ko";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scenarioSteps = ko
    ? [
        "손이 15 cm 안으로 접근",
        "RGBW 스트립: 청록·파랑 pulse와 shimmer",
        "스트립 끝에서 밝게 유지 후 페이드아웃",
        "16×16 패널: 중심 플래시와 컬러 파장",
        "효과 종료 · 대기",
        "손이 20 cm 밖으로 이동하면 재트리거 준비",
      ]
    : [
        "Hand approaches within 15cm",
        "RGBW strip: cyan/blue pulse and shimmer",
        "Holds bright at the end of the strip, then fades out",
        "16×16 panel: center flash and colored wave",
        "Effect ends · idle",
        "Ready to re-trigger once the hand moves beyond 20cm",
      ];

  const implementation = ko
    ? [
        "근접 인터랙션: HC-SR04 거리값으로 시작 조건과 재트리거 거리를 분리",
        "RGBW 흐름 착시: 시간에 따라 pulse 밝기, 색상, shimmer를 계산",
        "매트릭스 파장: 각 픽셀과 중심 간 거리를 이용해 동심원 파장을 렌더링",
        "색상 이동: 파장 offset을 프레임마다 이동해 색이 흐르는 효과 생성",
        "순차 상태 머신: 스트립 흐름, 홀드, 패널 파장, 종료 단계를 분리",
        "혼합 LED 출력: ESP32 PWM으로 4채널 RGBW 스트립을 제어하고 FastLED로 WS2815 매트릭스를 제어",
      ]
    : [
        "Proximity interaction: separates the trigger condition and re-trigger distance using the HC-SR04 reading",
        "RGBW flow illusion: computes pulse brightness, color, and shimmer over time",
        "Matrix wave: renders concentric waves using the distance from each pixel to the center",
        "Color drift: shifts the wave's color offset every frame to create a flowing color effect",
        "Sequential state machine: separates the strip-flow, hold, panel-wave, and end stages",
        "Mixed LED output: drives a 4-channel RGBW strip over ESP32 PWM while FastLED drives the WS2815 matrix",
      ];

  const setup = ko
    ? [
        "HC-SR04 초음파 거리 센서",
        "4채널 PWM RGBW LED 스트립",
        "16×16 WS2815 LED 패널",
        "ESP32 개발 보드와 외부 LED 전원",
      ]
    : [
        "HC-SR04 ultrasonic distance sensor",
        "4-channel PWM RGBW LED strip",
        "16×16 WS2815 LED panel",
        "ESP32 development board with an external LED power supply",
      ];

  const timing = [
    { stage: ko ? "스트립 흐름" : "Strip flow", duration: ko ? "약 1.4초" : "~1.4s" },
    {
      stage: ko ? "스트립 홀드 및 페이드" : "Strip hold & fade",
      duration: ko ? "약 0.5초" : "~0.5s",
    },
    { stage: ko ? "패널 파장" : "Panel wave", duration: ko ? "약 2.2초" : "~2.2s" },
    {
      stage: ko ? "종료 후 대기" : "Post-effect idle",
      duration: ko ? "약 0.5초" : "~0.5s",
    },
  ];

  const nextSteps = ko
    ? [
        "거리값에 따라 파장 속도와 스트립 밝기를 실시간으로 조절",
        "여러 센서를 배치해 관객 위치에 따라 다른 효과 실행",
        "거리 노이즈 필터와 무효 측정값 처리 개선",
        "여러 패널을 연결해 더 넓은 파장 공간 구성",
      ]
    : [
        "Adjust wave speed and strip brightness in real time based on distance",
        "Deploy multiple sensors to run different effects depending on viewer position",
        "Improve distance-noise filtering and invalid-reading handling",
        "Chain multiple panels together for a wider wave space",
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
              {t("flowWave.back")}
            </a>

            {/* Title block */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-3">
                {t("flowWave.title")}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {t("flowWave.subtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["ESP32", "HC-SR04", "RGBW LED Strip", "WS2815 Matrix", "FastLED"].map(
                  (tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ),
                )}
              </div>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                {t("flowWave.intro")}
              </p>
            </div>

            {/* Video */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("flowWave.videoHeading")}
              </h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="Flow / Wave demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Concept */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("flowWave.conceptHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("flowWave.conceptBody")}
              </p>
            </div>

            {/* Interaction sequence */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-6">
                {t("flowWave.scenarioHeading")}
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
                {t("flowWave.implementationHeading")}
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

            {/* Setup */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("flowWave.setupHeading")}
              </h2>
              <ul className="space-y-2">
                {setup.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span className="text-foreground">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Effect timing */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("flowWave.timingHeading")}
              </h2>
              <div className="border border-border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("flowWave.timingStage")}</TableHead>
                      <TableHead className="text-right">
                        {t("flowWave.timingDuration")}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {timing.map((row) => (
                      <TableRow key={row.stage}>
                        <TableCell className="font-medium whitespace-normal">
                          {row.stage}
                        </TableCell>
                        <TableCell className="text-right whitespace-normal">
                          {row.duration}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Current scope */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("flowWave.scopeHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("flowWave.scopeBody")}
              </p>
            </div>

            {/* Next steps */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("flowWave.nextStepsHeading")}
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
                  {t("flowWave.repoLink")}
                </a>
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-16">
              {t("flowWave.footerNote")}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
