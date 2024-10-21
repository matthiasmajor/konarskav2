import react, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const Wspolpraca = () => {
  const section = useRef(null);
  const element = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hej",
          start: "top center",
        },
      });
      const tls = gsap.timeline({
        scrollTrigger: {
          trigger: ".nara",
          start: "top center",
        },
      });
      tl.to(".f", { opacity: 1, x: 0 }).to(".g", { opacity: 1, x: 0 });
      tls.to(".h", { opacity: 1, y: 0 }).to(".i", { opacity: 1, y: 0 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-[500px] sm:mt-0 mb-28 ">
      <div className="mx-auto px-4 py-2 w-fit">
        <div></div>
        <h3 className="text-4xl font-bold text-black text-center">
          Współpraca
        </h3>
      </div>
      <div className="max-w-3xl mt-20 mx-auto">
        <div className="hej w-full mt-8 flex items-center justify-around ">
          <div className="f opacity-0 -translate-x-20">
            <Image
              className=" w-[200px] sm:w-[300px] object-contain aspect-[4/3]"
              src="/assets/Images/Polsat_2021_gradient.svg.png"
              alt="image"
              width={200}
              height={200}
            />
          </div>
          <div className="g opacity-0 translate-x-20">
            <Image
              className=" w-[200px] sm:w-[300px] object-contain aspect-[4/3]"
              src="/assets/Images/TVP_logo.svg.png"
              alt="image"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="nara w-full mt-20 flex items-center justify-around  ">
          <div className="h opacity-0 translate-y-40">
            <Image
              className="w-[200px] sm:w-[300px] object-contain aspect-[4/3]"
              src="/assets/Images/teatr_kamienica.png"
              alt="image"
              width={200}
              height={200}
            />
          </div>
          <div className="i opacity-0 -translate-y-40">
            <Image
              className=" w-[200px] sm:w-[300px] object-contain aspect-[4/3]"
              src="/assets/Images/teatr-narodowy.png"
              alt="image"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wspolpraca;
