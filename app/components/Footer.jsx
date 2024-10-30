"use client";

import React, { useState } from "react";
import { NaviList } from "@/data/data";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import useActiveLink from "@/Hooks/useActiveLink";

function Footer({ activeLink, setActiveLink }) {
  return (
    <div className=" flex flex-col sm:grid sm:grid-cols-2 sm:grid-flow-row py-[50px] px-20 bg-slate-100  ">
      <div>
        <h4 className="row-start-1 text-xl font-bold text-slate-800">
          Joanna <span className="mt-2 text-amber-500">Konarska</span>
        </h4>
        <ul className="font-semibold flex gap-x-5 mt-2 text-sm">
          {NaviList.map((element) => (
            <Link
              key={element.hash}
              onClick={() => setActiveLink(element.hash)}
              href={`${element.hash}`}
            >
              <li>{element.item}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-10 sm:ml-auto ml-0 mt-5 sm:mt-0">
        <Link href="https://www.instagram.com/konarska.joanna/">
          <BsInstagram className="scale-150" />
        </Link>
        <Link href="https://www.facebook.com/joanna.konarska">
          <BsFacebook className="scale-150" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
