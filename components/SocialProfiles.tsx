"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./SocialProfiles.module.css";

const profiles = [
  { name: "GitHub", handle: "@umakaranuma", icon: "🐙", url: "https://github.com/umakaranuma", color: "#f5f5f5" },
  { name: "GitLab", handle: "@umakaran", icon: "🦊", url: "https://gitlab.com/umakaran", color: "#fff4ee" },
  { name: "LinkedIn", handle: "Umakaran Ampigaipagan", icon: "🔗", url: "https://www.linkedin.com/in/umakaran-ampigaipagan-a91075213/", color: "#e8f4fd" },
  { name: "Email", handle: "umakaranuma1126@gmail.com", icon: "📧", url: "mailto:umakaranuma1126@gmail.com", color: "var(--teal-tint)" },
  { name: "pub.dev", handle: "2 packages published", icon: "📦", url: "https://pub.dev/packages/api_apptimus", color: "#e8f0fd" },
  { name: "PyPI", handle: "Projects", icon: "🐍", url: "https://pypi.org/manage/projects/", color: "#edf4fb" },
  { name: "Phone", handle: "+94 76 921 4278", icon: "📞", url: "tel:+94769214278", color: "#f0fdf4" }
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
            <Reveal 
              key={p.name} 
              delay={i * 0.05} 
              className={styles.profCard}
              tag="a"
              href={p.url}
              target="_blank"
              rel="noopener"
            >
              <div className={styles.profInner}>
                <div className={styles.profIcon} style={{ background: p.color }}>
                   {/* Fallback to emoji icons as used in original */}
                   <span style={{ fontSize: '1.5rem' }}>{p.icon}</span>
                </div>
                <div>
                  <div className={styles.profName}>{p.name}</div>
                  <div className={styles.profHandle}>{p.handle}</div>
                </div>
                <div className={styles.profArrow}>↗</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProfiles;
