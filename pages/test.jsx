import React from "react";
import { client } from "@/lib/contentful";

function test({ space }) {
  return (
    <section className="flex flex-col items-center">
      <div className="relative text-center mt-20 mb-20">
        <h3 className="text-3xl ">Aktualności</h3>
        <div className="absolute inset-0 h-1/2 w-full bg-amber-400 -z-10">
          s
        </div>
      </div>
      <div className="flex flex-col gap-y-7 items-center">
        <p className="text-sm">27.04.23</p>
        <p className="text-base">Premiera 4 sezonu</p>
        <p className="text-xl">Twoja twarz brzmi znajomo</p>
      </div>
      <div className="flex w-[80%] h-[500px] bg-slate-700 ">s</div>
    </section>
  );
}

export const getStaticProps = async () => {
  const response = await client.getEntries();
  const pro = response.items[0].fields.nazwaProjektu;

  return {
    props: {
      space: pro,
    },
  };
};

export default test;
