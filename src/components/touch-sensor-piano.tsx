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
  "https://github.com/jellyjoji/arduino-projects/tree/main/sensor_piano_v2";
const YOUTUBE_VIDEO_ID = "MSR-9B4umzM";

export function TouchSensorPiano() {
  const { t, language } = useLanguage();
  const ko = language === "ko";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scenarioSteps = ko
    ? [
        "터치 패드에 손을 댐",
        "ESP32가 터치값 변화 감지",
        "해당 음을 부저로 연주",
        "음에 대응하는 LED 색상 표시",
        "손을 떼면 대기 상태로 복귀",
      ]
    : [
        "Touch a pad with your hand",
        "ESP32 detects the change in touch value",
        "Plays the corresponding note through the buzzer",
        "Shows the LED color mapped to that note",
        "Returns to standby once you lift your hand",
      ];

  const noteColors = [
    { pad: "C", note: "C4 · 262 Hz", led: ko ? "빨강" : "Red" },
    { pad: "D", note: "D4 · 294 Hz", led: ko ? "초록" : "Green" },
    { pad: "E", note: "E4 · 330 Hz", led: ko ? "파랑" : "Blue" },
    { pad: "G", note: "G4 · 392 Hz", led: ko ? "노랑" : "Yellow" },
  ];

  const implementation = ko
    ? [
        "터치 기준 자동 보정: 부팅 시 각 패드의 기준값을 샘플링해 환경에 맞는 시작점을 설정",
        "상대 임계값 판정: 기준값의 70% 미만으로 떨어지면 터치로 감지",
        "터치 시작 이벤트: 새로 눌리는 순간을 구분해 해당 음과 색상 피드백 실행",
        "RGB 상태 표현: 음마다 색을 연결하고 무입력 상태도 별도 색으로 표시",
        "하드웨어 테스트 멜로디: 물리 버튼으로 음계 순서와 출력 장치 점검",
      ]
    : [
        "Automatic touch calibration: samples each pad's baseline at boot to set a starting point suited to the environment",
        "Relative threshold detection: registers a touch once the reading drops below 70% of the baseline",
        "Touch-start events: distinguishes the moment a pad is newly pressed to trigger that note's sound and color",
        "RGB state representation: maps a color to each note, with a separate color for the idle state",
        "Hardware test melody: a physical button checks the note sequence and output devices",
      ];

  const nextSteps = ko
    ? [
        "옥타브를 늘려 더 많은 음계와 터치 패드 추가",
        "여러 패드를 동시에 눌러 화음 재생",
        "음의 길이와 강약을 제어하는 연주 모드",
        "터치 패턴에 따라 색상 변화와 시각 효과 추가",
        "delay() 기반 처리를 비차단 방식으로 바꾸어 연주 중 입력 반응 개선",
      ]
    : [
        "Add more octaves and touch pads for a wider note range",
        "Play chords by pressing multiple pads at once",
        "A playing mode that controls note length and velocity",
        "Add color changes and visual effects based on touch patterns",
        "Replace delay()-based handling with non-blocking logic to improve input responsiveness while playing",
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
              {t("touchSensorPiano.back")}
            </a>

            {/* Title block */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-3">
                {t("touchSensorPiano.title")}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {t("touchSensorPiano.subtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["ESP32", "Capacitive Touch", "Passive Buzzer", "RGB LED"].map(
                  (tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ),
                )}
              </div>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                {t("touchSensorPiano.intro")}
              </p>
            </div>

            {/* Video */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("touchSensorPiano.videoHeading")}
              </h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="Touch Sensor Piano demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Concept */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("touchSensorPiano.conceptHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("touchSensorPiano.conceptBody")}
              </p>
            </div>

            {/* Interaction flow */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-6">
                {t("touchSensorPiano.scenarioHeading")}
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

            {/* Notes and colors */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("touchSensorPiano.noteColorHeading")}
              </h2>
              <div className="border border-border rounded-lg overflow-hidden mb-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("touchSensorPiano.noteColorPad")}</TableHead>
                      <TableHead>{t("touchSensorPiano.noteColorNoteCol")}</TableHead>
                      <TableHead>{t("touchSensorPiano.noteColorLed")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {noteColors.map((row) => (
                      <TableRow key={row.pad}>
                        <TableCell className="font-medium whitespace-normal">
                          {row.pad}
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          {row.note}
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          {row.led}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("touchSensorPiano.noteColorNote")}
              </p>
            </div>

            {/* Implementation */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("touchSensorPiano.implementationHeading")}
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
                {t("touchSensorPiano.hardwareHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("touchSensorPiano.hardwareBody")}
              </p>
            </div>

            {/* Current scope */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("touchSensorPiano.scopeHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("touchSensorPiano.scopeBody")}
              </p>
            </div>

            {/* Next steps */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("touchSensorPiano.nextStepsHeading")}
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
                  {t("touchSensorPiano.repoLink")}
                </a>
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-16">
              {t("touchSensorPiano.footerNote")}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
