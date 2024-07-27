"use client";

import { AnimatedLink } from '@/components/AnimatedLink';
import { MobileNavBar, NavBar } from "@/components/NavBar";
import Image from "next/image";
import { useState } from "react";


export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-secondary bg-primary px-4 md:px-6">
        <div className="flex basis-1/3 items-center">
          <AnimatedLink href="/" className="text-40 font-extrabold">
            {'<blair />'}
          </AnimatedLink>
        </div>
        <div className="grid basis-1/3 place-items-center">
          <Image src="/logo.png" alt="Blair's Memoji" width={38} height={48} />
        </div>
        <div className="flex basis-1/3 items-center justify-end">
          <NavBar setDropdownOpen={setDropdownOpen} />
        </div>
      </header>
      <MobileNavBar dropdownOpen={dropdownOpen} />
    </>
  );
};
