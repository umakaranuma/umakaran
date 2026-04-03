"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./HireMe.module.css";

const HireMe = () => {
  return (
    <section className={styles.hireBand} id="hire">
      <div className={styles.hireInner}>
        <div>
          <Reveal className={styles.hireCap}>// Collaboration</Reveal>
          <Reveal delay={0.1} className={styles.hireTitle}>
            Let’s build something<br /><em>exceptional</em> together
          </Reveal>
          <Reveal delay={0.2} className={styles.hireDesc}>
            I’m available for freelance projects, architectural consulting, or full-time roles starting immediately. If you have a mission-critical mobile project that needs a steady hand, let's talk.
          </Reveal>
          
          <Reveal delay={0.3} className={styles.hireCtas}>
            <a href="mailto:umakaranuma1126@gmail.com" className="btn btn--teal">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              umakaranuma1126@gmail.com
            </a>
            <a href="tel:+94769214278" className={`btn ${styles.btnOutlineDk}`}>
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l1.27-.78a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +94 76 921 4278
            </a>
          </Reveal>
        </div>

        <div className={styles.hireItems}>
          <Reveal delay={0.2} className={styles.hireItem}>
            <div className={styles.hiIcon}>🏗️</div>
            <div>
              <h3 className={styles.hiLbl}>Architecture First</h3>
              <p className={styles.hiDesc}>Don’t build on sand. I establish Clean Architecture from day one to ensure your app scales.</p>
            </div>
          </Reveal>
          <Reveal delay={0.3} className={styles.hireItem}>
            <div className={styles.hiIcon}>🚀</div>
            <div>
              <h3 className={styles.hiLbl}>Ship Speed</h3>
              <p className={styles.hiDesc}>3+ years of experience allows me to move fast without breaking things. Rapid, reliable delivery.</p>
            </div>
          </Reveal>
          <Reveal delay={0.4} className={styles.hireItem}>
            <div className={styles.hiIcon}>🤝</div>
            <div>
              <h3 className={styles.hiLbl}>Team Player</h3>
              <p className={styles.hiDesc}>I mentor juniors, establish standards, and work seamlessly with designers and backend teams.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
