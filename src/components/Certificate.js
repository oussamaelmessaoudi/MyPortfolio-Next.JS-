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
          "This certification validates advanced SQL skills, including complex querying, joins, subqueries, window functions, and database optimization. It demonstrates proficiency in solving challenging database problems and efficiently managing data using SQL.",
        name: "Intro to programming (Python)",
        designation: "Kiggle",
        src: "/Python.png",
      },
      {
        quote:
          "This certification validates foundational Adobe Photoshop skills, including basic image editing, layer management, selection tools, color correction, and text manipulation. It demonstrates proficiency in creating and modifying visual content using Adobe Photoshop, showcasing the ability to work with essential tools and techniques for graphic design and photo enhancement.",
        name: "Adobe Photoshop for beginners",
        designation: "Alison",
        src: "/Photoshop.jpg",
      },
      {
        quote:
          "This certification validates fundamental Google Sheets skills, including data organization, formulas, pivot tables, conditional formatting, and data visualization. It demonstrates proficiency in automating workflows, managing large datasets, and creating dynamic reports using Google Sheets' advanced features. This certification showcases the ability to streamline data processes and improve efficiency through automation and optimized spreadsheet management.",
        name: "Google Sheets",
        designation: "Simplilearn",
        src: "/Google.jpg",
      },
  

  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
