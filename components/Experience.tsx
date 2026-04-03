"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./Experience.module.css";

const jobs = [
  {
    date: "Nov 2024 — Jan 2025",
    role: "Flutter Developer · Contract",
    co: "Code94 Labs · Remote",
    desc: "Contracted to design and build Empower — a complex workflow-based assistance management system with advanced state orchestration and modular Clean Architecture, delivered fully on schedule."
  },
  {
    date: "Dec 2022 — Present",
    role: "Flutter Developer",
    co: "Apptimus Tech (Pvt) Ltd. · Jaffna",
    desc: "Lead Flutter developer for high-traffic e-commerce and real-time messaging apps. Established BLoC-based state management patterns and Clean Architecture across the company's mobile portfolio."
  }
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// Professional Journey</span>
          <h2 className="t-h1">Experience &amp;<br />Achievements</h2>
        </Reveal>

        <div className={styles.expGrid}>
          <div className={styles.tl}>
            <div className={styles.tlLine} />
            {jobs.map((j, i) => (
              <Reveal key={i} delay={i * 0.1} className={styles.tlItem}>
                <div className={styles.tlDot} />
                <p className={styles.tlDate}>{j.date}</p>
                <h3 className={styles.tlRole}>{j.role}</h3>
                <p className={styles.tlCo}>{j.co}</p>
                <p className={styles.tlDesc}>{j.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className={styles.impact}>
            <span className="t-cap" style={{ marginBottom: "1.2rem", display: "block" }}>Impact highlights</span>
            <div className={styles.achGrid}>
              <div className={styles.ach}>
                <div className={styles.achIcon}>📉</div>
                <div className={styles.achN}>40%</div>
                <p className={styles.achLbl}>Fewer state bugs</p>
                <p className={styles.achDesc}>BLoC &amp; Provider patterns across all apps</p>
              </div>
              <div className={styles.ach}>
                <div className={styles.achIcon}>⚡</div>
                <div className={styles.achN}>30%</div>
                <p className={styles.achLbl}>Faster startup</p>
                <p className={styles.achDesc}>Lazy loading &amp; efficient widget rendering</p>
              </div>
              <div className={styles.ach}>
                <div className={styles.achIcon}>✅</div>
                <div className={styles.achN}>95%+</div>
                <p className={styles.achLbl}>Code coverage</p>
                <p className={styles.achDesc}>Unit &amp; widget tests on all milestones</p>
              </div>
              <div className={styles.ach}>
                <div className={styles.achIcon}>👥</div>
                <div className={styles.achN}>3</div>
                <p className={styles.achLbl}>Devs mentored</p>
                <p className={styles.achDesc}>Code reviews, standards &amp; quality</p>
              </div>
              <div className={`${styles.ach} ${styles.achWide}`}>
                <div className={styles.achIcon}>🚀</div>
                <div className={styles.achN}>5+</div>
                <p className={styles.achLbl}>Production apps shipped</p>
                <p className={styles.achDesc}>All delivered on schedule to Play Store &amp; App Store</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
