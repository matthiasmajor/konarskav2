"use client";

import React, { useLayoutEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function Quote() {
  const phrase =
    "Jestem charakteryzatorką z 10-letnim doświadczeniem – tworzę i kreuję rzeczywistość taką, jaką lubię. Zawodowe wyzwania to moja codzienność. Współpracuję z najlepszymi w Polsce: największymi stacjami telewizyjnymi, planami filmowymi, reklamami oraz teatrami. Zobacz i przekonaj się sam, na co mnie stać!";

  const letter = useRef(null);
  const isInView = useInView(letter);

  const slideUp = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    open: (index) => ({
      y: "0%",
      opacity: 1,
      transition: { duration: 0.5, delay: 0.02 * index },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative mt-[100px]  mb-[100px] px-3 sm:px-0 sm:mb-[200px] ">
      {/* <div class="absolute rotate-6 bg-amber-200 w-12 h-6 bottom-10 right-8 md:w-24 md:h-12 md:bottom-16 md:right-1/2 opacity-40"></div>
      <div class="absolute -rotate-6 bg-amber-200 w-12 h-6 bottom-10 right-8 md:w-18 md:h-9 md:bottom-12 md:right-1/3 opacity-30"></div> */}
      <div class="absolute  bg-gray-100 w-full top-1/2 -translate-y-1/2 left-0 h-28"></div>
      <p
        ref={letter}
        className="text-center font-bold text-base mx-auto max-w-[1000px] gap-2 text-gray-800"
      >
        {phrase.split(" ").map((words, index) => {
          return (
            <span key={index} className="mr-3 leading-tight  ">
              <motion.span
                variants={slideUp}
                className="inline-flex relative overflow-hidden text-sm sm:text-base"
                custom={index}
                key={index}
                animate={isInView ? "open" : "closed"}
                initial="initial"
                viewport={{
                  once: true,
                }}
              >
                {words}
              </motion.span>
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Quote;
