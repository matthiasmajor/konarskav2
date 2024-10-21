import react, { useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as contentful from "contentful";

gsap.registerPlugin(ScrollTrigger);

function AboutSecond() {
  useEffect(() => {
    gsap.to(".d", {
      scrollTrigger: {
        trigger: ".e",

        start: "top 70%",
      },
      opacity: 1,
      stagger: 1,
      y: 0,
    });
  }, []);
  return (
    <section className="relative h-screen w-full">
      <div className="absolute top-0 left-0 -z-10 h-screen w-full bg-[#FFC800]  second"></div>
      <div className="sticky flex flex-col py-6 items-center px-3 z-10">
        <h3 className="font-bold  text-3xl sm:text-5xl text-[#2D2B2B]">
          Dlaczego jestem dobra
        </h3>
        <h3 className="font-bold  text-3xl sm:text-5xl text-[#902D2D] sm:ml-[300px] ">
          w tym co robię?
        </h3>
      </div>
      <div className="e flex flex-col gap-y-8 sm:flex-row items-center justify-center mt-20 gap-x-10">
        <div className="d  max-w-[300px] sm:max-w-[400px] opacity-0 translate-y-20">
          <div className="  bg-[url('https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-center h-64 sm:h-96 w-full bg-cover">
            <div className="text-white  text-center text-xs sm:text-lg font-bold px-6 py-6 bg-black bg-opacity-50 ">
              Ponad 10 lat doświadczenia w branży.
            </div>
          </div>
        </div>
        <div className="d  max-w-[300px] sm:max-w-[400px] opacity-0 translate-y-20">
          <div className="flex items-center bg-[url('https://images.unsplash.com/photo-1594647210801-5124307f3d51?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-64 sm:h-96 w-full">
            <div className="text-white text-center text-xs sm:text-lg  font-bold px-6 py-6 bg-black bg-opacity-50 ">
              Współpraca z największymi stacjami telewizyjnymi.
            </div>
          </div>
        </div>
        <div className="d w-[400px]  max-w-[300px] sm:max-w-[400px] opacity-0 translate-y-20">
          <div className="flex items-end bg-[url('https://images.unsplash.com/photo-1626895872564-b691b6877b83?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-64 sm:h-96 w-full">
            <div className="text-white text-center text-xs  sm:text-lg font-bold px-6 py-6 bg-black bg-opacity-50 ">
              Zaangażowanie i pasja.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSecond;
