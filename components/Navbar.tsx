"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      id="nav" 
      className={`${styles.nav} ${isScrolled ? "scrolled" : ""}`}
    >
      <div className={styles.navInner}>
        <Link href="/" className={styles.brand}>
          <div className={styles.navAv}>
            <span className={styles.navAvI}>UA</span>
          </div>
          <span className={styles.navName}>Umakaran A.</span>
        </Link>

        <div className={styles.links}>
          <a href="#about" className={styles.link}>About</a>
          <a href="#services" className={styles.link}>Services</a>
          <a href="#work" className={styles.link}>Work</a>
          <a href="#skills" className={styles.link}>Skills</a>
          <a href="#experience" className={styles.link}>Experience</a>
          <a href="#oss" className={styles.link}>Open Source</a>
          <a href="#hire" className="btn btn--teal">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
