'use client';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type ViewTransition = {
  ready: Promise<void>;
};

declare global {
  interface Document {
    startViewTransition(callback: () => void): ViewTransition;
  }
}

type LinkProps = NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const navOrder = ['/', '/about', '/projects', '/contact'];

export const AnimatedLink = (props: LinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (!document.startViewTransition || prefersReducedMotion) {
      props.onClick?.(e);
      return;
    } else {
      e.preventDefault();
      props.onClick?.(e);
      const slideLeft =
        navOrder.indexOf(pathname) < navOrder.indexOf(props.href.toString());
      const transition = document.startViewTransition(() => {
        router.push(props.href.toString());
      });
      transition.ready.then(slide(slideLeft));
    }
  };

  return (
    <NextLink onClick={handleClick} {...props}>
      {props.children}
    </NextLink>
  );
};

const slide = (left: boolean) => () => {
  document.documentElement.animate(
    [
      {
        transform: 'translateX(0%)',
      },
      {
        transform: `translateX(${left ? '-' : ''}100%)`,
      },
    ],
    {
      duration: 400,
      easing: 'ease',
      pseudoElement: '::view-transition-old(page)',
    }
  );
  document.documentElement.animate(
    [
      {
        transform: `translateX(${left ? '' : '-'}100%)`,
      },
      {
        transform: 'translateX(0%)',
      },
    ],
    {
      duration: 400,
      easing: 'ease',
      pseudoElement: '::view-transition-new(page)',
    }
  );
};
