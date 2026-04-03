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
    origin: "Apptimus Tech (Pvt) Ltd."
  },
  {
    num: "03",
    kick: "E-learning · Subscriptions",
    name: "MedLearning",
    desc: "Subscription medical e-learning with video streaming, Stripe billing, progress tracking & offline Hive caching.",
    tags: ["Stripe", "Firebase", "Video Streaming", "Hive"],
    origin: "Code94 Labs (Pvt) Ltd · Contract"
  },
  {
    num: "04",
    kick: "Enterprise workflow",
    name: "Empower",
    desc: "Workflow-based assistance management system with advanced state orchestration and modular Clean Architecture.",
    tags: ["Workflow Engine", "Clean Arch", "MVVM"],
    origin: "Apptimus Tech (Pvt) Ltd."
  },

  {
    num: "05",
    kick: "E-Learning Platform",
    name: "Moura",
    desc: "Online e-learning platform enabling educational content delivery, course management, and progress tracking for learners.",
    tags: ["Flutter", "E-Learning", "REST API", "Clean Architecture"],
    origin: "Apptimus Tech (Pvt) Ltd."
  },
  {
    num: "06",
    kick: "Lead Management System",
    name: "Envoy",
    desc: "Lead management system for finance and insurance companies, built with Django backend to track leads through the sales pipeline.",
    tags: ["Django", "Python", "REST API", "Lead Management"],
    origin: "Apptimus Tech (Pvt) Ltd."
  },
  {
    num: "07",
    kick: "AI-Powered English Learning",
    name: "Tuty",
    desc: "AI-powered online English learning platform mobile application, helping learners improve English with personalized lessons.",
    tags: ["Flutter", "AI", "English Learning", "Mobile"],
    origin: "Apptimus Tech (Pvt) Ltd."
  },
  {
    num: "08",
    kick: "Personal · Money Manager",
    name: "Finzo",
    desc: "Personal finance management app to track expenses, manage budgets, and monitor savings with intuitive charts.",
    tags: ["Flutter", "Provider", "Charts", "Local Storage"],
    origin: "Personal Project",
    live: true
  },
  {
    num: "09",
    kick: "Personal · Photo Editor",
    name: "Snap Champ",
    desc: "Powerful photo editing application with filters, adjustments, and creative tools to transform photos with ease.",
    tags: ["Flutter", "Image Processing", "Filters", "Canvas"],
    origin: "Personal Project",
    live: true
  },
  {
    num: "10",
    kick: "Personal · MP3 Player",
    name: "Tunee",
    desc: "Sleek and feature-rich music player with playlist management, equalizer controls, and seamless audio playback.",
    tags: ["Flutter", "Audio Player", "Equalizer", "Playlist"],
    origin: "Personal Project",
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
