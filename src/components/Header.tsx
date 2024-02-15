"use client";

import { MobileNavBar, NavBar } from "@/components/NavBar";
import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const BebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center border-b border-secondary px-4">
        <div className="basis-1/3 flex items-center">
          <p className={`text-40 font-extrabold`}>BLAIR</p>
        </div>
        <div className="basis-1/3 grid place-items-center">
          <Image
            src="/logo.png"
            // className="hidden md:inline"
            alt="Blair's Memoji"
            width={38.4}
            height={48}
          />
        </div>
        <div className="basis-1/3 flex justify-end items-center">
          <NavBar setDropdownOpen={setDropdownOpen} />
        </div>
      </header>
      <MobileNavBar dropdownOpen={dropdownOpen} />
    </>
  );
};
