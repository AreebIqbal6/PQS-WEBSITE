import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScrolling from "./components/SmoothScrolling";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Precision Quality Services | Textile Consultancy",
  description: "Textile Training, Consultancy, and Troubleshooting",
  icons: {
    icon: '/favicon.png?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${lato.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        {/* SVG Filters for Liquid Glass Refraction & Chromatic Aberration */}
        <svg width="0" height="0" style={{ position: 'absolute', zIndex: -1, visibility: 'hidden' }}>
          <defs>
            <filter id="liquid-glass-filter" x="-20%" y="-20%" width="140%" height="140%">
              {/* Generate liquid noise */}
              <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" in="noise" result="coloredNoise" />
              
              {/* Warp the background (refraction) */}
              <feDisplacementMap in="SourceGraphic" in2="coloredNoise" scale="35" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              
              {/* Chromatic aberration split */}
              <feOffset dx="4" dy="0" in="displaced" result="red-shift" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" in="red-shift" result="red-only" />
              
              <feOffset dx="-4" dy="0" in="displaced" result="blue-shift" />
              <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" in="blue-shift" result="blue-only" />
              
              <feMerge result="chromatic">
                <feMergeNode in="red-only" />
                <feMergeNode in="displaced" />
                <feMergeNode in="blue-only" />
              </feMerge>

              {/* Blur the refracted result */}
              <feGaussianBlur in="chromatic" stdDeviation="15" result="blurred" />
            </filter>
          </defs>
        </svg>

        <SmoothScrolling>
          <Header />
          <main id="page-wrapper" className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
