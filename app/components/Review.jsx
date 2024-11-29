import React, { useLayoutEffect } from "react";
import { BsCheck2All } from "react-icons/bs";
import gsap from "gsap";
import { useRef } from "react";
import { BsCheck2 } from "react-icons/bs";
import testphoto from "../../public/assets/Images/Konarska_Test.png";
import test from "../../l/test";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";

function Review() {
  const Review = useRef(null);
  const ReviewContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".lo", {
      scrollTrigger: {
        trigger: ".x",
        start: "top 50%",
        scrub: true,
      },
      scale: 1,
      duration: 3,
      ease: "power3.out",
    });

    let ctx = gsap.context(() => {
      gsap.from(Review.current, {
        scrollTrigger: {
          trigger: ReviewContainer.current,
          start: "top 45%",
        },
        xPercent: 0,
        opacity: 0,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ReviewContainer}
      className="relative mb-20 px-4 bg-amber-400  py-20"
    >
      <div className="absolute bottom-[-70px] left-[30px] w-16 h-52 rotate-45 -z-0 bg-gray-50 rounded-xl"></div>
      {/*  <div className="absolute top-[-70px] right-[40px] w-16 h-52 rotate-45 -z-0 bg-gray-50 rounded-xl"></div> */}
      {/* <div className="none sm:absolute top-0 left-0 w-full h-full review_clipper bg-white "></div> */}
      <div className="relative max-w-fit mx-auto">
        <h2 className=" text-center text-2xl md:text-3xl xl:text-4xl text-slate-800 font-bold z-20">
          Recenzje
        </h2>
        <div className="lo absolute bottom-[-1px] scale-0 left-0 h-1/3 w-full opacity-70 bg-amber-400 -z-10"></div>
      </div>
      <div
        ref={Review}
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1400px] gap-x-10 gap-y-5 mx-auto  "
      >
        <div className="relative flex flex-col gap-y-5 px-5 py-10 shadow-[7px_7px_2px_3px_rgba(0,0,0,0.3)] rounded-md bg-amber-300 border-solid border-2 border-amber justify-center hover:scale-105 transition-all">
          <div className="absolute top-0 left-0 w-full h-full sm:review_clip -z-20"></div>
          <div>
            <BsCheck2 className="scale-150" />
          </div>
          <div className=" text-sm sm:text-base font-medium text-gray-800">
            Pani Joanna to wybitna profesjonalistka, współpracowanie z nią to
            czysta przyjemność. Dziekuje jej za tyle lat nie nagannej współpracy{" "}
          </div>
          <div className="mt-2 text-slate-800 font-bold ">
            Joanna W, kierownik artystyczny
          </div>
        </div>
        <div className="flex flex-col gap-y-5 px-5 py-5 shadow-[7px_7px_2px_3px_rgba(0,0,0,0.3)] rounded-md bg-amber-300 border-solid border-2 border-amber justify-center hover:scale-105 transition-all">
          <div>
            <BsCheck2 className="scale-150" />
          </div>
          <div className=" text-sm sm:text-base font-medium text-gray-800">
            Pani Joanna to wybitna profesjonalistka, współpracowanie z nią to
            czysta przyjemność. Dziekuje jej za tyle lat nie nagannej współpracy{" "}
          </div>
          <div className="font-bold text-slate-800">
            Joanna W, kierownik artystyczny
          </div>
        </div>
        <div className="relative flex flex-col gap-y-5 px-5 py-5  shadow-[7px_7px_2px_3px_rgba(0,0,0,0.3)] rounded-md bg-amber-300 border-solid border-2 border-amber justify-center hover:scale-105 transition-all">
          <div>
            <BsCheck2 className="scale-150" />
          </div>
          <div className=" text-sm sm:text-base font-medium text-gray-800">
            Pani Joanna to wybitna profesjonalistka, współpracowanie z nią to
            czysta przyjemność. Dziekuje jej za tyle lat nie nagannej współpracy{" "}
          </div>
          <div className="mt-2 text-slate-800 font-bold">
            Joanna W, kierownik artystyczny
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
