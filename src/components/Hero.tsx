import { Age } from "@/components/Age";
import { GitHub } from "@/icons/GitHub";
import { LinkedIn } from "@/icons/LinkedIn";

export const Hero = () => {
  return (
    <section className="flex flex-col w-full h-full justify-center items-center gap-8">
      <div className="flex gap-8">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-7xl font-bold">
            Hi, I&apos;m{" "}
            <span className="text-accent-fade">Blair McAlpine</span>.
          </h1>
          <span className="text-4xl max-w-3xl text-left">
            I&apos;m a <Age /> year old full-stack web developer who loves to
            create elegant and efficient websites.
          </span>
          <div className="flex gap-3">
            <a href="https://www.github.com/blairmcalpine" target="_blank">
              <GitHub className="text-secondary" />
            </a>
            <a
              href="https://www.linkedin.com/in/blair-mcalpine/"
              target="_blank"
            >
              <LinkedIn className="text-secondary" />
            </a>
          </div>
        </div>
        <div className="h-96 w-96 rounded-xl border-secondary border" />
      </div>
      <button
        className="bg-accent rounded-lg w-fit p-3 text-xl font-semibold text-onAccent hover:bg-accent/80 transition-colors duration-300"
        style={{ boxShadow: "0px 0px 20px 0px rgb(var(--color-accent))" }}
      >
        What I&apos;ve Made -&gt;
      </button>
    </section>
  );
};
