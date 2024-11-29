import React, { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Data } from "../data/data";

export function Gallery() {
  const triggerArray = ["1", "2", "3", "4", "5", "6"];
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    let ctx = gsap.context(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".photo",
            scrub: true,
          },
        })
        .to(".photo", {
          stagger: 0.2,
          y: -100,
          scrub: true,
          delay: 0.5,
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className=" relative px-10  ">
      <section className=" grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 grid relative ">
        {Data.map((item, index) => (
          <Image
            key={index}
            className="photo max-h-48 lg:max-h-none object-cover shadow-[7px_7px_6px_3px_rgba(0,0,0,0.6)]"
            src={item.url}
            alt="zdjecie"
          />
        ))}
      </section>
    </div>
  );
}

export default Gallery;
