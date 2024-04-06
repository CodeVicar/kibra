import React from "react";
import Hero from "@/components/about/Hero";
import Cta from "@/components/about/Cta";
import Team from "@/components/about/Team";
import Stats from "@/components/about/Stats";
import Itro from "@/components/about/Intro";
import Impacts from "@/components/about/Impacts";


const page = () => {
  return (
    <div>
      <Hero />
      <Itro />
      <Stats />
      <Cta />
      <Impacts />
      
      {/* <Team /> */}
    </div>
  );
};

export default page;
