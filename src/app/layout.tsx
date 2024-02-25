import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-primary text-onPrimary min-h-dvh`}
      >
        <Header />
        <div className="page">{children}</div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s - Blair McAlpine',
    default: 'Blair McAlpine',
  },
  description:
    'Blair McAlpine - A full-stack developer who loves to create elegant and efficient websites.',
  applicationName: 'Blair McAlpine',
  keywords: ['Portfolio', 'Developer', 'Web', 'Full-Stack', 'Blair McAlpine'],
  category: 'Portfolio',
  authors: [
    { name: 'Blair McAlpine', url: 'https://github.com/blairmcalpine' },
  ],
  creator: 'Blair McAlpine',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  openGraph: {
    title: 'Blair McAlpine',
    description:
      'Blair McAlpine - A full-stack developer who loves to create elegant and efficient websites.',
    siteName: 'Blair McAlpine',
    type: 'website',
    images: '/logo.png',
  },
  metadataBase: new URL('https://blair.dev'),
};
