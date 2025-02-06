import { Metadata } from "next";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Video from "@/components/Video";
import Brands from "@/components/Brands";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import ScrollUp from "@/components/Common/ScrollUp";


export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
    </>
  );
}
