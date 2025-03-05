import React from "react";
import {
  IconBrandGithub,
  IconHome,
  IconBrandLine,
  IconUser,
  IconSchool,
  IconCode,
} from "@tabler/icons-react";
import { TbBrandFiverr } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";


import { FloatingDock } from "./ui/floating-dock";

export function NavBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Home",
    },

    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#About",
    },
    {
      title: "Resume",
      icon: (
        <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Resume",
    },
    {
      title: "Certifications",
      icon: (
        <PiCertificate className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Certificate",
    },
    {
      title: "Projects",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Projects",
    },
    {
      title: "Freelance Projects",
      icon: (
        <TbBrandFiverr className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Freelance",
    },
    {
      title: "Contact",
      icon: (
        <IconBrandLine className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#Contact",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/oussamaelmessaoudi",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];
  return (
    (<div className="fixed left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] bottom-[50px] z-[101]">
      
      <FloatingDock
        items={links} />
    </div>)
  );
}
