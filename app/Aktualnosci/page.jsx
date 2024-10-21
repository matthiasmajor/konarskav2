import React from "react";
import { client } from "@/lib/contentful";
import Aktualnosci_sub from "@/components/Aktualnosci_sub";
import { motion } from "framer-motion";

async function Aktualnosci({ space }) {
  const staticData = await client.getEntries();
  const qData = staticData.items;

  return (
    <section className="flex flex-col items-center justify-center ">
      <div className=" bg-black opacity-[0.8] absolute top-0 left-0 w-full h-[73px]"></div>
      <div className="hidden absolute lg:flex flex-col justify-between top-[100px] left-[200px] w-[100px] h-[150px] mt-[100px]">
        <div className="bg-[#FFE7E4] h-[30px] w-[30px] "></div>
        <div className="bg-[#FFF2C2] h-[30px] w-[30px] self-end hidden sm:block "></div>
        <div className="bg-[#FFE7E4] h-[30px] w-[30px] "></div>
      </div>
      <div className="absolute flex flex-col justify-between top-0 right-[200px] w-[100px] h-[150px] mt-[100px]">
        <div className="bg-[#FFE7E4] h-[30px] w-[30px] self-end"></div>
        <div className="bg-[#FFF2C2] h-[30px] w-[30px]   hidden sm:block"></div>
        <div className="bg-[#FFE7E4] h-[30px] w-[30px] self-end"></div>
      </div>
      <div className="relative text-center mt-20 mb-20">
        <h3 className="text-3xl font-semibold ">Aktualności</h3>
        <div className="absolute bottom-[-1px] left-0 h-1/3 w-full opacity-70 bg-amber-400 -z-10"></div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-y-20">
        {qData.map((item) => (
          <Aktualnosci_sub
            data={item.fields.data}
            projectName={item.fields.nazwaProjektu}
            photos={item.fields.zdjecia}
          />
        ))}
      </div>
    </section>
  );
}

export default Aktualnosci;
