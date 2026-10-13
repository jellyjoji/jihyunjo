import React, { Suspense, useEffect, useState } from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { LinkedIn } from './components/linkedin';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { ArduinoProjects } from './components/arduino-projects';
import { JoystickLedMatrix } from './components/joystick-led-matrix';
import { SmartSafe } from './components/smart-safe';
import { FlowWave } from './components/flow-wave';
import { SmartGreenhouse } from './components/smart-greenhouse';
import { IrTripwire } from './components/ir-tripwire';
import { TouchSensorPiano } from './components/touch-sensor-piano';
import { CarTrail } from './components/car-trail';
import { ThemeProvider } from './contexts/theme-context';
import { LanguageProvider } from './contexts/language-context';

function getRoute() {
  return window.location.hash.replace(/^#\/?/, '');
}

// Routes that render as their own standalone page instead of a section on the home page
const FULL_PAGE_ROUTES = ['arduino-projects', 'joystick-led-matrix', 'smart-safe', 'flow-wave', 'smart-greenhouse', 'ir-tripwire', 'touch-sensor-piano', 'car-trail'];

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
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // When navigating back to a section (e.g. from a project page), scroll to it
  useEffect(() => {
    if (route && !FULL_PAGE_ROUTES.includes(route)) {
      const id = route;
      const t = setTimeout(() => {
        document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return () => clearTimeout(t);
    }
  }, [route]);

  if (route === 'arduino-projects') {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <ArduinoProjects />
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  if (route === 'joystick-led-matrix') {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <JoystickLedMatrix />
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  if (route === 'smart-safe') {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <SmartSafe />
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  if (route === 'flow-wave') {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <FlowWave />
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  if (route === 'smart-greenhouse') {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <SmartGreenhouse />
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  if (route === 'ir-tripwire') {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <IrTripwire />
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  if (route === 'touch-sensor-piano') {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <TouchSensorPiano />
        </LanguageProvider>
      </ThemeProvider>
    );
  }

  if (route === 'car-trail') {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <CarTrail />
        </LanguageProvider>
      </ThemeProvider>
    );
  }

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