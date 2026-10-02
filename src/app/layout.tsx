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
        {/* High-Performance Chromatic Aberration Filter (No Turbulence/Displacement to ensure 60fps) */}
        <svg width="0" height="0" style={{ position: 'absolute', zIndex: -1, visibility: 'hidden' }}>
          <defs>
            <filter id="chromatic-glass" x="-20%" y="-20%" width="140%" height="140%">
              {/* Separate RGB channels and shift them slightly for the chromatic edge effect */}
              <feOffset dx="3" dy="0" in="SourceGraphic" result="red-shift" />
              <feOffset dx="-3" dy="0" in="SourceGraphic" result="blue-shift" />
              <feOffset dx="0" dy="0" in="SourceGraphic" result="green-shift" />
              
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" in="red-shift" result="red-only" />
              <feColorMatrix type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" in="green-shift" result="green-only" />
              <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" in="blue-shift" result="blue-only" />
              
              <feMerge result="chromatic">
                <feMergeNode in="red-only" />
                <feMergeNode in="green-only" />
                <feMergeNode in="blue-only" />
              </feMerge>
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
