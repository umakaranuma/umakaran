"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import OSS from "@/components/OSS";
import SocialProfiles from "@/components/SocialProfiles";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import BackgroundDeco from "@/components/BackgroundDeco";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <OSS />
      <SocialProfiles />
      <Certifications />
      <Footer />
      <BackgroundDeco />
    </main>
  );
}
