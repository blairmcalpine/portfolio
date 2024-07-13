import { NewHero } from '@/components/NewHero';
import { Metadata } from 'next';

const AboutPage = () => {
  return (
    <div className="h-dvh w-full">
      <NewHero />
    </div>
  );
};

export default AboutPage;

export const metadata: Metadata = {
  title: 'About',
};
