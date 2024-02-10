"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef } from "react";

export const NavBar = () => {
  const pathname = usePathname();
  const underlineRef = useRef<HTMLDivElement>(null);
  const navRef = useCallback(
    (node: HTMLElement) => {
      if (node) {
        node.querySelectorAll("a").forEach((a) => {
          console.log(a.href, pathname);
          if (new URL(a.href).pathname === pathname) {
            underlineRef.current?.style.setProperty(
              "left",
              `${a.offsetLeft}px`
            );
            underlineRef.current?.style.setProperty(
              "width",
              `${a.offsetWidth}px`
            );
          }
        });
      }
    },
    [pathname]
  );
  return (
    <nav className="flex gap-4 relative" ref={navRef}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
      <div
        className="absolute w-10 h-1 bg-white"
        ref={underlineRef}
        style={{
          transition: "left 0.3s, width 0.3s",
        }}
      />
    </nav>
  );
};
