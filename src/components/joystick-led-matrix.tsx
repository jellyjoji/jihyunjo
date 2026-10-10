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
  "https://github.com/jellyjoji/arduino-projects/tree/main/LED_Joystick_v1";
const YOUTUBE_VIDEO_ID = "nqIoczHSWbs";

export function JoystickLedMatrix() {
  const { t, language } = useLanguage();
  const ko = language === "ko";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scenarioSteps = ko
    ? [
        "조이스틱 중심 보정",
        "X/Y 아날로그 값 읽기",
        "중앙 데드존 적용 · 주 방향 결정",
        "16×16 패널에 방향 화살표 표시",
        "KY-027 활성 시 화살표를 흰색으로 강조",
      ]
    : [
        "Calibrate joystick center",
        "Read X/Y analog values",
        "Apply center dead zone · determine dominant direction",
        "Show direction arrow on the 16×16 panel",
        "Highlight the arrow in white when KY-027 is active",
      ];

  const implementation = ko
    ? [
        "자동 중심 보정: 시작 시 조이스틱을 중앙에 둔 상태로 100회 샘플링",
        "데드존 기반 입력 안정화: 중앙의 미세한 흔들림을 방향 입력에서 제외",
        "축 우선 방향 선택: X/Y 변화량이 더 큰 축을 기준으로 상하좌우 결정",
        "화살표 회전 렌더링: 하나의 화살표 도형을 네 방향으로 회전해 재사용",
        "LED 좌표 변환: 지그재그 배선과 패널 반전을 고려해 XY 좌표를 LED 인덱스로 매핑",
        "센서 피드백: KY-027 입력이 활성화되면 현재 방향 화살표를 흰색으로 표시",
      ]
    : [
        "Automatic center calibration: samples the joystick 100 times at startup while it rests at center",
        "Dead-zone input stabilization: filters out small jitter near the center so it isn't read as direction input",
        "Axis-priority direction selection: picks up/down/left/right based on whichever axis has the larger change",
        "Rotated arrow rendering: reuses a single arrow shape rotated into each of the four directions",
        "LED coordinate mapping: converts XY coordinates to LED index, accounting for zigzag wiring and panel inversion",
        "Sensor feedback: shows the current direction arrow in white whenever the KY-027 input is active",
      ];

  const directionColors = [
    {
      input: ko ? "위" : "Up",
      display: ko ? "파랑 화살표" : "Blue arrow",
    },
    {
      input: ko ? "아래" : "Down",
      display: ko ? "빨강 화살표" : "Red arrow",
    },
    {
      input: ko ? "왼쪽" : "Left",
      display: ko ? "초록 화살표" : "Green arrow",
    },
    {
      input: ko ? "오른쪽" : "Right",
      display: ko ? "노랑 화살표" : "Yellow arrow",
    },
    {
      input: ko ? "중앙" : "Center",
      display: ko ? "화면 지움" : "Clears the display",
    },
    {
      input: ko
        ? "KY-027 활성 + 방향 입력"
        : "KY-027 active + direction input",
      display: ko ? "흰색 화살표" : "White arrow",
    },
  ];

  const hardware = [
    {
      part: ko ? "ESP32 개발 보드" : "ESP32 development board",
      role: ko ? "메인 컨트롤러" : "Main controller",
    },
    {
      part: ko ? "16×16 WS2815 LED 패널 (256 LED)" : "16×16 WS2815 LED panel (256 LEDs)",
      role: ko ? "방향 화살표 표시" : "Displays the direction arrow",
    },
    {
      part: "KY-023",
      role: ko ? "조이스틱 X/Y 아날로그 입력" : "Joystick X/Y analog input",
    },
    {
      part: "KY-027",
      role: ko
        ? "Magic Light Cup 모듈 디지털 출력"
        : "Magic Light Cup module digital output",
    },
  ];

  const nextSteps = ko
    ? [
        "대각선 방향 화살표 및 애니메이션 추가",
        "조이스틱 버튼으로 색상 팔레트나 표시 모드 전환",
        "KY-027 입력 변화에 따라 화살표 점멸·밝기 효과 추가",
        "밝기와 데드존을 런타임에서 조절하는 설정 모드 추가",
      ]
    : [
        "Add diagonal direction arrows and animations",
        "Switch color palettes or display modes with the joystick button",
        "Add blink/brightness effects driven by changes in the KY-027 input",
        "Add a runtime settings mode to adjust brightness and dead zone",
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
              {t("joystickLedMatrix.back")}
            </a>

            {/* Title block */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-3">
                {t("joystickLedMatrix.title")}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {t("joystickLedMatrix.subtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["ESP32", "KY-023 Joystick", "KY-027 Sensor", "WS2815", "FastLED"].map(
                  (tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ),
                )}
              </div>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                {t("joystickLedMatrix.intro")}
              </p>
            </div>

            {/* Video */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("joystickLedMatrix.videoHeading")}
              </h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="Joystick LED Matrix demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Concept */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("joystickLedMatrix.conceptHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("joystickLedMatrix.conceptBody")}
              </p>
            </div>

            {/* Interaction flow */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-6">
                {t("joystickLedMatrix.scenarioHeading")}
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
                {t("joystickLedMatrix.implementationHeading")}
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

            {/* Direction colors */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("joystickLedMatrix.colorHeading")}
              </h2>
              <div className="border border-border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("joystickLedMatrix.colorInput")}</TableHead>
                      <TableHead>{t("joystickLedMatrix.colorDisplay")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {directionColors.map((row) => (
                      <TableRow key={row.input}>
                        <TableCell className="font-medium whitespace-normal">
                          {row.input}
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          {row.display}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Hardware */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("joystickLedMatrix.hardwareHeading")}
              </h2>
              <div className="border border-border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("joystickLedMatrix.hardwarePart")}</TableHead>
                      <TableHead>{t("joystickLedMatrix.hardwareRole")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {hardware.map((row) => (
                      <TableRow key={row.part}>
                        <TableCell className="font-medium whitespace-normal">
                          {row.part}
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          {row.role}
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
                {t("joystickLedMatrix.scopeHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("joystickLedMatrix.scopeBody")}
              </p>
            </div>

            {/* Next steps */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("joystickLedMatrix.nextStepsHeading")}
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
                  {t("joystickLedMatrix.repoLink")}
                </a>
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-16">
              {t("joystickLedMatrix.footerNote")}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
