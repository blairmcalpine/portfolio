import { Age } from "@/components/Age";
import { AnimatedLink } from '@/components/AnimatedLink';
import { GitHub } from '@/icons/GitHub';
import { LinkedIn } from '@/icons/LinkedIn';

export const Hero = () => {
  return (
    <section className="flex flex-col w-full h-[calc(100dvh-4rem)] justify-center items-center gap-8 px-4">
      <div className="flex gap-8">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-7xl font-bold">
            Hi, I&apos;m{' '}
            <span className="text-accent-fade">Blair McAlpine</span>.
          </h1>
          <span className="text-4xl max-w-3xl text-left">
            I&apos;m a <Age /> year old full-stack web developer who loves to
            create elegant and efficient websites.
          </span>
          <div className="flex gap-3">
            <a href="https://www.github.com/blairmcalpine" target="_blank">
              <GitHub
                className="text-secondary hover:text-onPrimary transition-colors"
                width={36}
                height={36}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/blair-mcalpine/"
              target="_blank"
            >
              <LinkedIn
                className="text-secondary hover:text-onPrimary transition-colors"
                width={36}
                height={36}
              />
            </a>
          </div>
        </div>
        <div className="w-96 h-96 hidden md:block rounded-xl border-secondary border" />
      </div>
      <div className="flex gap-4">
        <AnimatedLink
          className="border border-onPrimary rounded-lg w-fit px-4 py-2 text-xl transition-shadow hover:shadow-onPrimary"
          href="/contact"
        >
          Contact Me
        </AnimatedLink>
        <a
          className="bg-accent rounded-lg w-fit px-4 py-2 text-xl text-onAccent transition-shadow hover:shadow-accent"
          href="#experience"
        >
          What I&apos;ve Done ↓
        </a>
      </div>
    </section>
  );
};
