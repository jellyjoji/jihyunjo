import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

export type Language = "en" | "ko";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Translation object
const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.linkedin": "LinkedIn",
    "nav.contact": "Contact",

    // Hero Section
    "hero.name": "Jihyun Jo",
    "hero.greeting": "Hello, I'm",
    "hero.title": "IoT Developer",
    "hero.description":
      "Building connected hardware experiences with a user-centered approach shaped by my UX/UI design background.",
    "hero.contact": "Get In Touch",
    "hero.resume": "Download Resume",

    // About Section
    "about.title": "About Me",
    "about.subtitle":
      "I'm an IoT Developer building connected hardware experiences with a user-centered approach shaped by my UX/UI design background.",
    "about.description1":
      "I love turning ideas into interactive experiences that feel intuitive and responsive, connecting sensors, hardware, and software into systems people can actually touch and feel. Here, you'll find a selection of my work blending physical interaction, usability, and engineering.",
    "about.description3":
      "I enjoy crafting experiences where hardware and software work together seamlessly, always starting from the user and transforming concepts into functional, real-world interactions.",
    "about.cleanCode": "Clean Code",
    "about.cleanCodeDesc":
      "Writing maintainable, scalable code that follows best practices and industry standards.",
    "about.designFocus": "Design Focus",
    "about.designFocusDesc":
      "Creating intuitive user experiences with attention to detail and accessibility.",
    "about.performance": "Performance",
    "about.performanceDesc":
      "Building fast, optimized applications that deliver exceptional user experiences.",

    // Skills Section
    "skills.title": "Skills & Technologies",
    "skills.subtitle":
      "Here are the technologies and tools I work with to bring ideas to life",
    "skills.iot": "IoT & Hardware",
    "skills.software": "Software & Web",
    "skills.tools": "Tools & Design",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle":
      "A showcase of my recent work, featuring full-stack applications and innovative solutions",
    "projects.liveDemo": "Live Demo",
    "projects.code": "Code",

    "projects.paysm": "Payment Platform",
    "projects.paysmDesc":
      "A full-featured payment platform built with Next.js, featuring secure payment processing, user authentication, and a custom-designed interface.",

    "projects.paysmApp": "Payment App",
    "projects.paysmAppDesc":
      "A comprehensive online payment app built with Next.js, focusing on seamless user authentication, secure transactions, and an intuitive user experience.",

    "projects.dashboard": "Statistical Data Dashboard",
    "projects.dashboardDesc":
      "A statistical data dashboard providing table statistics generated from modules in a pipeline built using APIs.",

    "projects.platform": "Local Community Sharing Platform",
    "projects.platformDesc":
      "WanduGo is a location-based community platform that builds a circular sharing ecosystem within neighborhoods. Users safely give, receive, and exchange second-hand items through verified profiles and nearby meetups, fostering continuous sharing, trust, and community growth.",

    "projects.homework": "Homework Management System",
    "projects.homeworkDesc":
      "A user-friendly platform designed for children to organize and track their homework, built with Next.js. Features include task scheduling, progress tracking, reminders, and an engaging, easy-to-use interface to make learning fun and interactive.",

    "projects.healthcare": "Smart Health Management System",
    "projects.healthcareDesc":
      "A comprehensive health management platform that integrates with smart healthcare devices, helping users track their vital signs, monitor daily habits, and maintain a healthy lifestyle through personalized insights and recommendations.",
    "projects.skinmonitor":
      "AI-Based Artificial Skin Abnormal Reaction Monitoring System",
    "projects.skinmonitorDesc":
      "Efficiently and accurately detect abnormal reactions in artificial skin experiments and provide instant alerts.",

    "projects.arduino": "Arduino Projects Collection",
    "projects.arduinoDesc":
      "6 hardware projects built with Arduino, each exploring a different combination of sensors, actuators, and real-time control.",

    "projects.carTrail": "Car Tracking Motion Trail",
    "projects.carTrailDesc":
      "A depth camera tracks a toy/RC car driven over a floor projection, and the projector draws its path in real time: a glowing ribbon, sparks, and drifting colored particles. Multiple cars each get their own ID and color, while the car itself stays dark.",

    // Car Trail Detail Page
    "carTrail.back": "Back to Projects",
    "carTrail.title": "Car Tracking Motion Trail",
    "carTrail.subtitle":
      "A toy car leaves light, fire, and particles behind it",
    "carTrail.intro":
      "A toy or RC car driven over a floor projection is tracked by a depth camera, and the projector draws its path back onto the floor: a glowing ribbon, sparks off the back, and colored particles drifting away. Several cars can be tracked at once, each with its own ID and color, while the car itself is kept dark so only the light trail shows.",
    "carTrail.videoHeading": "Project Video",
    "carTrail.conceptHeading": "Concept",
    "carTrail.conceptBody":
      "Car trail turns a toy car into a paintbrush of light. As it moves across the floor, the projector lays a trail of effects behind it — a glowing ribbon, fire-like sparks that cool from white to red, and particles that drift off the path — while keeping the car itself unlit so attention stays on the trail. It reuses this installation's own floor registration (homography), the depth-mask chain from the collision room, and the slider-panel code from the static-mask room rather than building new versions of each.",
    "carTrail.pipelineHeading": "How It Works — Per Frame",
    "carTrail.implementationHeading": "Implementation Details",
    "carTrail.runHeading": "Running It",
    "carTrail.controlsHeading": "Controls",
    "carTrail.controlsKey": "Key",
    "carTrail.controlsAction": "Action",
    "carTrail.settingsHeading": "Settings Panel",
    "carTrail.settingsSlider": "Slider",
    "carTrail.settingsDefault": "Default",
    "carTrail.settingsNote": "Note",
    "carTrail.filesHeading": "Files",
    "carTrail.filesFile": "File",
    "carTrail.filesWhat": "What",
    "carTrail.limitsHeading": "Limits",
    "carTrail.footerNote":
      "Sizing a car: on the floor setup (camera ~1.3m up) a 20 × 10cm car is roughly 3000–4000 camera pixels. The camera window prints each car's size next to it.",

    // Arduino Projects Detail Page
    "arduino.back": "Back to Projects",
    "arduino.pageTitle": "Arduino Projects Collection",
    "arduino.pageSubtitle":
      "6 hardware projects built with Arduino, each exploring a different combination of sensors, actuators, and real-time control.",
    "arduino.viewRepo": "View Full Repository",
    "arduino.viewCode": "View Code",
    "arduino.viewDetails": "View Details",
    "arduino.ledFighter": "FLOW / WAVE",
    "arduino.ledFighterDesc":
      "Detects an approaching hand and runs a light sequence that flows along an LED strip into a wave across a matrix panel.",
    "arduino.ledJoystick": "JOYSTICK LED MATRIX",
    "arduino.ledJoystickDesc":
      "A joystick-based controller that drives an LED display from analog input.",
    "arduino.locker": "Smart Safe",
    "arduino.lockerDesc":
      "A digital door lock that uses a keypad/sensor input to control a servo-based locking mechanism.",
    "arduino.smartGreenhouse": "Smart Greenhouse",
    "arduino.smartGreenhouseDesc":
      "An ESP32 greenhouse monitoring prototype that reads temperature and humidity and is meant to drive a relay-controlled device.",
    "arduino.irTripwire": "IR INVISIBLE TRIPWIRE",
    "arduino.irTripwireDesc":
      "A contactless sensor prototype that detects the moment an invisible infrared beam is broken and alerts with light and sound.",
    "arduino.touchSensorPiano": "Touch Sensor Piano",
    "arduino.touchSensorPianoDesc":
      "An interactive piano prototype where four capacitive touch pads tie each note to sound and color.",

    // Joystick LED Matrix Detail Page
    "joystickLedMatrix.back": "Back to Arduino Projects",
    "joystickLedMatrix.title": "JOYSTICK LED MATRIX",
    "joystickLedMatrix.subtitle":
      "Joystick direction, rendered as a 16×16 arrow of light",
    "joystickLedMatrix.intro":
      "An interaction project that reads analog joystick input as a direction and visualizes it in real time on a 256-LED panel.",
    "joystickLedMatrix.videoHeading": "Project Video",
    "joystickLedMatrix.conceptHeading": "Overview",
    "joystickLedMatrix.conceptBody":
      "The X/Y analog values from a KY-023 joystick are read and converted into an up/down/left/right direction. The selected direction appears as an arrow on a 16×16 WS2815 LED panel. While the KY-027 module signal is active, the arrow color switches to white to highlight the input state.",
    "joystickLedMatrix.scenarioHeading": "Interaction Flow",
    "joystickLedMatrix.implementationHeading": "What I Implemented",
    "joystickLedMatrix.colorHeading": "Direction Colors",
    "joystickLedMatrix.colorInput": "Input",
    "joystickLedMatrix.colorDisplay": "Display",
    "joystickLedMatrix.hardwareHeading": "Hardware",
    "joystickLedMatrix.hardwarePart": "Component",
    "joystickLedMatrix.hardwareRole": "Role",
    "joystickLedMatrix.scopeHeading": "Current Implementation Scope",
    "joystickLedMatrix.scopeBody":
      "KY-027 is used only as a digital input, highlighting the current direction arrow in white while active. The joystick switch currently just prints its pressed state to the serial monitor. Diagonal arrows and separate button-driven modes are not implemented yet.",
    "joystickLedMatrix.nextStepsHeading": "Next Expansion Ideas",
    "joystickLedMatrix.repoLink":
      "GitHub README — wiring, upload, configuration, and troubleshooting",
    "joystickLedMatrix.footerNote":
      "ESP32 · FastLED · WS2815 16×16 · 4-direction input visualization",

    // Smart Safe Detail Page
    "smartSafe.back": "Back to Arduino Projects",
    "smartSafe.title": "SMART SAFE",
    "smartSafe.subtitle":
      "An ESP32 servo-lock prototype that enters a passcode with a joystick",
    "smartSafe.intro":
      "Select digits and confirm, and the servo lock responds to the passcode result.",
    "smartSafe.videoHeading": "Project Video",
    "smartSafe.conceptHeading": "Overview",
    "smartSafe.conceptBody":
      "Move the joystick up and down to select a digit, then press the joystick button to store each of the four digits in sequence. Pressing the confirm button has the ESP32 compare the entry against the passcode stored in the code. On success, the MG996R servo opens the lock for a set duration; on failure, the buzzer sounds an alert.",
    "smartSafe.scenarioHeading": "Interaction Flow",
    "smartSafe.scenarioMatch": "Passcode matches",
    "smartSafe.scenarioMismatch": "Passcode doesn't match",
    "smartSafe.implementationHeading": "What I Implemented",
    "smartSafe.hardwareHeading": "Hardware",
    "smartSafe.hardwareBody":
      "Built from an ESP32, a KY-023 joystick, a confirm button, a door switch, a buzzer, a KY-016 LED module, and an MG996R servo. The servo runs on a separate 5–6V supply sharing a common ground with the ESP32.",
    "smartSafe.scopeHeading": "Current Prototype Scope",
    "smartSafe.scopeBody":
      "This is a hardware prototype built to verify input, comparison, and servo actuation. The passcode is stored in the code, and there's no attempt-limit or tamper-resistance security feature, so this isn't a security system meant for protecting real valuables.",
    "smartSafe.nextStepsHeading": "Next Expansion Ideas",
    "smartSafe.repoLink":
      "GitHub README — parts, wiring, input method, and security limitations",
    "smartSafe.footerNote":
      "ESP32 · 4-digit input · servo lock-state control prototype",

    // Flow / Wave Detail Page
    "flowWave.back": "Back to Arduino Projects",
    "flowWave.title": "FLOW / WAVE",
    "flowWave.subtitle":
      "An interaction that turns hand movement into flowing light and waves",
    "flowWave.intro":
      "Detects an approaching hand and runs a light sequence that flows along a strip into a wave across a matrix panel.",
    "flowWave.videoHeading": "Project Video",
    "flowWave.conceptHeading": "Concept",
    "flowWave.conceptBody":
      "Light responds as a viewer's hand approaches the sensor. Brightness pulses several times along the RGBW strip, creating the illusion of flowing forward, then after the strip fades out, a colored wave radiates from the center of a 16×16 LED panel.",
    "flowWave.scenarioHeading": "Interaction Sequence",
    "flowWave.implementationHeading": "What I Implemented",
    "flowWave.setupHeading": "Setup",
    "flowWave.timingHeading": "Effect Timing",
    "flowWave.timingStage": "Stage",
    "flowWave.timingDuration": "Duration",
    "flowWave.scopeHeading": "Current Prototype Scope",
    "flowWave.scopeBody":
      "The effect runs on the distance thresholds and timing fixed in the code. The HC-SR04 must read a valid distance beyond 20cm before it can detect the next approach, and it doesn't automatically treat a dropped echo as the hand leaving.",
    "flowWave.nextStepsHeading": "Next Expansion Ideas",
    "flowWave.repoLink":
      "GitHub README — wiring, power, configuration, and state handling",
    "flowWave.footerNote":
      "ESP32 · a proximity-reactive RGBW flow and LED matrix wave prototype",

    // Smart Greenhouse Detail Page
    "smartGreenhouse.back": "Back to Arduino Projects",
    "smartGreenhouse.title": "SMART GREENHOUSE",
    "smartGreenhouse.subtitle":
      "An ESP32 greenhouse monitoring prototype that reads temperature and humidity",
    "smartGreenhouse.intro":
      "A hardware prototype for a system that reads environmental data and uses it to control greenhouse devices.",
    "smartGreenhouse.videoHeading": "Project Video",
    "smartGreenhouse.conceptHeading": "Overview",
    "smartGreenhouse.conceptBody":
      "A greenhouse monitoring project that measures temperature and humidity with a DHT11 sensor and checks the readings on the ESP32. The goal is a structure that compares the readings against reference values and uses a relay to control a ventilation fan or other device.",
    "smartGreenhouse.flowHeading": "System Flow",
    "smartGreenhouse.hardwareHeading": "Hardware",
    "smartGreenhouse.statusHeading": "Current Implementation Status",
    "smartGreenhouse.statusBody":
      "The provided sketch includes sensor initialization, measurements every 2 seconds, serial output, sensor-error checking, and setting the relay to an initial LOW. The TEMP_LIMIT (27.5°C) and HUM_LIMIT (70%) values are declared but not yet wired into any control condition. The relay-control section also has non-code text mixed in, so it won't compile as handed off.",
    "smartGreenhouse.statusNote":
      "For the portfolio video, fix the compile error, implement the intended relay behavior, and then capture a scene showing real sensor readings and the device's response.",
    "smartGreenhouse.nextStepsHeading": "Next Development Steps",
    "smartGreenhouse.repoLink":
      "GitHub README — wiring, libraries, and code status",
    "smartGreenhouse.footerNote":
      "ESP32 · a DHT11-based temperature/humidity monitoring and relay-control concept",

    // IR Invisible Tripwire Detail Page
    "irTripwire.back": "Back to Arduino Projects",
    "irTripwire.title": "IR INVISIBLE TRIPWIRE",
    "irTripwire.subtitle":
      "An interaction detected through an invisible infrared beam",
    "irTripwire.intro":
      "A contactless sensor prototype that detects the moment a beam is broken and alerts with light and sound.",
    "irTripwire.videoHeading": "Project Video",
    "irTripwire.conceptHeading": "Overview",
    "irTripwire.conceptBody":
      "A 38kHz IR transmitter and receiver face each other to form a detection line. When a person or object blocks that line, the ESP32 detects the state change and responds with a red LED and an alert sound. Once the beam reconnects, it returns to a green standby state.",
    "irTripwire.scenarioHeading": "Interaction Flow",
    "irTripwire.implementationHeading": "What I Implemented",
    "irTripwire.hardwareHeading": "Hardware",
    "irTripwire.scopeHeading": "Current Prototype Scope",
    "irTripwire.scopeBody":
      "The current version detects whether a single IR beam is blocked. It doesn't include position tracking or multi-zone detection, and sensor checks briefly pause during the alert sound because of delay().",
    "irTripwire.nextStepsHeading": "Next Expansion Ideas",
    "irTripwire.repoLink":
      "GitHub README — wiring, how to run, and how it works",
    "irTripwire.footerNote":
      "ESP32 · IR beam break detection · audiovisual alarm prototype",

    // Touch Sensor Piano Detail Page
    "touchSensorPiano.back": "Back to Arduino Projects",
    "touchSensorPiano.title": "Touch Sensor Piano",
    "touchSensorPiano.subtitle":
      "An interactive piano you play by touch and feel through color",
    "touchSensorPiano.intro":
      "Four touch pads tie each note to color in this emotionally expressive interface prototype.",
    "touchSensorPiano.videoHeading": "Project Video",
    "touchSensorPiano.conceptHeading": "Concept",
    "touchSensorPiano.conceptBody":
      "Instead of pressing piano keys, you play notes by touching conductive touch pads with your hand. Each note is expressed through a unique color, so sound and light respond together.",
    "touchSensorPiano.scenarioHeading": "Interaction Flow",
    "touchSensorPiano.noteColorHeading": "Notes and Colors",
    "touchSensorPiano.noteColorPad": "Pad",
    "touchSensorPiano.noteColorNoteCol": "Note",
    "touchSensorPiano.noteColorLed": "LED Feedback",
    "touchSensorPiano.noteColorNote":
      "Lifting your hand stops the buzzer and returns the LED to a dim blue standby color. Pressing a separate button plays a C–D–E–G test melody.",
    "touchSensorPiano.implementationHeading": "Implementation Highlights",
    "touchSensorPiano.hardwareHeading": "Hardware",
    "touchSensorPiano.hardwareBody":
      "Built from an ESP32, four capacitive touch pads, a passive buzzer, an RGB LED, and a momentary push button. Touch input uses GPIO 4, 27, 32, and 13.",
    "touchSensorPiano.scopeHeading": "Current Prototype Scope",
    "touchSensorPiano.scopeBody":
      "The current code implements single-note playing and LED feedback for C, D, E, and G. It doesn't include chords or emotion recognition/classification. Developing the emotional expression behind the project's name could mean adding rules that vary color and tone based on touch-pad combinations or playing patterns.",
    "touchSensorPiano.nextStepsHeading": "Next Expansion Ideas",
    "touchSensorPiano.repoLink":
      "GitHub README — wiring, calibration, running, and troubleshooting",
    "touchSensorPiano.footerNote":
      "ESP32 · 4-note capacitive touch · RGB and buzzer feedback prototype",

    // LinkedIn Section
    "linkedin.title": "Connect with Me",
    "linkedin.subtitle":
      "Let's connect on LinkedIn! I love networking with fellow developers, sharing insights, and discussing the latest in web development.",
    "linkedin.profile": "LinkedIn Profile",
    "linkedin.description":
      "Follow my professional journey and connect with me",
    "linkedin.visit": "Visit LinkedIn Profile",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle":
      "I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!",
    "contact.connect": "Let's Connect",
    "contact.connectDesc":
      "Feel free to reach out through any of these channels. I typically respond within 24 hours.",
    "contact.email": "Email",
    "contact.remote": "Remote Work",
    "contact.remoteDesc": "Available Globally",
    "contact.coffee": "Coffee Chat",
    "contact.coffeeDesc": "Always up for a virtual coffee!",
    "contact.sendMessage": "Send a Message",
    "contact.name": "Name",
    "contact.message": "Message",
    "contact.sent": "Message sent successfully!",
    "contact.errorTitle": "Error",
    "contact.successTitle": "Success",
    "contact.configError":
      "Email service is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY.",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",

    // Footer
    "footer.made": "Made with",
    "footer.using": "using React & Tailwind CSS",
  },
  ko: {
    // Navigation
    "nav.about": "소개",
    "nav.skills": "스킬",
    "nav.projects": "프로젝트",
    "nav.linkedin": "링크드인",
    "nav.contact": "연락처",

    // Hero Section
    "hero.name": "조지현",
    "hero.greeting": "",
    "hero.title": "IoT 개발자",
    "hero.description":
      "UX/UI 디자인 경험을 바탕으로 사용자 중심의 접근 방식으로 커넥티드 하드웨어 경험을 만듭니다.",
    "hero.contact": "연락하기",
    "hero.resume": "이력서 다운로드",

    // About Section
    "about.title": "소개",
    "about.subtitle":
      "UX/UI 디자인 경험을 바탕으로 사용자 중심의 접근 방식으로 커넥티드 하드웨어 경험을 만드는 IoT 개발자입니다.",
    "about.description1":
      "센서, 하드웨어, 소프트웨어를 연결해 직관적이고 반응성 좋은 인터랙티브 경험으로 구현하는 것을 좋아합니다. 이 포트폴리오에서는 물리적 인터랙션, 사용성, 엔지니어링이 결합된 작업물을 확인할 수 있습니다.",
    "about.description3":
      "하드웨어와 소프트웨어가 매끄럽게 함께 작동하는 경험을 만드는 것을 즐기며, 언제나 사용자로부터 출발해 아이디어를 실제로 작동하는 결과물로 구현합니다.",
    "about.cleanCode": "깨끗한 코드",
    "about.cleanCodeDesc":
      "모범 사례와 업계 표준을 따르는 유지보수 가능하고 확장 가능한 코드 작성.",
    "about.designFocus": "디자인 중심",
    "about.designFocusDesc":
      "세부사항과 접근성에 주의를 기울인 직관적인 사용자 경험 창조.",
    "about.performance": "성능",
    "about.performanceDesc":
      "뛰어난 사용자 경험을 제공하는 빠르고 최적화된 애플리케이션 구축.",

    // Skills Section
    "skills.title": "스킬 & 기술",
    "skills.subtitle":
      "아이디어를 현실로 만들기 위해 사용하는 기술과 도구들입니다",
    "skills.iot": "IoT & 하드웨어",
    "skills.software": "소프트웨어 & 웹",
    "skills.tools": "도구 & 디자인",

    // Projects Section
    "projects.title": "주요 프로젝트",
    "projects.subtitle":
      "풀스택 애플리케이션과 혁신적인 솔루션을 특징으로 하는 최근 작업의 쇼케이스",
    "projects.liveDemo": "라이브 데모",
    "projects.code": "코드",
    "projects.paysm": "결제 플랫폼",
    "projects.paysmDesc":
      "Next.js로 구축된 풀기능 결제 플랫폼으로, 안전한 결제 처리와 사용자 인증, 커스텀 디자인 인터페이스를 갖추고 있습니다.",
    "projects.paysmApp": "결제 앱",
    "projects.paysmAppDesc":
      "Next.js로 구축된 종합 온라인 결제 앱으로, 매끄러운 사용자 인증과 안전한 거래, 직관적인 사용자 경험에 중점을 두었습니다.",
    "projects.dashboard": "통계 데이터 대시보드",
    "projects.dashboardDesc":
      "API로 구축된 파이프라인의 모듈에서 생성된 테이블 통계를 제공하는 통계 데이터 대시보드입니다.",
    "projects.platform": "지역 커뮤니티 공유 플랫폼",
    "projects.platformDesc":
      "WanduGo는 위치 기반 커뮤니티 플랫폼으로, 동네 내에서 순환 공유 생태계를 구축합니다. 사용자는 검증된 프로필과 근처 만남을 통해 중고 물품을 안전하게 주고받고 교환하며, 지속적인 공유, 신뢰, 커뮤니티 성장을 촉진합니다.",
    "projects.homework": "숙제 관리 시스템",
    "projects.homeworkDesc":
      "Next.js로 구축된, 어린이들이 숙제를 정리하고 관리할 수 있도록 설계된 사용하기 쉬운 플랫폼입니다. 일정 관리, 진행 상황 추적, 알림 기능과 함께 학습을 재미있고 상호작용적으로 만드는 매력적이고 사용하기 쉬운 인터페이스를 제공합니다.",
    "projects.healthcare": "스마트 헬스 관리 시스템",
    "projects.healthcareDesc":
      "스마트 헬스케어 기기와 연동되는 종합 건강 관리 플랫폼으로, 사용자가 생체 신호를 추적하고 일상 습관을 모니터링하며 맞춤형 인사이트와 추천을 통해 건강한 생활 방식을 유지할 수 있도록 돕습니다.",
    "projects.skinmonitor": "AI 기반 인공피부 이상 반응 모니터링 시스템",
    "projects.skinmonitorDesc":
      "인공피부 실험에서 이상 반응을 효율적이고 정확하게 감지하고 즉시 알림을 제공합니다.",
    "projects.arduino": "아두이노 프로젝트 모음",
    "projects.arduinoDesc":
      "6개의 아두이노 하드웨어 프로젝트 모음입니다: 근접 반응형 빛과 파장 설치물 FLOW / WAVE, 조이스틱 컨트롤러 JOYSTICK LED MATRIX, 디지털 도어락 Smart Safe, 온습도 모니터링 프로토타입 Smart Greenhouse, 적외선 빔 차단 경보 프로토타입 IR Invisible Tripwire, 터치 기반 인터랙티브 피아노 Touch Sensor Piano.",

    "projects.carTrail": "자동차 추적 모션 트레일",
    "projects.carTrailDesc":
      "깊이 카메라가 바닥 영상 위를 달리는 장난감/RC 자동차를 추적하고, 프로젝터가 실시간으로 빛나는 리본, 불꽃, 떠다니는 색 입자로 이동 경로를 그려냅니다. 여러 대의 자동차는 각각 고유한 ID와 색상을 가지며, 자동차 자체는 어둡게 유지됩니다.",

    // Car Trail Detail Page
    "carTrail.back": "프로젝트로 돌아가기",
    "carTrail.title": "자동차 추적 모션 트레일",
    "carTrail.subtitle": "장난감 자동차가 지나간 자리에 빛과 불꽃, 입자가 남는다",
    "carTrail.intro":
      "바닥 영상 위를 달리는 장난감 또는 RC 자동차를 깊이 카메라가 추적하고, 프로젝터는 그 경로를 바닥에 다시 그려낸다 — 빛나는 리본, 뒤쪽에서 튀는 스파크, 멀어지며 흩어지는 색 입자. 여러 대의 자동차를 동시에 추적할 수 있고 각각 고유한 ID와 색상을 가지며, 자동차 자체는 어둡게 유지되어 빛의 흔적만 눈에 들어온다.",
    "carTrail.videoHeading": "프로젝트 영상",
    "carTrail.conceptHeading": "컨셉",
    "carTrail.conceptBody":
      "Car trail은 장난감 자동차를 빛의 붓으로 만든다. 자동차가 바닥을 지나가면 프로젝터가 그 뒤로 빛나는 리본, 흰색에서 빨간색으로 식어가는 불꽃 같은 스파크, 경로에서 흩어지는 입자를 남기고, 자동차 자체는 빛나지 않게 유지해 시선이 트레일에 머물도록 한다. 이 설치의 바닥 registration(homography), 충돌 감지 룸의 깊이 마스크 체인, static-mask 룸의 슬라이더 패널 코드를 각각 새로 만들지 않고 그대로 재사용한다.",
    "carTrail.pipelineHeading": "동작 방식 — 프레임별",
    "carTrail.implementationHeading": "구현 세부사항",
    "carTrail.runHeading": "실행 방법",
    "carTrail.controlsHeading": "조작키",
    "carTrail.controlsKey": "키",
    "carTrail.controlsAction": "동작",
    "carTrail.settingsHeading": "설정 패널",
    "carTrail.settingsSlider": "슬라이더",
    "carTrail.settingsDefault": "기본값",
    "carTrail.settingsNote": "설명",
    "carTrail.filesHeading": "파일",
    "carTrail.filesFile": "파일",
    "carTrail.filesWhat": "내용",
    "carTrail.limitsHeading": "한계",
    "carTrail.footerNote":
      "자동차 크기 기준: 바닥 설치 기준(카메라 높이 약 1.3m)에서 20 × 10cm 자동차는 약 3000–4000 카메라 픽셀에 해당한다. 카메라 창에는 각 자동차 옆에 크기가 함께 표시된다.",

    // Arduino Projects Detail Page
    "arduino.back": "프로젝트로 돌아가기",
    "arduino.pageTitle": "아두이노 프로젝트 모음",
    "arduino.pageSubtitle":
      "센서, 액추에이터, 실시간 제어를 다양하게 조합해 만든 6개의 아두이노 하드웨어 프로젝트입니다.",
    "arduino.viewRepo": "전체 저장소 보기",
    "arduino.viewCode": "코드 보기",
    "arduino.viewDetails": "자세히 보기",
    "arduino.ledFighter": "FLOW / WAVE",
    "arduino.ledFighterDesc":
      "가까이 다가오는 손을 감지해 LED 스트립의 흐름에서 매트릭스 패널의 파장으로 이어지는 빛의 시퀀스를 실행합니다.",
    "arduino.ledJoystick": "JOYSTICK LED MATRIX",
    "arduino.ledJoystickDesc":
      "아날로그 조이스틱 입력으로 LED 디스플레이를 제어하는 컨트롤러입니다.",
    "arduino.locker": "Smart Safe",
    "arduino.lockerDesc":
      "키패드/센서 입력으로 서보 기반 잠금장치를 제어하는 디지털 도어락입니다.",
    "arduino.smartGreenhouse": "Smart Greenhouse",
    "arduino.smartGreenhouseDesc":
      "온도와 습도를 읽고 릴레이로 장치를 제어하는 것을 목표로 하는 ESP32 온실 모니터링 프로토타입입니다.",
    "arduino.irTripwire": "IR INVISIBLE TRIPWIRE",
    "arduino.irTripwireDesc":
      "보이지 않는 적외선 빔이 끊기는 순간을 감지해 빛과 소리로 알리는 비접촉식 센서 프로토타입입니다.",
    "arduino.touchSensorPiano": "Touch Sensor Piano",
    "arduino.touchSensorPianoDesc":
      "네 개의 정전식 터치 패드가 음과 색으로 이어지는 인터랙티브 피아노 프로토타입입니다.",


    // Joystick LED Matrix 상세 페이지
    "joystickLedMatrix.back": "아두이노 프로젝트로 돌아가기",
    "joystickLedMatrix.title": "JOYSTICK LED MATRIX",
    "joystickLedMatrix.subtitle": "조이스틱의 방향을 16×16 빛의 화살표로",
    "joystickLedMatrix.intro":
      "아날로그 조이스틱 입력을 방향으로 해석하고, 256개의 LED로 구성한 패널에 실시간 시각화하는 인터랙션 프로젝트입니다.",
    "joystickLedMatrix.videoHeading": "프로젝트 영상",
    "joystickLedMatrix.conceptHeading": "프로젝트 개요",
    "joystickLedMatrix.conceptBody":
      "KY-023 조이스틱의 X/Y 아날로그 값을 읽어 상하좌우 방향을 계산합니다. 선택된 방향은 16×16 WS2815 LED 패널의 화살표로 나타납니다. KY-027 모듈 신호가 활성화된 상태에서는 화살표 색상을 흰색으로 바꿔 입력 상태를 강조합니다.",
    "joystickLedMatrix.scenarioHeading": "인터랙션",
    "joystickLedMatrix.implementationHeading": "주요 구현",
    "joystickLedMatrix.colorHeading": "방향 색상",
    "joystickLedMatrix.colorInput": "입력",
    "joystickLedMatrix.colorDisplay": "표시",
    "joystickLedMatrix.hardwareHeading": "하드웨어 구성",
    "joystickLedMatrix.hardwarePart": "구성",
    "joystickLedMatrix.hardwareRole": "역할",
    "joystickLedMatrix.scopeHeading": "현재 구현 범위",
    "joystickLedMatrix.scopeBody":
      "KY-027은 디지털 입력으로만 사용하며, 활성 상태에서 방향 표시를 흰색으로 강조합니다. 조이스틱 스위치는 시리얼 모니터에 눌림 상태를 출력합니다. 대각선 화살표나 버튼에 따른 별도 모드는 현재 구현되어 있지 않습니다.",
    "joystickLedMatrix.nextStepsHeading": "다음 확장 아이디어",
    "joystickLedMatrix.repoLink": "GitHub README — 배선, 업로드, 설정, 문제 해결",
    "joystickLedMatrix.footerNote":
      "ESP32 · FastLED · WS2815 16×16 · 4방향 입력 시각화",

    // Smart Safe 상세 페이지
    "smartSafe.back": "아두이노 프로젝트로 돌아가기",
    "smartSafe.title": "SMART SAFE",
    "smartSafe.subtitle":
      "조이스틱으로 비밀번호를 입력하는 ESP32 서보 잠금 프로토타입",
    "smartSafe.intro":
      "숫자를 선택하고 확인하면, 서보 잠금 장치가 비밀번호 입력 결과에 반응합니다.",
    "smartSafe.videoHeading": "프로젝트 영상",
    "smartSafe.conceptHeading": "프로젝트 개요",
    "smartSafe.conceptBody":
      "조이스틱을 위아래로 움직여 숫자를 선택하고, 조이스틱 버튼으로 네 자리 입력을 차례로 저장합니다. 확인 버튼을 누르면 ESP32가 입력값을 코드에 저장된 비밀번호와 비교합니다. 성공하면 MG996R 서보가 잠금 장치를 일정 시간 열고, 실패하면 부저가 경고음을 냅니다.",
    "smartSafe.scenarioHeading": "인터랙션 흐름",
    "smartSafe.scenarioMatch": "비밀번호 일치",
    "smartSafe.scenarioMismatch": "비밀번호 불일치",
    "smartSafe.implementationHeading": "주요 구현",
    "smartSafe.hardwareHeading": "하드웨어 구성",
    "smartSafe.hardwareBody":
      "ESP32, KY-023 조이스틱, 확인 버튼, 도어 스위치, 부저, KY-016 LED 모듈, MG996R 서보로 구성됩니다. 서보는 별도 5–6 V 전원으로 구동하고 ESP32와 GND를 공통 연결합니다.",
    "smartSafe.scopeHeading": "현재 프로토타입 범위",
    "smartSafe.scopeBody":
      "이 프로젝트는 입력·비교·서보 동작을 확인하기 위한 하드웨어 프로토타입입니다. 비밀번호는 코드에 저장되어 있고, 오답 횟수 제한이나 변조 방지 같은 보안 기능은 없습니다. 따라서 실제 귀중품 보관용 잠금장치로 사용하기 위한 보안 시스템은 아닙니다.",
    "smartSafe.nextStepsHeading": "다음 확장 아이디어",
    "smartSafe.repoLink": "GitHub README — 부품, 배선, 입력 방법, 보안 제한",
    "smartSafe.footerNote": "ESP32 · 4자리 입력 · 서보 잠금 상태 제어 프로토타입",

    // Flow / Wave 상세 페이지
    "flowWave.back": "아두이노 프로젝트로 돌아가기",
    "flowWave.title": "FLOW / WAVE",
    "flowWave.subtitle": "손의 움직임으로 빛의 흐름과 파장을 만드는 인터랙션",
    "flowWave.intro":
      "가까이 다가오는 손을 감지해 스트립의 흐름에서 매트릭스의 파장으로 이어지는 빛의 시퀀스를 실행합니다.",
    "flowWave.videoHeading": "프로젝트 영상",
    "flowWave.conceptHeading": "컨셉",
    "flowWave.conceptBody":
      "관객의 손이 센서에 가까워지면 빛이 반응합니다. RGBW 스트립을 따라 밝기가 여러 번 맥동하며 앞으로 흐르는 듯한 착시를 만들고, 스트립이 사라진 뒤에는 16×16 LED 패널의 중심에서 컬러 파장이 퍼집니다.",
    "flowWave.scenarioHeading": "인터랙션 시퀀스",
    "flowWave.implementationHeading": "주요 구현",
    "flowWave.setupHeading": "설치 구성",
    "flowWave.timingHeading": "효과 타이밍",
    "flowWave.timingStage": "단계",
    "flowWave.timingDuration": "시간",
    "flowWave.scopeHeading": "현재 프로토타입 범위",
    "flowWave.scopeBody":
      "효과는 코드에 지정된 거리 임계값과 타이밍으로 실행됩니다. HC-SR04가 유효한 20 cm 초과 거리를 읽어야 다음 접근을 다시 감지할 수 있으며, 에코가 끊긴 상황을 자동으로 손 이탈로 처리하지는 않습니다.",
    "flowWave.nextStepsHeading": "다음 확장 아이디어",
    "flowWave.repoLink": "GitHub README — 배선, 전원, 설정, 상태 처리",
    "flowWave.footerNote":
      "ESP32 · 근접 반응형 RGBW 흐름 및 LED 매트릭스 파장 프로토타입",

    // Smart Greenhouse 상세 페이지
    "smartGreenhouse.back": "아두이노 프로젝트로 돌아가기",
    "smartGreenhouse.title": "SMART GREENHOUSE",
    "smartGreenhouse.subtitle":
      "온도와 습도를 읽는 ESP32 온실 모니터링 프로토타입",
    "smartGreenhouse.intro":
      "환경 데이터를 읽고, 이를 바탕으로 온실 장치를 제어하는 시스템을 위한 하드웨어 프로토타입입니다.",
    "smartGreenhouse.videoHeading": "프로젝트 영상",
    "smartGreenhouse.conceptHeading": "프로젝트 개요",
    "smartGreenhouse.conceptBody":
      "DHT11 센서로 온도와 습도를 측정해 ESP32에서 확인하는 온실 모니터링 프로젝트입니다. 측정값을 기준값과 비교해 릴레이로 환기 팬이나 다른 장치를 제어하는 구조를 목표로 합니다.",
    "smartGreenhouse.flowHeading": "시스템 흐름",
    "smartGreenhouse.hardwareHeading": "하드웨어 구성",
    "smartGreenhouse.statusHeading": "현재 구현 상태",
    "smartGreenhouse.statusBody":
      "제공된 스케치는 센서 초기화, 2초 간격 측정, 시리얼 출력, 센서 오류 확인, 릴레이의 초기 LOW 설정을 포함합니다. TEMP_LIMIT 27.5°C와 HUM_LIMIT 70% 값은 선언되어 있지만 제어 조건에는 연결되어 있지 않습니다. 또한 릴레이 제어 부분에 코드가 아닌 문구가 섞여 있어, 전달된 상태 그대로는 컴파일되지 않습니다.",
    "smartGreenhouse.statusNote":
      "따라서 포트폴리오 영상에는 컴파일 오류를 수정하고 원하는 릴레이 동작을 구현한 뒤 실제 센서 값과 장치 반응을 확인한 장면을 추가하는 것이 좋습니다.",
    "smartGreenhouse.nextStepsHeading": "다음 개발 단계",
    "smartGreenhouse.repoLink": "GitHub README — 배선, 라이브러리, 코드 상태",
    "smartGreenhouse.footerNote":
      "ESP32 · DHT11 기반 온습도 모니터링 및 릴레이 제어 구상",

    // IR Invisible Tripwire 상세 페이지
    "irTripwire.back": "아두이노 프로젝트로 돌아가기",
    "irTripwire.title": "IR INVISIBLE TRIPWIRE",
    "irTripwire.subtitle": "보이지 않는 적외선 빔으로 감지하는 인터랙션",
    "irTripwire.intro":
      "빔이 끊기는 순간을 감지해 빛과 소리로 알리는 비접촉식 센서 프로토타입입니다.",
    "irTripwire.videoHeading": "프로젝트 영상",
    "irTripwire.conceptHeading": "프로젝트 개요",
    "irTripwire.conceptBody":
      "38 kHz IR 송신기와 수신기를 마주 보게 배치해 감지선을 만듭니다. 사람이나 물체가 이 선을 가로막으면 ESP32가 상태 변화를 감지하고, 빨간 LED와 경고음으로 반응합니다. 빔이 다시 연결되면 초록색 대기 상태로 돌아옵니다.",
    "irTripwire.scenarioHeading": "인터랙션 흐름",
    "irTripwire.implementationHeading": "주요 구현",
    "irTripwire.hardwareHeading": "하드웨어 구성",
    "irTripwire.scopeHeading": "현재 프로토타입 범위",
    "irTripwire.scopeBody":
      "현재 버전은 단일 IR 빔의 차단 여부를 감지합니다. 위치 추적이나 여러 구간 판별 기능은 포함되어 있지 않으며, 경고음 재생 중에는 delay()로 인해 센서 검사가 잠시 멈춥니다.",
    "irTripwire.nextStepsHeading": "다음 확장 아이디어",
    "irTripwire.repoLink": "GitHub README — 배선, 실행 방법, 동작 원리",
    "irTripwire.footerNote":
      "ESP32 · IR beam break detection · audiovisual alarm prototype",

    // Touch Sensor Piano 상세 페이지
    "touchSensorPiano.back": "아두이노 프로젝트로 돌아가기",
    "touchSensorPiano.title": "Touch Sensor Piano",
    "touchSensorPiano.subtitle": "터치로 연주하고, 색으로 느끼는 인터랙티브 피아노",
    "touchSensorPiano.intro":
      "네 개의 터치 패드가 음과 색으로 이어지는 감성 인터페이스 프로토타입입니다.",
    "touchSensorPiano.videoHeading": "프로젝트 영상",
    "touchSensorPiano.conceptHeading": "컨셉",
    "touchSensorPiano.conceptBody":
      "피아노 건반을 누르는 대신 전도성 터치 패드를 손으로 터치해 음을 연주합니다. 각 음은 고유한 색으로 표현되어 소리와 빛이 함께 반응합니다.",
    "touchSensorPiano.scenarioHeading": "인터랙션 흐름",
    "touchSensorPiano.noteColorHeading": "음과 색",
    "touchSensorPiano.noteColorPad": "터치 패드",
    "touchSensorPiano.noteColorNoteCol": "음",
    "touchSensorPiano.noteColorLed": "LED 피드백",
    "touchSensorPiano.noteColorNote":
      "손을 떼면 부저가 멈추고 LED는 약한 파란색 대기 상태로 돌아옵니다. 별도 버튼을 누르면 C–D–E–G 테스트 멜로디가 재생됩니다.",
    "touchSensorPiano.implementationHeading": "구현 포인트",
    "touchSensorPiano.hardwareHeading": "하드웨어 구성",
    "touchSensorPiano.hardwareBody":
      "ESP32, 정전식 터치 패드 4개, Passive buzzer, RGB LED, 순간 누름 버튼으로 구성됩니다. 터치 입력은 GPIO 4, 27, 32, 13을 사용합니다.",
    "touchSensorPiano.scopeHeading": "현재 프로토타입 범위",
    "touchSensorPiano.scopeBody":
      "현재 코드는 C·D·E·G 네 음의 단음 연주와 LED 피드백을 구현합니다. 화음이나 감정 인식·분류는 포함되어 있지 않습니다. 프로젝트 이름의 감성적인 표현을 발전시키려면 여러 터치 패드 조합이나 연주 패턴에 따라 색상·음색을 달리하는 규칙을 추가할 수 있습니다.",
    "touchSensorPiano.nextStepsHeading": "다음 확장 아이디어",
    "touchSensorPiano.repoLink": "GitHub README — 배선, 보정, 실행, 문제 해결",
    "touchSensorPiano.footerNote":
      "ESP32 · 정전식 터치 4음 · RGB 및 부저 피드백 프로토타입",

    // LinkedIn Section
    "linkedin.title": "저와 연결하세요",
    "linkedin.subtitle":
      "링크드인에서 연결해요! 다른 개발자들과 네트워킹하고, 통찰을 공유하며, 웹 개발의 최신 동향에 대해 토론하는 것을 좋아합니다.",
    "linkedin.profile": "링크드인 프로필",
    "linkedin.description": "제 전문적인 여정을 팔로우하고 연결하세요",
    "linkedin.visit": "링크드인 프로필 방문",

    // Contact Section
    "contact.title": "연락하기",
    "contact.subtitle":
      "새로운 기회와 흥미진진한 프로젝트에 항상 관심이 있습니다. 어떻게 함께 일할 수 있을지 논의해봅시다!",
    "contact.connect": "연결해요",
    "contact.connectDesc":
      "이러한 채널 중 아무나를 통해 언제든지 연락해 주세요. 보통 24시간 내에 응답합니다.",
    "contact.email": "이메일",
    "contact.remote": "원격 근무",
    "contact.remoteDesc": "전 세계적으로 이용 가능",
    "contact.coffee": "커피 채팅",
    "contact.coffeeDesc": "언제나 가상 커피를 위해!",
    "contact.sendMessage": "메시지 보내기",
    "contact.name": "이름",
    "contact.message": "메시지",
    "contact.sent": "메시지가 성공적으로 전송되었습니다!",
    "contact.errorTitle": "오류",
    "contact.successTitle": "성공",
    "contact.configError":
      "이메일 서비스가 구성되어 있지 않습니다. VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID 및 VITE_EMAILJS_PUBLIC_KEY를 설정하세요.",
    "contact.send": "메시지 보내기",
    "contact.sending": "전송 중...",

    // Footer
    "footer.made": "제작",
    "footer.using": "React & Tailwind CSS 사용",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Initialize language from localStorage or default to 'en'
  const [language, setInternalLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language");
      return savedLanguage === "en" || savedLanguage === "ko"
        ? savedLanguage
        : "en";
    }
    return "en";
  });

  // Memoize the translation function to prevent unnecessary rerenders
  const translationMap = useMemo(() => {
    return new Map(Object.entries(translations[language] || {}));
  }, [language]);

  const setLanguage = useCallback((newLanguage: Language) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLanguage);
    }
    setInternalLanguage(newLanguage);
  }, []);

  const t = useCallback(
    (key: string) => {
      return translationMap.get(key) || key;
    },
    [translationMap],
  );

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Add empty export to ensure file is treated as a module
export {};
