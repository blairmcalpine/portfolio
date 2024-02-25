import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Metadata } from 'next';

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Home - Blair McAlpine',
};
