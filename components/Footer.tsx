"use client";

import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.fBrand}>
            <div className={styles.fLogo}>Umakaran.dev</div>
            <p className={styles.fTag}>
              Senior Flutter Developer building high-performance mobile apps for global clients.
            </p>
          </div>
          <div className={styles.fLinks}>
            <div className={styles.fCol}>
              <span className={styles.fColH}>Navigation</span>
              <a href="#about"      className={styles.fA}>About</a>
              <a href="#services"   className={styles.fA}>Services</a>
              <a href="#work"       className={styles.fA}>Work</a>
            </div>
            <div className={styles.fCol}>
                <span className={styles.fColH}>Social</span>
                <a href="https://github.com/YOUR_USERNAME"   target="_blank" rel="noopener" className={styles.fA}>GitHub</a>
                <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener" className={styles.fA}>LinkedIn</a>
                <a href="mailto:umakaranuma1126@gmail.com" className={styles.fA}>Email</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBot}>
          <div className={styles.fCopy}>
            &copy; {new Date().getFullYear()} Umakaran Ampigaipagan. Created with <span className={styles.fHeart}>♥</span> from Sri Lanka.
          </div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
