import { NewHero } from '@/components/NewHero';
import { Metadata } from 'next';
import { Suspense } from 'react';

const AboutPage = () => {
  const rows = new Array(80).fill(0);
  const cols = new Array(80).fill(0);
  return (
    <div className="relative h-[calc(100dvh-4rem)]">
      <div className="absolute h-[calc(100dvh-4rem)] w-full">
        <Suspense fallback={null}>
          <NewHero />
        </Suspense>
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-primary [mask-image:radial-gradient(transparent,white)]" />
      <div className="flex h-full w-full flex-col overflow-hidden">
        {rows.map((_, i) => (
          <div key={i} className="flex">
            {cols.map((_, j) => (
              <div
                key={j}
                className="min-h-8 min-w-8 border-l border-t border-secondary"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;

export const metadata: Metadata = {
  title: 'About',
};
