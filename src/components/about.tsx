import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';

export function About() {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Code,
      title: t('about.cleanCode'),
      description: t('about.cleanCodeDesc')
    },
    {
      icon: Palette,
      title: t('about.designFocus'),
      description: t('about.designFocusDesc')
    },
    {
      icon: Zap,
      title: t('about.performance'),
      description: t('about.performanceDesc')
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-6">{t('about.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-muted-foreground mb-6">
              {t('about.description1')}
            </p>
            <p className="text-muted-foreground mb-6">
              {t('about.description2')}
            </p>
            <p className="text-muted-foreground">
              {t('about.description3')}
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}