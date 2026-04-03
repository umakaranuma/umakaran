"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./SocialProfiles.module.css";

const profiles = [
  {
    name: "GitHub",
    handle: "@YOUR_GITHUB",
    icon: "💻",
    link: "https://github.com/YOUR_USERNAME",
    bg: "#24292e"
  },
  {
    name: "LinkedIn",
    handle: "Umakaran Ampigaipagan",
    icon: "💼",
    link: "https://linkedin.com/in/YOUR_USERNAME",
    bg: "#0077b5"
  },
  {
    name: "Pub.dev",
    handle: "Published packages",
    icon: "📦",
    link: "https://pub.dev/packages/YOUR_PACKAGE",
    bg: "#0175c2"
  },
  {
    name: "Email",
    handle: "umakaranuma1126@gmail.com",
    icon: "📧",
    link: "mailto:umakaranuma1126@gmail.com",
    bg: "var(--teal)"
  }
];

const SocialProfiles = () => {
  return (
    <section className="section section--alt" id="social">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// Networking</span>
          <h2 className="t-h1">Social Profiles</h2>
        </Reveal>

        <div className={styles.profGrid}>
          {profiles.map((p, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className={styles.profCard}>
              <a href={p.link} target="_blank" rel="noopener" className={styles.profCardInner}>
                <div className={styles.profIcon} style={{ background: p.bg }}>
                   <span style={{ fontSize: "1.1rem" }}>{p.icon}</span>
                </div>
                <div>
                  <div className={styles.profName}>{p.name}</div>
                  <div className={styles.profHandle}>{p.handle}</div>
                </div>
                <div className={styles.profArrow}>→</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProfiles;
