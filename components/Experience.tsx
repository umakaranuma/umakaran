"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// Journey</span>
          <h2 className="t-h1">Professional Experience</h2>
        </Reveal>

        <div className={styles.expGrid}>
          <div className={styles.tl}>
            <div className={styles.tlLine} />
            
            <Reveal className={`${styles.tlItem} ${styles.cur}`}>
              <div className={styles.tlDot} />
              <div className={styles.tlDate}>JUL 2022 - PRESENT</div>
              <h3 className={styles.tlRole}>Flutter Developer</h3>
              <p className={styles.tlCo}>Apptimus Tech (Pvt) Ltd. · Full-time</p>
              <p className={styles.tlDesc}>
                Leading development of high-impact mobile apps. Architected Finemart (E-commerce), Ryba (Messaging), and MedLearning from scratch. Establishing team standards and CI/CD pipelines.
              </p>
            </Reveal>

            <Reveal delay={0.1} className={styles.tlItem}>
              <div className={styles.tlDot} />
              <div className={styles.tlDate}>MAR 2024 - PRESENT</div>
              <h3 className={styles.tlRole}>Founder &amp; Software Engineer</h3>
              <p className={styles.tlCo}>Umakaran.dev · Startup/Freelance</p>
              <p className={styles.tlDesc}>
                Providing architecture consulting and bespoke Flutter development for global clients.
              </p>
            </Reveal>

            <Reveal delay={0.2} className={styles.tlItem}>
              <div className={styles.tlDot} />
              <div className={styles.tlDate}>OCT 2023 - MAY 2024</div>
              <h3 className={styles.tlRole}>Software Engineer (Contract)</h3>
              <p className={styles.tlCo}>Code94 Labs · Contract</p>
              <p className={styles.tlDesc}>
                Developed the 'Empower' assistance workflow engine. Focused on modular state management and enterprise-grade reliability.
              </p>
            </Reveal>
          </div>

          <div className={styles.achGrid}>
            <Reveal delay={0.3} className={styles.ach}>
              <div className={styles.achIcon}>📦</div>
              <div className={styles.achN}>3</div>
              <div className={styles.achLbl}>OSS Packages</div>
              <p className={styles.achDesc}>Maintained on Pub.dev &amp; PyPI for the developer community.</p>
            </Reveal>
            <Reveal delay={0.4} className={styles.ach}>
              <div className={styles.achIcon}>🚀</div>
              <div className={styles.achN}>5+</div>
              <div className={styles.achLbl}>Production Apps</div>
              <p className={styles.achDesc}>Successfully shipped and actively maintained on stores.</p>
            </Reveal>
            <Reveal delay={0.5} className={`${styles.ach} ${styles.achWide}`}>
              <div className={styles.achIcon}>📐</div>
              <div className={styles.achLbl}>Architecture Specialist</div>
              <p className={styles.achDesc}>Expertise in Clean Architecture, BLoC, and scalable codebase patterns that reduce maintenance costs by 40%.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
