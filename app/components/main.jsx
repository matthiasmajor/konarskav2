"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GetStaticProps } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

export function Main() {
  const tester = React.createRef();

  useEffect(() => {
    gsap.to(".a", {
      opacity: 1,
      y: 0,
      duration: 2,
      stagger: 1,
      ease: "power3.out",
    });
    gsap.to(".c", {
      delay: 2,
      opacity: 1,
      y: 0,
      duration: 2,
      stagger: 1,
      ease: "power3.out",
    });
  });

  return (
    <div className=" -z-10 flex flex-col items-center justify-center w-full h-screen overflow-hidden ">
      <div className="absolute top-0 left-0 w-full -z-10 filtr  ">
        <div className="bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full min-h-screen flex items-center bg-cover justify-center bg-center"></div>
      </div>
      <div className="absolute gap-y-4 top-0 left-0 w-full h-screen flex flex-col items-center justify-center ">
        <h2
          ref={tester}
          id="let"
          className="a text-white text-5xl font-light leading-20 font-cormo translate-y-10 opacity-0"
        >
          <em className=" joanna">Joanna Konarska</em>
        </h2>
        <h1 className="a text-[#F4CBC6] lg:text-7xl sm:text-4xl text-base font-bold translate-y-10 opacity-0 mb-5">
          Twoja charakteryzatorka.
        </h1>
        <div className="flex gap-x-8 ">
          <Link
            className="hover:scale-105 hover:shadow-xl transition-all"
            href="Kontakt"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="c opacity-0 bg-black text-white py-2 px-6 font-semibold rounded-full bg-opacity-40  text-xs sm:text-sm "
            >
              Skontakuj się
            </motion.button>
          </Link>
          <Link
            className="hover:scale-105 hover:shadow-xl transition-all"
            href="Portfolio"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="c opacity-0 py-2 bg-amber-400 text-gray-800 px-6 font-semibold rounded-full   text-xs sm:text-sm  "
            >
              Portfolio
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
