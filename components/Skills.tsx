"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className="section section--alt" id="skills">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// Technical expertise</span>
          <h2 className="t-h1">Skills</h2>
        </Reveal>

        <div className={styles.skillsWrap}>
          {/* Column 1 */}
          <Reveal delay={0.1}>
            <div style={{ marginBottom: "2rem" }}>
              <div className={styles.skLabelRow}><span className="t-sub">Programming Languages</span></div>
              <div className={styles.skPills}>
                <div className={styles.skPill}>🎯 Dart</div>
                <div className={styles.skPill}>🐍 Python</div>
                <div className={styles.skPill}>🤖 Kotlin</div>
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <div className={styles.skLabelRow}><span className="t-sub">Mobile Development</span></div>
              <div style={{ marginBottom: ".6rem" }}><span className={styles.skSubBadge}>Framework</span></div>
              <div className={`${styles.skPills} ${styles.skPills2}`} style={{ marginBottom: ".8rem" }}>
                <div className={styles.skPill}>📱 Flutter</div>
                <div className={styles.skPill}>🔥 Firebase</div>
              </div>
              <div style={{ marginBottom: ".6rem" }}><span className={styles.skSubBadge}>State Management</span></div>
              <div className={`${styles.skPills} ${styles.skPills2}`}>
                <div className={styles.skPill}>🧱 BLoC</div>
                <div className={styles.skPill}>🔄 Riverpod</div>
                <div className={styles.skPill}>📦 Provider</div>
                <div className={styles.skPill}>⚡ GetX</div>
              </div>
            </div>

            <div>
              <div className={styles.skLabelRow}><span className="t-sub">Architecture</span></div>
              <div className={`${styles.skPills} ${styles.skPills2}`}>
                <div className={styles.skPill}>🏗️ Clean Architecture</div>
                <div className={styles.skPill}>🎨 MVVM</div>
                <div className={styles.skPill}>📐 SOLID Principles</div>
                <div className={styles.skPill}>🧩 Modular Design</div>
              </div>
            </div>
          </Reveal>

          {/* Column 2 */}
          <Reveal delay={0.2}>
            <div style={{ marginBottom: "2rem" }}>
              <div className={styles.skLabelRow}><span className="t-sub">Networking & APIs</span></div>
              <div className={styles.skPills}>
                <div className={styles.skPill}>🌐 REST APIs</div>
                <div className={styles.skPill}>🚀 Dio</div>
                <div className={styles.skPill}>📊 GraphQL</div>
                <div className={styles.skPill}>🔌 WebSocket</div>
                <div className={styles.skPill}>📋 JSON</div>
                <div className={styles.skPill}>💬 Ably</div>
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <div className={styles.skLabelRow}><span className="t-sub">Local Storage</span></div>
              <div className={`${styles.skPills} ${styles.skPills2}`}>
                <div className={styles.skPill}>🗄️ Hive</div>
                <div className={styles.skPill}>💾 SQLite</div>
                <div className={styles.skPill}>🔑 SharedPrefs</div>
                <div className={styles.skPill}>📂 Drift</div>
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <div className={styles.skLabelRow}><span className="t-sub">CI/CD & Testing</span></div>
              <div className={styles.skPills}>
                <div className={styles.skPill}>🐙 GitHub Actions</div>
                <div className={styles.skPill}>✈️ Codemagic</div>
                <div className={styles.skPill}>🔬 Bitrise</div>
                <div className={styles.skPill}>🚦 Fastlane</div>
                <div className={styles.skPill}>🧪 Unit Tests</div>
                <div className={styles.skPill}>🎭 Widget Tests</div>
              </div>
            </div>

            <div>
              <div className={styles.skLabelRow}>
                <span className="t-sub" style={{ color: "var(--purple)", borderColor: "var(--purple)" }}>Currently Learning</span>
              </div>
              <div className={styles.learnPills}>
                <div className={styles.learnPill}>🎯 KMP (Kotlin Multiplatform)</div>
                <div className={styles.learnPill}>🖥️ Compose Multiplatform</div>
                <div className={styles.learnPill}>🏛️ Advanced Architecture</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
