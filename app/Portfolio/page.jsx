"use client";

import React, { useLayoutEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgAdd } from "react-icons/cg";
import { FaUserGraduate } from "react-icons/fa";
import gsap from "gsap/all";

export default function Portfolio({ posts }) {
  useLayoutEffect(() => {
    gsap.to(".x", {
      scale: 1,

      duration: 1,
      ease: "power3.out",
    });
  });

  const items = [
    {
      title: "Nauka w szkole charakteryzacji",
      cardTitle:
        "Rozpoczęcie nauki w szkole charakteryzacji przy ulicy Leśmiana 31/23 w Waraszawie.",
      icon: React.createElement(FaUserGraduate),
      date: "2005 - 2008",
    },
    {
      title: "Praktyki w Teatrze Ochota",
      cardTitle:
        "Praktyki w Teatrze Ochota w Warszawie. Praktyki odbywały się w trakcie kończenia szkoły",
      icon: React.createElement(FaUserGraduate),
      date: "2005 - 2008",
    },
    {
      title: "Praca na planie filmowym",
      cardTitle: "Pierwsze zlecenie na planie filmowym",
      icon: React.createElement(FaUserGraduate),
      date: "2007 - 2008",
    },
    {
      title: "Praca na planie filmowym",
      cardTitle: "Pierwsze zlecenie na planie filmowym",
      icon: React.createElement(FaUserGraduate),
      date: "2007 - 2008",
    },
  ];

  return (
    <section className=" ">
      <div className=" bg-black opacity-[0.8]  absolute top-0 left-0 w-full h-[73px]"></div>
      <div className="flex flex-col items-center  relative min-h-screen px-5">
        <div className="absolute top-[-10px] left-0 portfolio_clip w-full h-full -z-30"></div>
        <div className="text-center relative mt-28">
          <h3 className=" text-3xl font-bold">Portfolio</h3>
          <div className="x absolute bottom-[-1px] scale-0 left-0 h-1/3 w-full opacity-70 bg-amber-400 -z-10"></div>
        </div>
        {/* <div className="absolute lg:bottom-[300px] bottom-0 left-0 w-[100px] h-[200px] lg:w-[250px] lg:h-[500px] flex flex-col">
          <div className=" bg-slate-200 w-1/2 h-1/4"></div>
          <div className=" bg-slate-100 w-1/2 h-1/4 self-end"></div>
          <div className=" bg-slate-300 w-1/2 h-1/4"></div>
          <div className=" bg-amber-100 bg-opacity-80 w-1/2 h-1/4 self-end"></div>
        </div> */}
        <div className="w-full mt-20">
          <VerticalTimeline>
            {items.map((element) => (
              <React.Fragment key={element.date}>
                <VerticalTimelineElement
                  visible="true"
                  contentStyle={{
                    background: "#f3f4f6",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                  }}
                  icon={element.icon}
                  date={element.date}
                  contentArrowStyle={{
                    borderRight: "1rem solid #f3f4f6",
                  }}
                >
                  <h1 className="font-bold text-xl">{element.title}</h1>
                  <p className="text-amber-700 font-semibold">
                    {element.cardTitle}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
