"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// About me</span>
          <h2 className="t-h1">Building apps that<br /><em className="hi">actually ship</em></h2>
        </Reveal>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutContent}>
            <Reveal delay={0.1} className={styles.aboutText}>
              <p>I’m a Senior Flutter Developer with 3+ years of experience building and delivering production-grade mobile applications for Android and iOS.</p>
              <p>I specialize in scalable architectures using <strong>Clean Architecture</strong> and <strong>BLoC</strong> — ensuring codebases remain maintainable, testable, and reliable long after release.</p>
              <p>I’ve developed and shipped applications across e-commerce, real-time messaging, subscription-based platforms, and enterprise systems, all actively used in production environments.</p>
              <p>I take ownership of the full development lifecycle — from system design and architecture decisions to CI/CD pipelines and App Store / Play Store deployments.</p>
              <p>Beyond development, I contribute to team growth by defining coding standards, mentoring developers, and maintaining open-source packages on Pub.dev and PyPI.</p>
            </Reveal>

            <div className={styles.aboutChips}>
              {["Android & iOS", "BLoC Expert", "Open Source", "Firebase", "CI/CD", "Stripe", "Ably WebSocket", "Pub.dev", "PyPI"].map((chip, i) => (
                <Reveal key={chip} delay={0.1 * i} className={`chip ${i < 3 ? "chip--teal" : ""}`}>
                  {chip}
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5} className={styles.locTag}>
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Jaffna, Sri Lanka · Remote friendly · Worldwide
            </Reveal>
          </div>

          <Reveal delay={0.2} className={styles.aboutPanel}>
            <div className={styles.panelItem}>
              <span className={styles.apl}>Current position</span>
              <span className={styles.apv}>Flutter Developer @ Apptimus Tech</span>
            </div>
            <hr className={styles.apDiv} />
            <div className={styles.panelItem}>
              <span className={styles.apl}>Availability</span>
              <span className={`${styles.apv} ${styles.apvTeal}`}>● Open to opportunities</span>
            </div>
            <hr className={styles.apDiv} />
            <div className={styles.panelItem}>
              <span className={styles.apl}>Location</span>
              <span className={styles.apv}>Jaffna, Sri Lanka</span>
            </div>
            <hr className={styles.apDiv} />
            <div className={styles.panelItem}>
              <span className={styles.apl}>Work type</span>
              <span className={styles.apv}>Remote · Contract · Full-time</span>
            </div>
            <hr className={styles.apDiv} />
            <div className={styles.panelItem}>
              <span className={styles.apl}>Experience</span>
              <span className={styles.apv}>3+ years · 5+ production apps</span>
            </div>
            <hr className={styles.apDiv} />
            <div className={styles.panelItem}>
              <span className={styles.apl}>Contact</span>
              <a href="mailto:umakaranuma1126@gmail.com" className={styles.apvTeal}>umakaranuma1126@gmail.com</a>
            </div>
            <a href="#hire" className="btn btn--teal" style={{ justifyContent: "center" }}>
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l1.27-.78a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Hire Me
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
