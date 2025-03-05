"use client";

import { About } from "@/components/About";
import { AnimatedTestimonials, Certificate } from "@/components/Certificate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Freelance } from "@/components/Freelance";
import HeroSection from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";




export default function Home() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <About/>
      <Resume/>
      <div id="Certificate" className="w-full h-full pb-0 py-20 border-t border-[#1d1d1d] ">
            <h2
              className="max-w-7xl pl-4 pb-1 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
              Certifications
              
            </h2><br/>
            
          </div>
      <Certificate/>
      <Projects/>
      <div id="Freelance" className="w-full h-full pb-0 py-20 border-t border-[#1d1d1d] ">
            <h2
              className="max-w-7xl pl-4  mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
              Freelance Projects
              
            </h2>
            
          </div>
      <Freelance/>
      <Contact/>
      <Footer/>
      
    </>

  );
}

