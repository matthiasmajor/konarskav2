import React from "react";
import Image from "next/image";

function Aktualnosci_sub({ data, projectName, photos }) {
  return (
    <div className="w-full justify-center flex flex-col items-center sm:mb-12 ">
      <div className="flex flex-col gap-y-7 items-center">
        <p className="text-lg font-semibold text-gray-600">{data}</p>

        <p className="sm:text-xl text-base font-semibold text-amber-900 mb-10 text-center">
          {projectName}
        </p>
      </div>
      <div className="relative flex flex-col sm:flex-row w-[80%] sm:h-[350px] lg:h-[500px] justify-center gap-x-5 sm:mt-[50px] mt-[20px] gap-y-5">
        <div className="bg-amber-400 bg-opacity-40 absolute bottom-[-40px] self-center w-1/2 h-[2px] sm:hidden"></div>
        {photos.map((item) => (
          <div className="sm:w-1/3 sm:h-auto w-full h-[300px] ">
            <Image
              className="w-full h-full  object-cover rounded-lg border-4 border-black border-opacity-10"
              width={500}
              height={500}
              src={`https:${item.fields.file.url}`}
              priority={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aktualnosci_sub;
