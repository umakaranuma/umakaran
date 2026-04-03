"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className="section section--alt" id="skills">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// Expertise</span>
          <h2 className="t-h1">Technical Skills</h2>
        </Reveal>

        <div className={styles.skillsWrap}>
          <div>
            <div className={styles.skLabelRow}>
              <span className={styles.skSubBadge}>Core Mobile</span>
            </div>
            <div className={styles.skPills}>
              <div className={styles.skPill}><span>💙</span> Flutter</div>
              <div className={styles.skPill}><span>🎯</span> Dart</div>
              <div className={styles.skPill}><span>🧩</span> BLoC / Provider</div>
              <div className={styles.skPill}><span>🏗️</span> Clean Arch</div>
              <div className={styles.skPill}><span>📦</span> Pub.dev</div>
              <div className={styles.skPill}><span>📱</span> Android/iOS</div>
            </div>

            <div className={styles.skLabelRow} style={{ marginTop: "2rem" }}>
              <span className={styles.skSubBadge}>Backend &amp; Infra</span>
            </div>
            <div className={styles.skPills}>
              <div className={styles.skPill}><span>🔥</span> Firebase</div>
              <div className={styles.skPill}><span>🐍</span> Python / Django</div>
              <div className={styles.skPill}><span>🗄️</span> SQLite / Hive</div>
              <div className={styles.skPill}><span>🌐</span> REST / GraphQL</div>
              <div className={styles.skPill}><span>🚢</span> CI/CD (GitHub)</div>
              <div className={styles.skPill}><span>☁️</span> Google Cloud</div>
            </div>
          </div>

          <div>
            <div className={styles.skLabelRow}>
              <span className={styles.skSubBadge}>Specialized</span>
            </div>
            <div className={`${styles.skPills} ${styles.skPills2}`}>
              <div className={styles.skPill}><span>🔌</span> WebSockets (Ably)</div>
              <div className={styles.skPill}><span>💳</span> Stripe / Payments</div>
              <div className={styles.skPill}><span>🗺️</span> Google Maps API</div>
              <div className={styles.skPill}><span>📊</span> Crashlytics / Analytics</div>
            </div>

            <div className={styles.skLabelRow} style={{ marginTop: "2rem" }}>
              <span className={styles.skSubBadge}>Currently Learning</span>
            </div>
            <div className={styles.learnPills}>
              <div className={styles.learnPill}><span>🦀</span> Rust</div>
              <div className={styles.learnPill}><span>⚛️</span> React/Next.js</div>
              <div className={styles.learnPill}><span>🧠</span> AI Integration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
