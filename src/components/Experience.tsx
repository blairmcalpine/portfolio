import { Arcturus } from '@/icons/Arcturus';
import { Faire } from '@/icons/Faire';
import { Otto } from '@/icons/Otto';
import Link from 'next/link';

export const Experience = () => {
  return (
    <section
      className="min-h-dvh w-full md:px-16 md:pt-32 pt-20 px-4 pb-4 md:pb-16 flex flex-col"
      id="experience"
    >
      <div className="flex flex-col w-full gap-4 md:gap-8 flex-1 border border-secondary rounded-xl p-4 md:p-8">
        <h2 className="text-5xl md:text-7xl font-bold">Experience</h2>
        <p className="text-xl">
          Amazing opportunities that I gained during my time in the co-op
          program at the University of Waterloo.
        </p>
        <div className="flex md:flex-row flex-col gap-4 md:gap-8">
          <Card
            logo={
              <Otto className="text-onPrimary w-full" width={180} height={64} />
            }
            href="https://www.ottointelligence.co/"
          >
            <h3 className="text-4xl font-bold text-secondaryAccent">
              Full-Stack Engineer
            </h3>
            <h4 className="text-3xl font-bold">Otto Intelligence • 2022</h4>
            <ol className="text-tertiary text-lg">
              <li>
                • Full stack mobile-web application development using Next.js,
                TypeScript, React, Tailwind CSS, GraphQL, Prisma and PostgreSQL
              </li>
              <li>
                • Independently created time-sensitive financial feature sets on
                a weekly basis
              </li>
              <li>• Developed email, logging and Stripe integrations</li>
              <li>
                • Wrote robust integration and unit tests for GraphQL APIs
              </li>
            </ol>
          </Card>
          <Card
            logo={<Arcturus className="text-onPrimary w-full" />}
            href="https://www.arcturusnetworks.com/"
          >
            <h3 className="text-4xl font-bold text-secondaryAccent">
              Full-Stack Engineer
            </h3>
            <h4 className="text-3xl font-bold">Arcturus Networks • 2023</h4>
            <ol className="text-lg text-tertiary">
              <li>
                • Full stack web development for the Brinq Edge AI Machine
                Vision platform
              </li>
              <li>
                • RESTful Node.js API integration and updating alongside
                PostgreSQL and InfluxDB
              </li>
              <li>
                • Machine vision inference using C++, web sockets, and Docker
              </li>
              <li>
                • Highly efficient frontend interactions using React, Redux,
                D3.js, Recharts, and SocketIO
              </li>
            </ol>
          </Card>
          <Card
            href="https://www.faire.com/"
            logo={
              <Faire
                className="text-onPrimary w-full"
                width={312}
                height={39}
              />
            }
          >
            <h3 className="text-4xl font-bold text-secondaryAccent">
              Front-End Engineer
            </h3>
            <h4 className="text-3xl font-bold">Faire • 2023</h4>
            <ol className="text-tertiary text-lg">
              <li>
                • Part of the core platform team migrating Faire.com to Next.js
                as a frontend framework
              </li>
              <li>
                • Utilization of React Server Components and Partial
                Pre-rendering to greatly reduce load time and bundle size
              </li>
              <li>
                • Statistical analysis of these changes, in particular positive
                impacts to sign up rates
              </li>
              <li>
                • Low level JavaScript debugging and performance optimization,
                including Node.js and Next.js source code evaluation
              </li>
              <li>• Unit testing with Jest, end-to-end testing with Cypress</li>
              <li>
                • Working directly with product teams to teach new React
                patterns to create efficient server code
              </li>
            </ol>
          </Card>
        </div>
        <p className="w-full text-center text-secondary text-balance text-lg">
          Looking for a detailed resumé?{' '}
          <Link
            href="/Blair%20McAlpine%20Resume.pdf"
            className="underline text-onPrimary"
            target="_blank"
          >
            View it here
          </Link>
        </p>
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
    <div className="border-secondary rounded-xl border p-4 md:p-8 basis-1/3 flex flex-col gap-4">
      <a className="h-24 grid place-items-center" href={href} target="_blank">
        {logo}
      </a>
      {children}
    </div>
  );
};
