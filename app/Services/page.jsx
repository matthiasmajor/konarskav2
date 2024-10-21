"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/data/data";
import Showcase from "@/components/Showcase/Showcase";

function Services() {
  return (
    <section>
      <section className=" bg-black opacity-[0.8]  absolute top-0 left-0 w-full h-[73px]">
        {" "}
      </section>
      <div className="mt-20 sm:mt-0 ">
        <Showcase />
      </div>
    </section>
  );
}

export default Services;
