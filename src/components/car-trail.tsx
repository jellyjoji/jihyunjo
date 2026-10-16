import React, { useEffect } from "react";
import { ArrowLeft, ArrowDown } from "lucide-react";
import { Badge } from "./ui/badge";
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

const YOUTUBE_VIDEO_ID = "upB4rKmVJ3o";

export function CarTrail() {
  const { t, language } = useLanguage();
  const ko = language === "ko";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pipelineSteps = ko
    ? [
        "collide.py와 같은 체인으로 깊이 마스크 생성",
        "프로젝션 영역 안쪽으로만 잘라냄",
        "마스크에서 블롭 검출",
        "크기 필터 — 너무 작으면 노이즈, 너무 크면 손이나 사람",
        "각 블롭의 중심을 homography로 바닥 평면에 매핑",
        "트래커가 검출값을 예측 위치에 매칭",
        "트레일과 파티클을 그리고, 자동차 위치는 다시 검게 지움",
      ]
    : [
        "Depth mask, same chain as collide.py",
        "Clipped to inside the projection area only",
        "Blob detection on the mask",
        "Size filter — too small is noise, too big is a hand or person",
        "Each blob's centre mapped through the floor homography",
        "Tracker matches detections to predicted positions",
        "Trails and particles drawn, then the car's own spot is blacked out",
      ];

  const implementation = ko
    ? [
        "프로젝션 영역: registration을 통해 카메라 공간으로 옮겨진 프로젝터 프레임의 모서리를 주황색으로 표시. 그 바깥은 모두 무시하는데, 오탐지의 주된 원인이었고 어차피 그릴 수도 없는 영역이다.",
        "트래커: 각 자동차의 다음 위치는 속도로부터 예측되고, 검출값은 프로젝터 기준 220px 이내의 가장 가까운 예측에 매칭된다. 교차하는 동안에도 ID와 색상이 유지된다. 새 블롭은 3프레임 연속 보여야 그려지기 시작하고, 0.5초 동안 보이지 않으면 종료되며 트레일은 서서히 사라진다.",
        "그리기: 리본과 파티클은 절반 크기 레이어에 그려진 뒤 한 번 블러 처리해 글로우를 만들고 다시 합성한다 — 헤드리스 테스트에서 프레임당 약 7ms. 스파크는 죽어가면서 흰색 → 노란색 → 주황색 → 빨간색으로 변한다. 파티클은 최대 2500개로 제한된다.",
        "홀: 검출된 모든 블롭을 9px만큼 키워 프로젝터 공간에서 검게 지우므로, 자동차 자체와 손을 뻗은 사람 모두 빛을 받지 않는다.",
      ]
    : [
        "Projection area: the projector frame's corners, carried back into the camera through the registration, are outlined in orange. Everything outside is ignored — it was the main source of false detections, and nothing can be drawn there anyway.",
        "Tracker: each car's next position is predicted from its velocity; detections are matched to the nearest prediction within 220 projector px, keeping ID and color through a crossing. A new blob must be seen 3 frames running before it draws; a car unseen for 0.5s ends and its trail fades.",
        "Drawing: the ribbon and particles are rendered onto a half-size layer, blurred once for the glow, and added back — about 7ms a frame in the headless test. Sparks run white → yellow → orange → red as they die. Particles are capped at 2500.",
        "Hole: every detected blob, grown by 9px, is blacked out in projector space, so neither the car nor a person reaching in gets lit.",
      ];

  const runSteps = ko
    ? [
        "프로젝션이 가려지지 않게 시작 후 3초간 비워 둘 것. 빈 바닥은 처음 실행 시 자동으로 학습되어 저장되고, 이후 실행에서는 그 값을 불러온다. 바닥 위 물체를 옮긴 뒤에는 'b'로 다시 학습한다.",
        "자동차를 내려놓고 운전한다. 카메라 창에는 'car #1'처럼 윤곽이 표시되고, 카메라 공간에 그려지는 경로는 실제 자동차가 지나간 자리와 겹쳐야 한다.",
      ]
    : [
        "Keep the projection clear for the first 3 seconds after starting. The empty floor is learned and saved automatically on the first run; later runs load it. Press 'b' to relearn it after moving anything on the floor.",
        "Put the car down and drive. The camera window outlines it as 'car #1'; its path drawn back in camera space should sit on where the car really went.",
      ];

  const controls = [
    { key: "1  2  3  0", action: ko ? "효과 전환: 빛 / 불꽃 / 파티클 / 전체(기본값)" : "Effect: light / fire / particles / all (default)" },
    { key: "h", action: ko ? "자동차 홀 on / off" : "Car hole on / off" },
    { key: "c", action: ko ? "트레일 지우기" : "Clear the trails" },
    { key: "d", action: ko ? "프로젝터 디버그 표시: 추적 중인 자동차, ID, 속도, 방향" : "Debug on the projector: tracked cars, IDs, speed, heading" },
    { key: "b", action: ko ? "바닥 다시 학습" : "Learn the floor again" },
    { key: "q  /  Esc", action: ko ? "종료" : "Quit" },
  ];

  const settings = [
    {
      slider: "height mm",
      def: "40",
      note: ko
        ? "바닥 위 몇 mm부터 자동차로 인식할지. 낮추면 더 낮은 차도 잡지만, 약 30mm 아래로는 바닥 자체의 깊이 노이즈가 드러난다."
        : "How far above the floor counts. Lower catches a lower car; below ~30 the floor's noise shows.",
    },
    {
      slider: "min size x10px",
      def: "300 px",
      note: ko
        ? "자동차로 인정할 최소 블롭 크기. 노이즈 조각이 ID를 받으면 올린다."
        : "Smallest blob that is a car. Raise if specks of noise get IDs.",
    },
    {
      slider: "max size x100px",
      def: "8000 px",
      note: ko
        ? "자동차로 인정할 최대 블롭 크기. 사람이나 손은 이보다 커서 무시되는데, 손을 뻗었을 때 트레일이 생긴다면 이 값을 낮춘다."
        : "Biggest blob that is a car. A person or a hand is bigger and is ignored — lower this if a hand reaching in gets a trail.",
    },
    {
      slider: "smooth frames",
      def: "2",
      note: ko
        ? "마스크 평균화 프레임 수. 빠른 차는 1–2가 적당하며, 늘릴수록 트레일이 차보다 뒤처진다."
        : "Mask averaging. A fast car wants 1–2; more makes the trail lag behind the car.",
    },
    {
      slider: "trail sec",
      def: "4",
      note: ko ? "트레일이 바닥에 남아 있는 시간." : "How long the trail stays on the floor.",
    },
  ];

  const files = [
    { file: "rooms/car_trail.py", what: ko ? "룸 본체: 검출, 트래커, 트레일, 파티클, 설정 패널" : "The room: detection, tracker, trails, particles, settings panel." },
    { file: "tools/check_car_trail.py", what: ko ? "테스트. 카메라, 프로젝터, sudo 불필요" : "Tests. No camera, no projector, no sudo." },
    { file: "data/car_trail/<name>_background.npz", what: ko ? "첫 실행 시 학습한 빈 바닥" : "The empty floor, learned on the first run." },
    { file: "data/car_trail/<name>_settings.json", what: ko ? "슬라이더 값, 자동 저장됨" : "The sliders, saved automatically." },
  ];

  const limits = ko
    ? [
        "자동차의 중심은 바닥 평면을 통해 매핑된다. 실제 자동차의 윗부분은 바닥보다 몇 cm 위에 있으므로, 카메라 시점에서는 점이 자동차보다 살짝 뒤에 찍힌다 — 프로젝터 축 근처의 소형 자동차라면 1~2cm 정도.",
        "서로 닿은 두 자동차는 떨어지기 전까지 하나의 블롭으로 인식되며, 떨어지는 순서가 다르면 ID가 서로 바뀔 수 있다.",
        "자동차 크기와 비슷한 것은 모두 인식된다. 최소/최대 크기 사이의 신발이나 떨어진 상자도 트레일을 얻는다 — 고정된 물체가 놓인 상태에서 'b'로 바닥을 다시 학습해 두면 된다.",
      ]
    : [
        "The car's centre is mapped through the floor plane. A car's top is a few cm above it, so the point lands slightly behind the car as seen from the camera — a centimetre or two for a toy car near the projector axis.",
        "Two cars touching are one blob until they separate; the IDs may swap if they part in a different order.",
        "Anything car-sized counts. A shoe or a dropped box between min and max size gets a trail. Learn the floor ('b') with static things in place.",
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
              href="#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("carTrail.back")}
            </a>

            {/* Title block */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-3">
                {t("carTrail.title")}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {t("carTrail.subtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {[
                  "Python",
                  "OpenCV",
                  "Depth Camera",
                  "Real-time Tracking",
                  "Projection Mapping",
                  "Particle Systems",
                ].map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                {t("carTrail.intro")}
              </p>
            </div>

            {/* Video */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("carTrail.videoHeading")}
              </h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                  title="Car Tracking Motion Trail demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Concept */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("carTrail.conceptHeading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("carTrail.conceptBody")}
              </p>
            </div>

            {/* Per-frame pipeline */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-6">
                {t("carTrail.pipelineHeading")}
              </h2>
              <div className="flex flex-col items-center gap-2 bg-muted/30 border border-border rounded-lg py-8 px-4">
                {pipelineSteps.map((step, i) => (
                  <React.Fragment key={step}>
                    <div className="px-4 py-2 rounded-md bg-background border border-border text-sm sm:text-base text-center">
                      {step}
                    </div>
                    {i < pipelineSteps.length - 1 && (
                      <ArrowDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Implementation */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("carTrail.implementationHeading")}
              </h2>
              <ul className="space-y-3">
                {implementation.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span className="text-foreground">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Running it */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("carTrail.runHeading")}
              </h2>
              <pre className="bg-muted/30 border border-border rounded-lg p-4 text-sm overflow-x-auto mb-4">
                <code>
                  sudo .venv/bin/python -B rooms/car_trail.py --registration
                  floor --display-x 1512
                </code>
              </pre>
              <ul className="space-y-2">
                {runSteps.map((item, i) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span className="text-foreground">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Controls */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("carTrail.controlsHeading")}
              </h2>
              <div className="border border-border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("carTrail.controlsKey")}</TableHead>
                      <TableHead>{t("carTrail.controlsAction")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {controls.map((row) => (
                      <TableRow key={row.key}>
                        <TableCell className="font-mono whitespace-nowrap">
                          {row.key}
                        </TableCell>
                        <TableCell className="whitespace-normal text-muted-foreground">
                          {row.action}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Settings panel */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("carTrail.settingsHeading")}
              </h2>
              <div className="border border-border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("carTrail.settingsSlider")}</TableHead>
                      <TableHead>{t("carTrail.settingsDefault")}</TableHead>
                      <TableHead>{t("carTrail.settingsNote")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {settings.map((row) => (
                      <TableRow key={row.slider}>
                        <TableCell className="font-mono whitespace-nowrap">
                          {row.slider}
                        </TableCell>
                        <TableCell className="whitespace-nowrap">
                          {row.def}
                        </TableCell>
                        <TableCell className="whitespace-normal text-muted-foreground">
                          {row.note}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Files */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("carTrail.filesHeading")}
              </h2>
              <div className="border border-border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("carTrail.filesFile")}</TableHead>
                      <TableHead>{t("carTrail.filesWhat")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {files.map((row) => (
                      <TableRow key={row.file}>
                        <TableCell className="font-mono whitespace-normal">
                          {row.file}
                        </TableCell>
                        <TableCell className="whitespace-normal text-muted-foreground">
                          {row.what}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Limits */}
            <div className="mb-16">
              <h2 className="text-xl font-medium mb-4">
                {t("carTrail.limitsHeading")}
              </h2>
              <ul className="space-y-3">
                {limits.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span className="text-foreground">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-16">
              {t("carTrail.footerNote")}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
