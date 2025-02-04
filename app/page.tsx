import { Metadata } from "next";

import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";


export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
