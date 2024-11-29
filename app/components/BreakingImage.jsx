import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Quote from "./Quote";
import { useRef } from "react";

function BreakingImage() {
  const container = useRef(null);

  const photoRef = useRef(null);

  const overlay = useRef(null);

  const text = useRef(null);

  const phrase = "Poznaj świat mojej wyobraźni.";

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(photoRef.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          end: "top 30%",

          scrub: true,
          /* once: true, */
        },
        opacity: 0,
        duration: 2,
      });

      gsap.to(photoRef.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 30%",
          end: "bottom top",

          scrub: true,
          pin: true,
          /* once: true, */
          toggleActions: "play pause resume none",
        },
        scale: 7,
      });

      gsap.to(text.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 30%",
          end: "bottom top",

          scrub: true,
          /* once: true, */

          toggleActions: "play pause resume none",
        },
        scale: 3,
      });

      gsap.to(overlay.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 30%",
          end: "bottom top",

          scrub: true,
          /* once: true, */

          toggleActions: "play pause resume none",
        },
        opacity: 0.9,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={container}
      className="relative w-full h-[400px] overflow-hidden flex justify-center items-center  mb-0 sm:mb-[200px]"
    >
      <div
        ref={photoRef}
        className="absolute opacity-1 scale-100 -z-10 bg-[url('https://images.unsplash.com/photo-1583241800324-2b3b0683a1b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] w-full h-full flex bg-cover inset-0 "
      >
        <div
          ref={overlay}
          className="bg-black w-full h-full opacity-[0.2]"
        ></div>
      </div>
      <p
        ref={text}
        className="font-bold sm:text-3xl text-gray-50 opacity-1 text-center text-base "
      >
        Poznaj świat mojej wyobraźni.
      </p>
    </div>
  );
}

export default BreakingImage;
