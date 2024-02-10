import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex justify-between">
      <Image src="/logo.png" alt="Blair's Memoji" width={480} height={480} />
      <NavBar />
    </header>
  );
};
