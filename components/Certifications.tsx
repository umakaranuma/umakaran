"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./Certifications.module.css";

const certs = [
  {
    icon: "🎓",
    name: "Flutter Developer Certification",
    by: "Course Provider · 2022"
  },
  {
    icon: "🏢",
    name: "Enterprise Architecture Patterns",
    by: "Advanced Engineering · 2023"
  },
  {
    icon: "🌐",
    name: "Full-Stack Python Developer",
    by: "University of Moratuwa · 2021"
  }
];

const Certifications = () => {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// Recognition</span>
          <h2 className="t-h1">Certifications</h2>
        </Reveal>

        <div className={styles.certGrid}>
          {certs.map((c, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className={styles.certCard}>
              <div className={styles.certBadge}>{c.icon}</div>
              <div>
                <div className={styles.certName}>{c.name}</div>
                <div className={styles.certBy}>{c.by}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
