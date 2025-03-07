import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image from "next/image";

export function Certificate() {
  
  const testimonials = [
    {
      quote:
        "The Image Processing Onramp certificate from MathWorks confirms completion of an introductory MATLAB course. It covers foundational skills in image processing, including segmentation, filtering, edge detection, and feature extraction, through hands-on training.",
      name: "Image Processing Onramp",
      designation: "MathWorks",
      src: "/1245.jpg",
    },
    {
        quote:
          "This certification validates advanced SQL skills, including complex querying, joins, subqueries, window functions, and database optimization. It demonstrates proficiency in solving challenging database problems and efficiently managing data using SQL.",
        name: "SQL (Advanced)",
        designation: "HackerRank",
        src: "/SQL.jpg",
      },
      {
        quote:
          "This certification validates foundational Python programming skills, including syntax, variables, loops, functions, and basic data structures. It demonstrates the ability to write and troubleshoot simple Python programs, laying the groundwork for more advanced programming concepts.",
        name: "Intro to programming (Python)",
        designation: "Kiggle",
        src: "/Python.png",
      },
      {
        quote:
          "This certification validates basic Adobe Photoshop skills, including image editing, layer management, selection tools, and color correction. It demonstrates proficiency in using essential tools for graphic design and photo enhancement.",
        name: "Adobe Photoshop for beginners",
        designation: "Alison",
        src: "/Photoshop.jpg",
      },
      {
        quote:
          "This certification validates essential Google Sheets skills, including data organization, formulas, pivot tables, and automation. It demonstrates proficiency in managing datasets and streamlining workflows for efficient data processing and reporting.",
        name: "Google Sheets",
        designation: "Simplilearn",
        src: "/Google.jpg",
      },
  

  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
