import React from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/language-context';

export function LinkedIn() {
  const { t } = useLanguage();
  
  return (
    <section id="linkedin" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Linkedin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium mb-6">{t('linkedin.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('linkedin.subtitle')}
          </p>
        </div>

        <div className="bg-background rounded-lg p-8 border border-border hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-center sm:text-left">
              <h3 className="font-medium mb-2">{t('linkedin.profile')}</h3>
              <p className="text-muted-foreground">
                {t('linkedin.description')}
              </p>
            </div>
            <Button size="lg" asChild>
              <a 
                href="https://linkedin.com/in/jellyjoji" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                {t('linkedin.visit')}
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            linkedin.com/in/jellyjoji
          </p>
        </div>
      </div>
    </section>
  );
}