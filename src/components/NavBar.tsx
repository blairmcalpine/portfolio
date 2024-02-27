"use client";

import { AnimatedLink } from '@/components/AnimatedLink';
import { Menu } from '@/icons/Menu';
import { usePathname } from 'next/navigation';
import { Dispatch, useCallback, useRef } from 'react';

type NavBarProps = {
  setDropdownOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const NavBar = ({ setDropdownOpen }: NavBarProps) => {
  return (
    <>
      <button
        className="md:hidden flex h-16 items-center"
        onClick={() => setDropdownOpen((o) => !o)}
      >
        <Menu />
      </button>
      <nav className="md:flex hidden gap-4 relative h-16 items-center">
        <NavButtons />
      </nav>
    </>
  );
};

type MobileNavBarProps = {
  dropdownOpen: boolean;
};

export const MobileNavBar = ({ dropdownOpen }: MobileNavBarProps) => {
  return (
    <nav
      className={`${
        dropdownOpen ? 'h-[145px] border-b' : 'h-0'
      } z-10 flex flex-col md:hidden overflow-hidden border-secondary items-center sticky top-16 bg-primary`}
      style={{
        transition: 'height 0.3s',
      }}
    >
      <NavButtons />
    </nav>
  );
};

const useUnderline = () => {
  const pathname = usePathname();
  const underlineRef = useRef<HTMLDivElement>(null);
  const navRef = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        const anchor = node.querySelector('a');
        if (!anchor) return;
        if (new URL(anchor.href).pathname === pathname) {
          underlineRef.current?.style.setProperty(
            'left',
            `${node.offsetLeft}px`
          );
          underlineRef.current?.style.setProperty(
            'width',
            `${node.offsetWidth}px`
          );
          underlineRef.current?.style.setProperty(
            'top',
            `${node.offsetTop + node.offsetHeight - 4}px`
          );
        }
      }
    },
    [pathname]
  );
  return { underlineRef, navRef };
};

const NavButtons = () => {
  const { underlineRef, navRef } = useUnderline();
  return (
    <>
      <div
        className="absolute h-1 bg-accent bottom-0 rounded-md w-0 left-0"
        ref={underlineRef}
        style={{
          transition: 'left 400ms, width 400ms',
        }}
      />
      <div ref={navRef} className="md:h-full items-center flex">
        <AnimatedLink
          href="/"
          className="hover:bg-secondary rounded-md p-1 transition-colors text-lg"
        >
          Home
        </AnimatedLink>
      </div>
      <div ref={navRef} className="md:h-full items-center flex">
        <AnimatedLink
          href="/about"
          className="hover:bg-secondary rounded-md p-1 transition-colors text-lg"
        >
          About
        </AnimatedLink>
      </div>
      <div ref={navRef} className="md:h-full items-center flex">
        <AnimatedLink
          href="/projects"
          className="hover:bg-secondary rounded-md p-1 transition-colors text-lg"
        >
          Projects
        </AnimatedLink>
      </div>
      <div ref={navRef} className="md:h-full items-center flex">
        <AnimatedLink
          href="/contact"
          className="hover:bg-secondary rounded-md p-1 transition-colors text-lg"
        >
          Contact
        </AnimatedLink>
      </div>
    </>
  );
};
