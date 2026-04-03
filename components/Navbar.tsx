"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} id="nav">
      <div className={styles.navInner}>
        <Link href="/" className={styles.navBrand} aria-label="Home">
          <div className={styles.navAv}>
            <span className={styles.navAvI}>UA</span>
          </div>
          <span className={styles.navName}>Umakaran A.</span>
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="#about"      className={styles.navA}>About</Link></li>
          <li><Link href="#services"   className={styles.navA}>Services</Link></li>
          <li><Link href="#work"       className={styles.navA}>Work</Link></li>
          <li><Link href="#skills"     className={styles.navA}>Skills</Link></li>
          <li><Link href="#experience" className={styles.navA}>Experience</Link></li>
          <li><Link href="#oss"        className={styles.navA}>Open Source</Link></li>
          <li><Link href="#hire"       className={styles.navHire}>Hire Me</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
