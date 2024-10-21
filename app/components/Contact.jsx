import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { BsTelephoneInbound } from "react-icons/bs";

function Kontakt() {
  const [state, handleSubmit] = useForm("xaygqzaz");

  return (
    <div className=" relative px-4 flex flex-col items-center justify-center">
      <div className=" mt-5" id="contact">
        <h2 className="text-2xl sm:text-3xl text-center font-bold">
          Napisz do mnie!ss
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-2 items w-96 m-auto"
        >
          <label className="font-semibold" htmlFor="email">
            Twój adres email
          </label>
          <input
            required
            maxLength={500}
            type="email"
            name="email"
            id="email"
            placeholder="Adres e-mail"
            className="border px-4 py-2 transition-all rounded-lg shadow-lg dark:placeholder:text-gray-700  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          />
          <label className="font-semibold mt-4" htmlFor="message">
            Treść wiadomośći
          </label>
          <textarea
            required
            maxLength={300}
            className="border px-4 pt-2 py-1 shadow-xl rounded-lg transition-all min-h-[250px]  dark:placeholder:text-gray-700  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
            name="message"
            id="message"
            placeholder="Twoja wiadomość"
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
          <button className="mt-4 mb-4  rounded-lg h-10  bg-gray-200 font-semiboldpy-2 dark:bg-gray-300 dark:text-black font-semibold">
            Wyślij
          </button>
        </form>
      </div>
    </div>
  );
}

export default Kontakt;
