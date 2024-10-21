import React from "react";
import { FiChevronDown } from "react-icons/fi";

export const Data = [
  {
    url: require("../../public/assets/Images/grid_1.jpg").default,
  },
  {
    url: require("../../public/assets/Images/grid_2.jpg").default,
  },
  {
    url: require("../../public/assets/Images/grid_3.jpg").default,
  },
  {
    url: require("../../public/assets/Images/grid_4.jpg").default,
  },
  {
    url: require("../../public/assets/Images/grid_5.jpg").default,
  },
  {
    url: require("../../public/assets/Images/grid_6.jpg").default,
  },
  {
    url: require("../../public/assets/Images/grid_7.jpg").default,
  },
  {
    url: require("../../public/assets/Images/grid_8.jpg").default,
  },
  {
    url: require("../../public/assets/Images/grid_9.jpg").default,
  },
];

export const NaviList = [
  {
    item: "Usługi",
    hash: "Services",
  },
  {
    item: "Portfolio",
    hash: "Portfolio",
  },
  {
    item: "Aktualności",
    hash: "Aktualnosci",
  },
  {
    item: "Kontakt",
    hash: "Kontakt",
  },
  {},
];

export const experiencesData = [
  {
    id: "0",
    title: "Started and finished Brad Schiff Udemy course",
    caption:
      "Brad Schiff Udemy course about HTML5, CSS3, responsive design, Sass and more.",
    date: "10.2022",
    icon: React.createElement(FiChevronDown),
  },
  {
    id: "1",
    title: "Bought and finished Hello-Roman React course.",
    caption:
      'Bought a "Hello Roman" react course. Learned Higher Order Components, advanced react-hooks, good practics for making applications, Redux Toolkit query, user authentication, MSW Data, Axios, Rest Api, React Context and more.',
    date: "03.2023",
    icon: React.createElement(FiChevronDown),
  },
  {
    id: "2",
    title: "Use of the acquired knowledge",
    caption:
      "I'm not afraid of making mistakes, making websites with passion. ",
    date: "2023 - till now",
    icon: React.createElement(FiChevronDown),
  },
];
