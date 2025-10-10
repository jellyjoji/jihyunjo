import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of a customer-facing web application serving 100K+ users',
        'Implemented microservices architecture reducing load times by 40%',
        'Mentored junior developers and established coding standards',
        'Collaborated with design team to improve user experience and accessibility'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: [
        'Built and maintained multiple React applications from conception to deployment',
        'Developed RESTful APIs using Node.js and Express.js',
        'Integrated third-party services including payment processors and analytics tools',
        'Participated in agile development processes and sprint planning'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'Remote',
      period: '2019 - 2020',
      description: [
        'Created responsive websites and web applications for various clients',
        'Worked closely with designers to implement pixel-perfect designs',
        'Optimized website performance and improved SEO rankings',
        'Maintained and updated existing client websites'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-6">Work Experience</h2>
          <p className="text-lg text-muted-foreground">
            My professional journey and the experiences that shaped my expertise.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-16 bottom-0 w-px bg-border"></div>
              )}
              
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-2">
                  <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                </div>

                {/* Content */}
                <div className="bg-background rounded-lg p-6 border border-border flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-medium mb-1">{experience.title}</h3>
                      <h4 className="text-primary mb-2">{experience.company}</h4>
                    </div>
                    <div className="flex flex-col md:text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground flex">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}