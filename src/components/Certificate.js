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
  

  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
