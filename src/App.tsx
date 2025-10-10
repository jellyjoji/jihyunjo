import React, { Suspense } from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { LinkedIn } from './components/linkedin';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { ThemeProvider } from './contexts/theme-context';
import { LanguageProvider } from './contexts/language-context';

// Loading component
function LoadingSection() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-muted rounded w-2/3 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Suspense fallback={<LoadingSection />}>
              <Hero />
            </Suspense>
            <Suspense fallback={<LoadingSection />}>
              <About />
            </Suspense>
            <Suspense fallback={<LoadingSection />}>
              <Skills />
            </Suspense>
            <Suspense fallback={<LoadingSection />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<LoadingSection />}>
              <LinkedIn />
            </Suspense>
            <Suspense fallback={<LoadingSection />}>
              <Contact />
            </Suspense>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}