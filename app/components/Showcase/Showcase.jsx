"use client";

import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import services from "../../../public/assets/Lottie/Services.json";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const projects = [
  {
    title: "Peruki na zamówienie",
    src: "grid_1.jpg",
  },
  {
    title: "Zarost na zamowienie",
    src: "grid_2.jpg",
  },
  {
    title: "Makijaż ślubny i okazyjny",
    src: "grid_3.jpg",
  },
  {
    title: "Makijaz pernamentny",
    src: "grid_4.jpg",
  },
];
const Showcase = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const fotka = useRef(null);

  const Colors = ["amber", "rose", "zinc", "slate"];

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(fotka.current, {
      scrollTrigger: {
        trigger: container.current,

        start: "top center",
        end: "bottom 95%",
        scrub: true,
        toggleActions: "start pause reverse reverse",
      },
      y: 50,
      opacity: 1,
    });
  });

  return (
    <div className="w-full min-h-screen relative flex lg:flex-row  lg:justify-around items-center justify-center mt-[-90px] sm:mt-0 ">
      <div className=" flex gap-x-10">
        <div className="relative flex flex-col  justify-center  gap-y-8 font-bold lg:pr-20 lg:border-r-2 border-zinc-300 lg:w-[500px] pl-6 ">
          <div>
            <h4 className="relative text-4xl mb-4 tracking-wide text-gray-700 after:flex after:h-[100px] after:w-[100px] after:rounded-xl after:rotate-45 after:bg-amber-400/[1] after:-z-20 after:absolute after:top-[-25px] after:left-[-30px]">
              Zakres usług
            </h4>
            <p className="mt-2 text-gray-700">
              Potrzebujesz wizażystki na event?<br></br> Zobacz co mogę Ci
              zaoferować.
            </p>
          </div>
          {projects.map((project, index) => {
            return (
              <div
                className="flex flex-col px-2"
                key={index}
                onMouseOver={() => {
                  setSelectedProject(index);
                }}
              >
                <div className="flex items-center gap-x-4">
                  <IoMdCheckmarkCircleOutline style={{ scale: "1.5" }} />
                  <h2 className=" text-gray-700 pb-1 text-xl  ">
                    {project.title}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="relative hidden   sm:w-[300px] lg:w-[500px] sm:flex  ">
            <Lottie animationData={services} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
