import React, { useEffect } from "react";
import { ArrowLeft, ArrowDown, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSelector } from "./language-selector";
import { useLanguage } from "../contexts/language-context";

const REPO_FOLDER_URL =
  "https://github.com/jellyjoji/arduino-projects/tree/main/Locker_v1";
const YOUTUBE_VIDEO_ID = "JJAjeC_oZ9g";

export function SmartSafe() {
  const { t, language } = useLanguage();
  const ko = language === "ko";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const implementation = ko
    ? [
        "아날로그 입력 해석: 조이스틱 Y축 값으로 숫자를 증가·감소",
        "4자리 입력 상태 관리: 조이스틱 스위치를 눌러 현재 숫자를 순서대로 저장",
        "비밀번호 비교: 입력 배열을 정답 배열과 비교",
        "서보 액추에이션: 성공 결과에 따라 MG996R을 열림/잠금 각도로 이동",
        "오답 피드백: 부저를 세 번 울리고 입력값을 초기화",
        "상태 표시: KY-016 모듈의 초록·파랑 채널로 대기와 성공을 표현",
        "도어 상태 입력: 도어 스위치가 닫힘 상태일 때 시리얼 로그 출력",
      ]
    : [
        "Analog input interpretation: increments/decrements the digit using the joystick's Y-axis value",
        "4-digit entry state management: presses the joystick switch to store the current digit in sequence",
        "Passcode comparison: compares the entered array against the correct array",
        "Servo actuation: moves the MG996R to the open/locked angle based on the result",
        "Wrong-passcode feedback: sounds the buzzer three times and resets the entry",
        "State display: uses the KY-016 module's green/blue channels to show standby and success",
        "Door state input: prints a serial log whenever the door switch is in the closed state",
      ];

  const nextSteps = ko
    ? [
        "비밀번호 변경과 사용자 설정 기능 추가",
        "오답 횟수 제한 및 재시도 대기 시간 구현",
        "도어 열림/닫힘 전환 이벤트와 알림 추가",
        "비차단 입력 처리로 조이스틱과 스위치 반응성 개선",
        "외함과 잠금 기구에 맞춰 서보 각도 및 구동부 보강",
      ]
    : [
        "Add passcode-change and user-setting features",
        "Implement an attempt limit and a retry cooldown",
        "Add door open/close transition events and notifications",
        "Improve joystick and switch responsiveness with non-blocking input handling",
        "Reinforce the servo angle and drive mechanism to match the enclosure and lock hardware",
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
              {t("smartSafe.back")}
            </a>

            {/* Title block */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-3">
                {t("smartSafe.title")}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {t("smartSafe.subtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["ESP32", "Joystick", "MG996R Servo", "Door Switch", "Buzzer"].map(
                  (tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ),
                )}
              </div>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                {t("smartSafe.intro")}
              </p>
            </div>

            {/* Video */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("smartSafe.videoHeading")}
              </h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="Smart Safe demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Concept */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("smartSafe.conceptHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("smartSafe.conceptBody")}
              </p>
            </div>

            {/* Interaction flow */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-6">
                {t("smartSafe.scenarioHeading")}
              </h2>
              <div className="flex flex-col items-center gap-2 bg-muted/30 border border-border rounded-lg py-8 px-4">
                <div className="px-4 py-2 rounded-md bg-background border border-border text-sm sm:text-base text-center">
                  {ko ? "조이스틱으로 숫자 선택" : "Select a digit with the joystick"}
                </div>
                <ArrowDown className="w-4 h-4 text-muted-foreground" />
                <div className="px-4 py-2 rounded-md bg-background border border-border text-sm sm:text-base text-center">
                  {ko
                    ? "조이스틱 버튼으로 숫자 저장 × 4"
                    : "Store the digit with the joystick button × 4"}
                </div>
                <ArrowDown className="w-4 h-4 text-muted-foreground" />
                <div className="px-4 py-2 rounded-md bg-background border border-border text-sm sm:text-base text-center">
                  {ko ? "확인 버튼 누르기" : "Press the confirm button"}
                </div>
                <ArrowDown className="w-4 h-4 text-muted-foreground" />
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div className="px-4 py-2 rounded-md bg-background border border-border text-sm sm:text-base text-center w-full">
                      {t("smartSafe.scenarioMatch")}
                    </div>
                    <ArrowDown className="w-4 h-4 text-muted-foreground" />
                    <div className="px-4 py-2 rounded-md bg-background border border-border text-sm sm:text-base text-center w-full">
                      {ko ? "서보 잠금 해제" : "Servo unlocks"}
                    </div>
                    <ArrowDown className="w-4 h-4 text-muted-foreground" />
                    <div className="px-4 py-2 rounded-md bg-background border border-border text-sm sm:text-base text-center w-full">
                      {ko ? "잠시 후 자동 잠금" : "Automatically re-locks shortly after"}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div className="px-4 py-2 rounded-md bg-background border border-border text-sm sm:text-base text-center w-full">
                      {t("smartSafe.scenarioMismatch")}
                    </div>
                    <ArrowDown className="w-4 h-4 text-muted-foreground" />
                    <div className="px-4 py-2 rounded-md bg-background border border-border text-sm sm:text-base text-center w-full">
                      {ko ? "부저 경고음" : "Buzzer sounds an alert"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("smartSafe.implementationHeading")}
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
                {t("smartSafe.hardwareHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("smartSafe.hardwareBody")}
              </p>
            </div>

            {/* Current scope */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("smartSafe.scopeHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("smartSafe.scopeBody")}
              </p>
            </div>

            {/* Next steps */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("smartSafe.nextStepsHeading")}
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
                  {t("smartSafe.repoLink")}
                </a>
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-16">
              {t("smartSafe.footerNote")}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
