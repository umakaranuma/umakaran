"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./Certifications.module.css";

const certs = [
  {
    icon: "🎓",
    name: "Google Associate Android Developer",
    by: "Google · Certification"
  },
  {
    icon: "📱",
    name: "Flutter & Dart — The Complete Guide",
    by: "Udemy · Certification"
  },
  {
    icon: "🏛️",
    name: "National Diploma in Technology (IT)",
    by: "University of Moratuwa · Sri Lanka"
  }
];

const Certifications = () => {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// Credentials</span>
          <h2 className="t-h1">Certifications<br />&amp; Education</h2>
        </Reveal>
        
        <div className={styles.certGrid}>
          {certs.map((c, i) => (
            <Reveal key={i} delay={i * 0.1} className={styles.certCard}>
              <div className={styles.certBadge}>{c.icon}</div>
              <div>
                <h3 className={styles.certName}>{c.name}</h3>
                <p className={styles.certBy}>{c.by}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
