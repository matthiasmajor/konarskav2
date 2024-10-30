import React, { useLayoutEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function Quote() {
  const phrase =
    "Jestem charakteryzatorką już 10 lat, tworzę i kreauje rzeczywistość, taką jaką lubie. Zawodowe wyzwania są moją codziennością. Wspólpracuje z najlepszymi w Polsce, największe stacje telewizyjne, plany filmowe, reklamy, spektakle w Teatrach. Zobacz i przekonaj się sam na co mnie stać.";

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
    <div className="sm:mt-[100px]  mt-[200px] px-3 sm:px-0 mb-[300px] ">
      <p
        ref={letter}
        className="text-center font-bold text-base mx-auto max-w-[1000px] gap-2 text-gray-800 py-6 "
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
