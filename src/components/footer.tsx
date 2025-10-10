import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';

export function Footer() {
  const { t, language } = useLanguage();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/jellyjoji?tab=repositories', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/jellyjoji', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:joji.the.jungle@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-medium mb-2">{language === 'ko' ? '조지현' : 'Jihyun Jo'}</h3>
            <p className="text-muted-foreground">
              {language === 'ko' ? '프론트엔드 개발자 & UX/UI 디자이너' : 'Front-end Developer & UX/UI Designer'}
            </p>
          </div>

          <div className="flex gap-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            © 2025 {language === 'ko' ? '조지현' : 'Jihyun Jo'}. {t('footer.made')} <Heart className="w-4 h-4 text-red-500" /> {t('footer.using')}
          </p>
        </div>
      </div>
    </footer>
  );
}