import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScrolling from "./components/SmoothScrolling";

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-lato",
  subsets: ["latin"],
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
        className={`${headingFont.variable} ${bodyFont.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <SmoothScrolling>
          <Header />
          <main id="page-wrapper" className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
