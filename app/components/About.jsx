import React from "react";
import garderoba from "../../public/assets/Images/konarska_garderoba.png";
import Image from "next/image";

function About() {
  return (
    <section className="relative h-screen ">
      <div className="absolute top-0 left-0 -z-10 h-screen w-full bg-[#FFC800]  about"></div>
      <div className="absolute top-2 left-8 -z-9 h-screen w-full bg-[#ffc800ae]  about"></div>
      <div className="absolute top-4 left-16 -z-8 h-screen w-full bg-[#ffc8005a]  about"></div>
      <div className="sticky flex flex-col py-6 items-center z-10">
        <h3 className="font-bold text-5xl text-[#2D2B2B]">
          Dlaczego jestem dobra
        </h3>
        <h3 className="font-bold text-5xl text-[#902D2D] ml-[300px] ">
          w tym co robię?
        </h3>
      </div>

      <div className="sticky px-20 py-20 z-10 ">
        <ul className="text-[#1E1A45] font-semibold flex flex-col text-4xl gap-y-7 ">
          <li>- Ponad 10 lat doświadczenia w branży</li>
          <li>- Współpraca z największymi stacjami telewizyjnymi.</li>
          <li>- Wykształcenie w kierunku zawodu.</li>
          <li>- Zaangażowanie i pasja. </li>
        </ul>
      </div>
      <div className="absolute bottom-[0px] right-[100px] overflow-hidden">
        <div className="relative">
          <Image
            className="sticky mt-4 w-[600px] h-auto z-10"
            src={garderoba}
            alt="garderoba"
          />
          <div className="absolute top-[50px] right-10 bg-[#D9D9D9] w-[300px] h-[300px] rounded-full -z-4"></div>
          <div className="absolute top-[40px] right-10 bg-[#d9d9d91c] w-[300px] h-[300px] rounded-full -z-4"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
