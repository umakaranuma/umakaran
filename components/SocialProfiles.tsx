"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./SocialProfiles.module.css";

const profiles = [
  { name: "GitHub", handle: "@YOUR_USERNAME", icon: "🐙", url: "https://github.com/YOUR_USERNAME", color: "#f5f5f5" },
  { name: "GitLab", handle: "@YOUR_USERNAME", icon: "🦊", url: "https://gitlab.com/YOUR_USERNAME", color: "#fff4ee" },
  { name: "LinkedIn", handle: "Umakaran Ampigaipagan", icon: "🔗", url: "https://linkedin.com/in/YOUR_USERNAME", color: "#e8f4fd" },
  { name: "Email", handle: "umakaranuma1126@gmail.com", icon: "📧", url: "mailto:umakaranuma1126@gmail.com", color: "var(--teal-tint)" },
  { name: "pub.dev", handle: "2 packages published", icon: "📦", url: "https://pub.dev/publishers/YOUR_DOMAIN", color: "#e8f0fd" },
  { name: "PyPI", handle: "1 package published", icon: "🐍", url: "https://pypi.org/user/YOUR_USERNAME", color: "#edf4fb" },
  { name: "Phone", handle: "+94 76 921 4278", icon: "📞", url: "tel:+94769214278", color: "#f0fdf4" },
  { name: "Twitter / X", handle: "@YOUR_USERNAME", icon: "𝕏", url: "https://twitter.com/YOUR_USERNAME", color: "#e8f5fe" }
];

const SocialProfiles = () => {
  return (
    <section className="section section--alt">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// Find me online</span>
          <h2 className="t-h1">Developer profiles<br />&amp; social links</h2>
        </Reveal>

        <div className={styles.profGrid}>
          {profiles.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05} className={styles.profCard}>
              <a href={p.url} target="_blank" rel="noopener" className={styles.profInner}>
                <div className={styles.profIcon} style={{ background: p.color }}>
                   {/* Fallback to emoji icons as used in original */}
                   <span style={{ fontSize: '1.5rem' }}>{p.icon}</span>
                </div>
                <div>
                  <div className={styles.profName}>{p.name}</div>
                  <div className={styles.profHandle}>{p.handle}</div>
                </div>
                <div className={styles.profArrow}>↗</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProfiles;
