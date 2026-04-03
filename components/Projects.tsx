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
    metrics: [
      { n: "40%", l: "Fewer state bugs" },
      { n: "30%", l: "Faster startup" },
      { n: "95%+", l: "Code coverage" }
    ],
    tags: ["Flutter", "BLoC", "REST API", "Payment Gateway", "Clean Architecture", "Dio", "Firebase"],
    origin: "Apptimus Tech (Pvt) Ltd.",
    featured: true
  },
  {
    num: "02",
    kick: "Real-time messaging",
    name: "Ryba",
    desc: "Real-time messaging with Ably WebSockets, offline SQLite caching, and push notifications. Zero message loss on poor connectivity.",
    tags: ["Ably", "SQLite", "BLoC", "FCM", "Offline-first"],
    origin: "Apptimus Tech",
    side: true
  },
  {
    num: "03",
    kick: "E-learning · Subscriptions",
    name: "MedLearning",
    desc: "Subscription medical e-learning with video streaming, Stripe billing, progress tracking & offline Hive caching.",
    tags: ["Stripe", "Firebase", "Video Streaming", "Hive"],
    origin: "Apptimus Tech",
    small: true
  },
  {
    num: "04",
    kick: "Enterprise workflow",
    name: "Empower",
    desc: "Workflow-based assistance management with a custom engine orchestrating complex multi-step state processes. Modular Clean Architecture.",
    tags: ["Workflow Engine", "Clean Arch", "MVVM"],
    origin: "Code94 Labs · Contract",
    small: true
  },
  {
    num: "05",
    kick: "Personal · Live in production",
    name: "Personal App",
    desc: "Solo-built Flutter app — full product lifecycle from architecture to App Store & Play Store publishing. Details on request.",
    tags: ["Flutter", "Firebase", "Solo-built", "Published"],
    origin: "Live",
    live: true,
    small: true
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
              <Reveal key={p.num} delay={idx * 0.1} className={`${styles.pc} ${p.featured ? styles.pcFeat : styles.pcSide}`}>
                <div className={styles.pcVis} style={p.side ? { background: "linear-gradient(135deg,#0b0f1a,#0e1a2e)", fontSize: "2.5rem" } : {}}>
                  {!p.side && <div className={styles.visGlow} />}
                  {p.featured && (
                    <span className={styles.featBadge}>
                      <svg width="9" height="9" fill="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      FEATURED
                    </span>
                  )}
                  {p.featured && (
                    <div className={styles.phoneStack}>
                      <div className={`${styles.ph} ${styles.phSm}`}><span>📦</span><div className={styles.phBar} /></div>
                      <div className={`${styles.ph} ${styles.phLg}`}><span>🛒</span><div className={styles.phBar} /></div>
                    </div>
                  )}
                  {p.side && (
                    <>
                      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%,rgba(42,184,165,.15) 0%,transparent 70%)" }} />
                      <span style={{ position: "relative", zIndex: 1 }}>💬</span>
                    </>
                  )}
                </div>
                <div className={`${styles.pcBody} ${p.featured ? styles.pcBodyFeat : ""}`}>
                  <div className={styles.pnum}>{p.num}</div>
                  <p className={styles.pkick}>{p.kick}</p>
                  <h3 className={styles.pname}>{p.name}</h3>
                  <p className={styles.pdesc}>{p.desc}</p>
                  {p.metrics && (
                    <div className={styles.pmet}>
                      {p.metrics.map((m, i) => (
                        <div key={i}><div className={styles.mN}>{m.n}</div><div className={styles.mL}>{m.l}</div></div>
                      ))}
                    </div>
                  )}
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

          <div className={styles.bentoBot}>
            {projects.slice(2).map((p, idx) => (
              <Reveal key={p.num} delay={idx * 0.1 + 0.2} className={`${styles.pc} ${styles.pcSm} ${p.live ? styles.pcLive : ""}`}>
                {p.live && <div className={styles.liveBar} />}
                <div className={styles.pcBody}>
                  <div className={styles.pnum} style={p.live ? { color: "rgba(22,163,74,.18)" } : {}}>{p.num}</div>
                  <p className={styles.pkick} style={{ color: p.num === "03" ? "var(--teal)" : p.num === "04" ? "var(--amber)" : "var(--green)" }}>{p.kick}</p>
                  <h3 className={styles.pname} style={p.live ? { color: "var(--green)" } : {}}>{p.name}</h3>
                  <p className={styles.pdesc}>{p.desc}</p>
                  <div className={styles.ptags}>
                    {p.tags.map(tag => (
                      <span key={tag} className="chip" style={p.live ? { borderColor: "rgba(22,163,74,.2)", color: "var(--green)" } : {}}>{tag}</span>
                    ))}
                  </div>
                  <div className={styles.pfoot}>
                    {p.live ? (
                      <span className={styles.porigin} style={{ color: "var(--green)" }}><span className={`${styles.pulse} ${styles.pulseGreen}`} />Live</span>
                    ) : (
                      <span className={styles.porigin}><span className={styles.pdot} />{p.origin}</span>
                    )}
                    {p.live && <a href="mailto:umakaranuma1126@gmail.com" style={{ fontFamily: "var(--ff-m)", fontSize: "0.68rem", color: "var(--green)" }}>Details →</a>}
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
