"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./Projects.module.css";

const projects = [
  {
    num: "01",
    kick: "E-commerce platform",
    name: "Finemart",
    desc: "Full-featured e-commerce app with secure payment gateway, cart management, and real-time order tracking. Built from scratch with Clean Architecture and BLoC for predictable state across complex checkout flows.",
    tags: ["Flutter", "BLoC", "REST API", "Clean Architecture", "Dio", "Firebase"],
    origin: "Apptimus Tech (Pvt) Ltd.",
    featured: true
  },
  {
    num: "02",
    kick: "Real-time messaging",
    name: "Ryba",
    desc: "Real-time messaging with Ably WebSockets, offline SQLite caching, and push notifications. Zero message loss on poor connectivity.",
    tags: ["Ably", "SQLite", "BLoC", "FCM", "Offline-first"],
    origin: "Apptimus Tech"
  },
  {
    num: "03",
    kick: "E-learning · Subscriptions",
    name: "MedLearning",
    desc: "Subscription medical e-learning with video streaming, Stripe billing, progress tracking & offline Hive caching.",
    tags: ["Stripe", "Firebase", "Video Streaming", "Hive"],
    origin: "Apptimus Tech"
  },
  {
    num: "04",
    kick: "Enterprise workflow",
    name: "Empower",
    desc: "Workflow-based assistance management system with advanced state orchestration and modular Clean Architecture.",
    tags: ["Workflow Engine", "Clean Arch", "MVVM"],
    origin: "Code94 Labs · Contract"
  },
  {
    num: "05",
    kick: "Personal · Live in production",
    name: "Personal App",
    desc: "Solo-built Flutter app — full product lifecycle from architecture to App Store & Play Store publishing.",
    tags: ["Flutter", "Firebase", "Solo-built", "Published"],
    origin: "Live",
    live: true
  }
];

const Projects = () => {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// Selected work</span>
          <h2 className="t-h1">Projects that<br />ship to production</h2>
        </Reveal>

        <div className={styles.bento}>
          <div className={styles.bentoTop}>
            {projects.slice(0, 2).map((p, idx) => (
              <Reveal key={p.num} delay={idx * 0.1} className={`${styles.pc} ${p.featured ? styles.pcFeat : ""}`}>
                <div className={styles.pcBody}>
                  <div className={styles.pnum}>{p.num}</div>
                  <p className={styles.pkick}>{p.kick}</p>
                  <h3 className={styles.pname}>{p.name}</h3>
                  <p className={styles.pdesc}>{p.desc}</p>
                  <div className={styles.ptags}>
                    {p.tags.map(tag => (
                      <span key={tag} className="chip chip--teal">{tag}</span>
                    ))}
                  </div>
                  <div className={styles.pfoot}>
                    {p.live ? (
                      <span className={styles.porigin} style={{ color: "var(--green)" }}>
                        <span className={`${styles.pulse} ${styles.pulseGreen}`} />Live
                      </span>
                    ) : (
                      <span className={styles.porigin}><span className={styles.pdot} />{p.origin}</span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className={styles.bentoBot}>
            {projects.slice(2).map((p, idx) => (
              <Reveal key={p.num} delay={idx * 0.1} className={styles.pc}>
                <div className={styles.pcBody}>
                  <div className={styles.pnum}>{p.num}</div>
                  <p className={styles.pkick}>{p.kick}</p>
                  <h3 className={styles.pname}>{p.name}</h3>
                  <p className={styles.pdesc}>{p.desc}</p>
                  <div className={styles.ptags}>
                    {p.tags.map(tag => (
                      <span key={tag} className="chip chip--teal">{tag}</span>
                    ))}
                  </div>
                  <div className={styles.pfoot}>
                    <span className={styles.porigin}><span className={styles.pdot} />{p.origin}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
