"use client";

import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Cormorant } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });
const cormorant = Cormorant({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gray-50`}>
        <header>
          <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
        </header>
        {children}
        <Footer activeLink={activeLink} setActiveLink={setActiveLink} />
      </body>
    </html>
  );
}
