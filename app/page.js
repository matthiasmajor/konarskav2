"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Main from "./components/main";
import About from "./components/About";
import Gallery from "./components/gallery";
import AboutSecond from "./components/About_second";
import Quote from "./components/Quote";
import Showcase from "./components/Showcase/Showcase";
import Wspolpraca from "./components/Wspolpraca";
import BreakingImage from "./components/BreakingImage";
import Review from "./components/Review";
import Kontakt from "./components/Contact";

async function Home() {
  return (
    <main className={styles.main}>
      <Main /> <AboutSecond /> <Wspolpraca /> <BreakingImage /> <Quote />
      <Gallery /> <Review /> <Kontakt />
    </main>
  );
}

export default Home;
