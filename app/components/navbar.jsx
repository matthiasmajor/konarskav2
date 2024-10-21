"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useLayoutEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { NaviList } from "@/data/data";
import useActiveLink from "@/Hooks/useActiveLink";
import Konarska from "../../public/assets/Images/JOANNA KONARSKA Logo - White with Transparent Background.svg";

function Navbar({ activeLink, setActiveLink }) {
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky flex z-[999] px-10 sm:px-0 justify-between sm:justify-around max-h-20 items-center  py-6  text-white">
      <div>
        <Link href="/" className="">
          <Image
            src={Konarska}
            onClick={() => setActiveLink(null)}
            className="hover:opacity-70 "
            width={240}
            height={240}
          />
        </Link>
      </div>
      <nav className="hidden sm:flex items-center gap-x-8 ">
        <ul className="flex gap-x-8 mr-5 ">
          {NaviList.map((element, index) => (
            <Link href={`${element.hash}`}>
              <li
                key={index}
                onClick={() => setActiveLink(element.hash)}
                className={clsx(
                  "hover:opacity-50 hover:scale-105 transition-all cursor-pointer text-sm text-white",
                  {
                    " text-green-500 font-bold": activeLink === element.hash,
                  }
                )}
              >
                {element.item}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-x-8">
          <Link href="https://www.instagram.com/konarska.joanna/">
            <BsInstagram
              style={{ scale: "1.2" }}
              className="cursor-pointer hover:opacity-50 transition-all hover:scale-125"
            />
          </Link>

          <Link href="https://www.facebook.com/joanna.konarska">
            <BsFacebook
              style={{ scale: "1.2" }}
              className="cursor-pointer hover:opacity-50 transition-all hover:scale-125"
            />
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed w-full h-screen top-0 left-0 -z-[10] bg-white sm:hidden"
          >
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="relative flex flex-col h-full justify-center  items-center gap-4"
            >
              <AiOutlineClose
                onClick={() => setOpen(!isOpen)}
                className="absolute top-5 right-5 w-[30px] h-[30px] z-[1000] text-black cursor-pointer hover:opacity-40"
              />
              {NaviList.map((link, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVars}
                    className="text-2xl uppercase text-black hover:opacity-70 transition-all"
                  >
                    <Link href={`${link.hash}`}>
                      <button onClick={() => setOpen(!isOpen)}>
                        {link.item}
                      </button>
                    </Link>
                  </motion.div>
                </div>
              ))}

              <div className="flex gap-x-4 scale-150">
                <BsInstagram className="cursor-pointer hover:opacity-50 text-black" />

                <BsFacebook className="cursor-pointer hover:opacity-50 text-black" />
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!isOpen)}
        className="sm:hidden cursor-pointer z-[999]"
      >
        {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
      </button>
    </header>
  );
}

export default Navbar;
