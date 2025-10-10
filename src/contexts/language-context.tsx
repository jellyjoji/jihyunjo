import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.linkedin': 'LinkedIn',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.name': 'Jihyun Jo',
    'hero.greeting': 'Hello, I\'m',
    'hero.title': 'Front-end Developer with a foundation in UX/UI Design',
    'hero.description': 'Building user-focused digital experiences with clean code and clear design.',
    'hero.contact': 'Get In Touch',
    'hero.resume': 'Download Resume',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'I\'m a Front-end Developer with a background in UX/UI Design.',
    'about.description1': 'I love turning clean design concepts into intuitive, responsive interfaces. Here, you\'ll find a selection of my work — blending creativity, usability, and code.',
    'about.description2': 'My main tools and technologies include: Next.js, React.js, JavaScript, Node.js, Figma, and UX/UI Design.',
    'about.description3': 'I enjoy creating fast, accessible, and intuitive interfaces — transforming thoughtful design into functional products.',
    'about.cleanCode': 'Clean Code',
    'about.cleanCodeDesc': 'Writing maintainable, scalable code that follows best practices and industry standards.',
    'about.designFocus': 'Design Focus',
    'about.designFocusDesc': 'Creating intuitive user experiences with attention to detail and accessibility.',
    'about.performance': 'Performance',
    'about.performanceDesc': 'Building fast, optimized applications that deliver exceptional user experiences.',
    
    // Skills Section
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'Here are the technologies and tools I work with to bring ideas to life',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools & Technologies',
    'skills.design': 'Design',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A showcase of my recent work, featuring full-stack applications and innovative solutions',
    'projects.liveDemo': 'Live Demo',
    'projects.code': 'Code',
    'projects.ecommerce': 'E-Commerce Platform',
    'projects.ecommerceDesc': 'A full-featured e-commerce platform built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.',
    'projects.taskApp': 'Task Management App',
    'projects.taskAppDesc': 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    'projects.analytics': 'Analytics Dashboard',
    'projects.analyticsDesc': 'A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.',
    
    // LinkedIn Section
    'linkedin.title': 'Connect with Me',
    'linkedin.subtitle': 'Let\'s connect on LinkedIn! I love networking with fellow developers, sharing insights, and discussing the latest in web development.',
    'linkedin.profile': 'LinkedIn Profile',
    'linkedin.description': 'Follow my professional journey and connect with me',
    'linkedin.visit': 'Visit LinkedIn Profile',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'I\'m always interested in new opportunities and exciting projects. Let\'s discuss how we can work together!',
    'contact.connect': 'Let\'s Connect',
    'contact.connectDesc': 'Feel free to reach out through any of these channels. I typically respond within 24 hours.',
    'contact.email': 'Email',
    'contact.remote': 'Remote Work',
    'contact.remoteDesc': 'Available Globally',
    'contact.coffee': 'Coffee Chat',
    'contact.coffeeDesc': 'Always up for a virtual coffee!',
    'contact.sendMessage': 'Send a Message',
    'contact.name': 'Name',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.made': 'Made with',
    'footer.using': 'using React & Tailwind CSS',
  },
  ko: {
    // Navigation
    'nav.about': '소개',
    'nav.skills': '스킬',
    'nav.projects': '프로젝트',
    'nav.linkedin': '링크드인',
    'nav.contact': '연락처',
    
    // Hero Section
    'hero.name': '조지현',
    'hero.greeting': '',
    'hero.title': 'UX/UI 디자인을 기반으로 한 프론트엔드 개발자입니다.',
    'hero.description': '깔끔한 코드와 명확한 디자인으로 사용자 중심의 디지털 경험을 만듭니다.',
    'hero.contact': '연락하기',
    'hero.resume': '이력서 다운로드',
    
    // About Section
    'about.title': '소개',
    'about.subtitle': 'UX/UI 디자인을 기반으로 한 프론트엔드 개발자입니다.',
    'about.description1': '깔끔한 디자인 컨셉을 직관적이고 반응형 인터페이스로 구현하는 것을 즐깁니다. 이 포트폴리오에서는 창의성, 사용성, 코드가 결합된 다양한 작업물을 확인할 수 있습니다.',
    'about.description2': '주요 기술 및 도구: Next.js, React.js, JavaScript, Node.js, Figma, UX/UI Design',
    'about.description3': '빠르고 접근성 높은 직관적인 인터페이스를 만들며, 사려 깊은 디자인을 기능적인 제품으로 구현합니다.',
    'about.cleanCode': '깨끗한 코드',
    'about.cleanCodeDesc': '모범 사례와 업계 표준을 따르는 유지보수 가능하고 확장 가능한 코드 작성.',
    'about.designFocus': '디자인 중심',
    'about.designFocusDesc': '세부사항과 접근성에 주의를 기울인 직관적인 사용자 경험 창조.',
    'about.performance': '성능',
    'about.performanceDesc': '뛰어난 사용자 경험을 제공하는 빠르고 최적화된 애플리케이션 구축.',
    
    // Skills Section
    'skills.title': '스킬 & 기술',
    'skills.subtitle': '아이디어를 현실로 만들기 위해 사용하는 기술과 도구들입니다',
    'skills.frontend': '프론트엔드',
    'skills.backend': '백엔드',
    'skills.tools': '도구 & 기술',
    'skills.design': '디자인',
    
    // Projects Section
    'projects.title': '주요 프로젝트',
    'projects.subtitle': '풀스택 애플리케이션과 혁신적인 솔루션을 특징으로 하는 최근 작업의 쇼케이스',
    'projects.liveDemo': '라이브 데모',
    'projects.code': '코드',
    'projects.ecommerce': '이커머스 플랫폼',
    'projects.ecommerceDesc': 'React와 Node.js로 구축된 완전한 기능의 이커머�� 플랫폼. 사용자 인증, 결제 처리, 관리자 대시보드 포함.',
    'projects.taskApp': '작업 관리 앱',
    'projects.taskAppDesc': '실시간 업데이트, 드래그 앤 드롭 기능, 팀 협업 기능을 갖춘 협업형 작업 관리 애플리케이션.',
    'projects.analytics': '분석 대시보드',
    'projects.analyticsDesc': '인터랙티브 차트, 실시간 데이터 시각화, 사용자 정의 가능한 보고 기능을 갖춘 포괄적인 분석 대시보드.',
    
    // LinkedIn Section
    'linkedin.title': '저와 연결하세요',
    'linkedin.subtitle': '링크드인에서 연결해요! 다른 개발자들과 네트워킹하고, 통찰을 공유하며, 웹 개발의 최신 동향에 대해 토론하는 것을 좋아합니다.',
    'linkedin.profile': '링크드인 프로필',
    'linkedin.description': '제 전문적인 여정을 팔로우하고 연결하세요',
    'linkedin.visit': '링크드인 프로필 방문',
    
    // Contact Section
    'contact.title': '연락하기',
    'contact.subtitle': '새로운 기회와 흥미진진한 프로젝트에 항상 관심이 있습니다. 어떻게 함께 일할 수 있을지 논의해봅시다!',
    'contact.connect': '연결해요',
    'contact.connectDesc': '이러한 채널 중 아무나를 통해 언제든지 연락해 주세요. 보통 24시간 내에 응답합니다.',
    'contact.email': '이메일',
    'contact.remote': '원격 근무',
    'contact.remoteDesc': '전 세계적으로 이용 가능',
    'contact.coffee': '커피 채팅',
    'contact.coffeeDesc': '언제나 가상 커피를 위해!',
    'contact.sendMessage': '메시지 보내기',
    'contact.name': '이름',
    'contact.message': '메시지',
    'contact.send': '메시지 보내기',
    
    // Footer
    'footer.made': '제작',
    'footer.using': 'React & Tailwind CSS 사용',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    const translation = translations[language]?.[key];
    if (translation !== undefined) {
      return translation;
    }
    return key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
