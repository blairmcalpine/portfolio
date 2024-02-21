import { Arcturus } from '@/icons/Arcturus';
import { Faire } from '@/icons/Faire';
import { Otto } from '@/icons/Otto';

export const Experience = () => {
  return (
    <section
      className="flex flex-col h-[calc(100dvh-65px)] w-full md:p-16 p-4 gap-6"
      id="experience"
    >
      <h2 className="text-6xl md:text-7xl font-bold	">Experience</h2>
      <p className="text-xl md:max-w-lg">
        Amazing opportunities that I gained during my time in the co-op program
        at the University of Waterloo.
      </p>
      <div className="flex md:flex-row flex-col gap-8 h-full">
        <Card
          logo={<Otto className="text-onPrimary" width={180} height={64} />}
          href="https://www.ottointelligence.co/"
        >
          <h3 className="text-4xl font-bold text-secondaryAccent">
            Full-Stack Engineer
          </h3>
          <h4 className="text-secondary text-3xl font-bold">
            Otto Intelligence • 2021
          </h4>
          <ol className="text-lg">
            <li>
              • Full stack mobile-web application development using Next.js,
              TypeScript, React, Tailwind CSS, GraphQL, Prisma and PostgreSQL
            </li>
            <li>
              • Independently created time-sensitive financial feature sets on a
              weekly basis
            </li>
            <li>• Developed email, logging and Stripe integrations</li>
            <li>• Wrote robust integration and unit tests for GraphQL APIs</li>
          </ol>
        </Card>
        <Card
          logo={<Arcturus className="text-onPrimary" />}
          href="https://www.arcturusnetworks.com/"
        ></Card>
        <Card
          href="https://www.faire.com/"
          logo={<Faire className="text-onPrimary" width={312} height={39} />}
        ></Card>
      </div>
    </section>
  );
};

type CardProps = {
  children?: React.ReactNode;
  href: string;
  logo: React.ReactNode;
};
const Card = ({ children, logo, href }: CardProps) => {
  return (
    <div className="border-secondary rounded-xl border p-4 basis-1/3 flex flex-col gap-4">
      <a className="h-24 grid place-items-center" href={href} target="_blank">
        {logo}
      </a>
      {children}
    </div>
  );
};
