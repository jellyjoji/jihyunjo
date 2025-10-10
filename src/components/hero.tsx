import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from 'figma:asset/4e17f810198bb4a2a988d7e9dbc47cab3a8263cd.png';
import { useLanguage } from '../contexts/language-context';

export function Hero() {
  const { t, language } = useLanguage();
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-6">
              {language === 'ko' ? (
                <span className="text-primary">{t('hero.name')}</span>
              ) : (
                <>
                  {t('hero.greeting')}{' '}
                  <span className="text-primary">{t('hero.name')}</span>
                </>
              )}
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">
              {t('hero.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="group">
                <Mail className="w-4 h-4 mr-2" />
                {t('hero.contact')}
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Download className="w-4 h-4 mr-2" />
                {t('hero.resume')}
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://github.com/jellyjoji?tab=repositories" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/jellyjoji" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:joji.the.jungle@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-border shadow-lg">
                <img
                  src={profileImage}
                  alt="Jihyun Jo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}