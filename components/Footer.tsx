"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className={styles.hireSection} id="hire">
        <div className="wrap">
          <div className={styles.hireGrid}>
            <Reveal className={styles.hireInfo}>
              <span className="t-cap" style={{ color: "var(--teal-3)" }}>// Collaboration</span>
              <h2 className={styles.hireTitle}>Ready to build<br />something <em>great?</em></h2>
              <p className={styles.hireDesc}>
                I’m available for freelance projects, architectural consulting, or full-time roles starting immediately. 
                If you have a mission-critical mobile project that needs a steady hand, let's talk.
              </p>
              
              <div className={styles.contactBlock}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:umakaranuma1126@gmail.com" className={styles.contactValue}>umakaranuma1126@gmail.com</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Phone</span>
                  <a href="tel:+94769214278" className={styles.contactValue}>+94 76 921 4278</a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Location</span>
                  <span className={styles.contactValue}>Sri Lanka · (GMT+5:30)</span>
                </div>
              </div>

              <div className={styles.hireCtas}>
                 <a href="mailto:umakaranuma1126@gmail.com" className="btn btn--teal">Start a Project</a>
                 <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener" className={styles.btnOutlineW}>LinkedIn</a>
              </div>
            </Reveal>

            <div className={styles.hireSrvs}>
              {[
                { icon: "🏗️", lbl: "Architecture Audit", desc: "Is your app slow or buggy? I'll audit your code and provide a roadmap to stability." },
                { icon: "⚡", lbl: "MVVM / BLoC Setup", desc: "Expert state management setup to ensure your app stays maintainable as it grows." },
                { icon: "🚢", lbl: "Full Product Cycle", desc: "From Figma to App Store. I handle the entire technical journey." }
              ].map((s, i) => (
                <Reveal key={i} delay={0.1 * i} className={styles.hSrvCard}>
                  <div className={styles.hSrvIcon}>{s.icon}</div>
                  <div>
                    <h3 className={styles.hSrvLbl}>{s.lbl}</h3>
                    <p className={styles.hSrvDesc}>{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.fBrand}>Umakaran Ampigaipagan · Senior Flutter Developer</span>
          <nav className={styles.fLinks}>
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener">GitHub</a>
            <a href="https://gitlab.com/YOUR_USERNAME" target="_blank" rel="noopener">GitLab</a>
            <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener">LinkedIn</a>
            <a href="mailto:umakaranuma1126@gmail.com">Email</a>
            <a href="https://pub.dev/publishers/YOUR_DOMAIN" target="_blank" rel="noopener">pub.dev</a>
            <a href="#hire">Hire Me</a>
          </nav>
          <div className={styles.fLegal}>
            &copy; {currentYear} Umakaran. Build with 💙 and Clean Architecture.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
