"use client";

import React from "react";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { BsTelephoneInbound } from "react-icons/bs";
import Lottie from "lottie-react";
import kontakt_konarska from "../.././public/assets/Lottie/Kontakt_Konarska.json";

function Kontakt() {
  const [state, handleSubmit] = useForm("xaygqzaz");
  W;
  return (
    <section className="">
      <div className=" bg-black opacity-[0.8]  absolute top-0 left-0 w-full h-[73px]"></div>
      <div className="absolute left-0  bottom-[-200px] -z-30"></div>
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
      <div className="w-full min-h-screen flex justify-evenly items-center ">
        <div className=" h-full relative px-4 flex flex-col items-center justify-center">
          <div className=" mt-5" id="contact">
            <div className="relative w-max mx-auto ">
              <h2 className="text-2xl sm:text-3xl text-center font-bold ">
                Napisz do mnie!
              </h2>
              <div className="absolute bottom-[-1px] left-0 h-1/3 w-full opacity-70 bg-amber-400 -z-10"></div>
            </div>
            <div className="flex flex-col items-center ">
              <p>lub skontaktuj się telefonicznie</p>
              <div className="mt-2 inline-flex items-center gap-x-2 font-semibold">
                <BsTelephoneInbound /> 542 123 456
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-2 items w-96 m-auto"
            >
              <label className="font-semibold " htmlFor="email">
                Twój adres email
              </label>
              <input
                required
                maxLength={500}
                type="email"
                name="email"
                id="email"
                placeholder="Adres e-mail"
                className="border px-4 py-2 transition-all rounded-lg shadow-lg dark:placeholder:text-gray-700  dar dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
              />
              <label className="font-semibold mt-4 " htmlFor="message">
                Treść wiadomośći
              </label>
              <textarea
                required
                maxLength={300}
                className="border px-4 pt-2 py-1 shadow-xl rounded-lg transition-all min-h-[250px]  dark:placeholder:text-gray-700  dar dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
                name="message"
                id="message"
                placeholder="Your message"
              />
              <ValidationError
                prefix="message"
                field="message"
                state={state.errors}
              />
              {state.errors && <p>Wiadomość za krótka.</p>}
              {state.succeeded ? (
                <p className="text-xs font-normal text-green-600 text-center">
                  Dziękuje za wiadomość.
                </p>
              ) : null}
              <button className="mt-4 mb-4  rounded-lg h-10  bg-gray-200  font-semiboldpy-2 dark:bg-gray-300 dark:text-black font-semibold">
                Wyślij
              </button>
            </form>
          </div>
        </div>
        <Lottie
          animationData={kontakt_konarska}
          loop={true}
          className="hidden lg:block"
        />
      </div>
    </section>
  );
}

export default Kontakt;
