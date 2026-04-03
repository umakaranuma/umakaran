"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./Skills.module.css";

const skillGroups = [
  {
    label: "Mobile Development",
    skills: ["Flutter", "Dart", "Clean Architecture", "BLoC State Management", "Android SDK", "iOS / Xcode", "Firebase Ecosystem", "REST APIs / Dio"]
  },
  {
    label: "Tools & Ecosystem",
    skills: ["Git / GitHub / GitLab", "CI/CD Pipelines", "Stripe / Payment Gateways", "SQLite / Hive / local storage", "Ably WebSockets", "PyPI / Pub.dev Publishing", "Agile / Scrum / Jira"]
  }
];

const learning = [
  { icon: "📊", name: "GraphQL & Apollo" },
  { icon: "☁️", name: "Advanced DevOps" },
  { icon: "🐳", name: "Docker & Microservices" }
];

const Skills = () => {
  return (
    <section className="section section--alt" id="skills">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// Expertise</span>
          <h2 className="t-h1">Technical<br />Skill-set</h2>
        </Reveal>

        <div className={styles.skillsWrap}>
          {skillGroups.map((group, i) => (
            <div key={group.label} className={styles.skillSection}>
              <Reveal delay={i * 0.1}>
                <span className={styles.skSubBadge}>{group.label}</span>
                <div className={styles.skPills}>
                  {group.skills.map((skill, idx) => (
                    <Reveal key={skill} delay={idx * 0.05} className="chip">
                      {skill}
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <div className={styles.learningSection}>
          <Reveal className={styles.learningHead}>
            <span className="t-cap" style={{ marginBottom: "1.2rem", display: "block" }}>Currently exploring</span>
          </Reveal>
          <div className={styles.learnPills}>
            {learning.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.1} className={styles.learnPill}>
                <span>{l.icon}</span>
                {l.name}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
