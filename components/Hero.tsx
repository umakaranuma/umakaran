"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <Reveal className={styles.heroStatus}>
            <span className={styles.pulseTeal} />
            Senior Flutter Developer · Available for hire
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className={styles.heroHeading}>
              Umakaran<br />
              <em className={styles.heroHeadingEm}>Ampigaipagan</em>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className={styles.heroDesc}>
            I build production-grade cross-platform mobile apps for Android & iOS — clean architecture, BLoC state management, Firebase ecosystem, and obsessive performance tuning. Based in Jaffna, Sri Lanka · working globally.
          </Reveal>

          <div className={styles.heroSocialsRow}>
            <a href="mailto:umakaranuma1126@gmail.com" className={`${styles.si} ${styles.siEmail}`} aria-label="Email">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener" className={`${styles.si} ${styles.siGh}`} aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a href="https://gitlab.com/YOUR_USERNAME" target="_blank" rel="noopener" className={`${styles.si} ${styles.siGl}`} aria-label="GitLab">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="m21.98 9.686-2.539-7.814a.467.467 0 0 0-.889 0L16.55 7.44H7.45L5.448 1.872a.467.467 0 0 0-.889 0L2.02 9.686l-.001.005a3.274 3.274 0 0 0 1.085 3.667l.007.005.018.014 3.994 2.991 1.976 1.496 1.203.909a.541.541 0 0 0 .655 0l1.203-.909 1.976-1.496 4.012-3.004.007-.006a3.274 3.274 0 0 0 1.085-3.667z"/></svg>
            </a>
            <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener" className={`${styles.si} ${styles.siLi}`} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://pub.dev/publishers/YOUR_DOMAIN" target="_blank" rel="noopener" className={`${styles.si} ${styles.siPd}`} aria-label="pub.dev">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </a>
            <a href="https://pypi.org/user/YOUR_USERNAME" target="_blank" rel="noopener" className={`${styles.si} ${styles.siPy}`} aria-label="PyPI">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.022 0C5.446 0 5.845 2.808 5.845 2.808l.007 2.909h6.27v.874H3.676S0 6.158 0 12.8s3.168 6.408 3.168 6.408h1.89v-3.082s-.102-3.167 3.115-3.167h5.37s3.013.048 3.013-2.913V3.083S16.97 0 12.022 0zm-2.97 1.783a.97.97 0 1 1 0 1.94.97.97 0 0 1 0-1.94zM11.978 24c6.576 0 6.177-2.808 6.177-2.808l-.007-2.909h-6.27v-.874h8.446S24 17.842 24 11.2s-3.168-6.408-3.168-6.408h-1.89v3.082s.102 3.167-3.115 3.167h-5.37s-3.013-.048-3.013 2.913v5.963S7.03 24 11.978 24zm2.97-1.783a.97.97 0 1 1 0-1.94.97.97 0 0 1 0 1.94z"/></svg>
            </a>
            <a href="tel:+94769214278" className={`${styles.si} ${styles.siPhone}`} aria-label="Phone">
               <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l1.27-.78a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener" className={`${styles.si} ${styles.siTw}`} aria-label="Twitter/X">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          <Reveal delay={0.4} className={styles.heroCtas}>
            <a href="#hire" className="btn btn--teal">Hire Me</a>
            <a href="#work" className={`btn ${styles.btnOutline}`}>View Projects</a>
            <a href="mailto:umakaranuma1126@gmail.com" className={`btn ${styles.btnOutline}`}>
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email Me
            </a>
          </Reveal>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.avWrap}>
            <div className={styles.avOuter}>
              <div className={styles.avInner}>
                <div className={styles.avI}>UA</div>
                <div className={styles.avISub}>FLUTTER · DEV</div>
              </div>
            </div>
            <div className={styles.avBadge}>
              <span className={styles.pulseGreen} />
              Available for projects
            </div>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statsInner}>
              <div className={styles.stat}><div className={styles.statN}>3+</div><div className={styles.statL}>Years exp</div></div>
              <div className={styles.stat}><div className={styles.statN}>5+</div><div className={styles.statL}>Apps shipped</div></div>
              <div className={styles.stat}><div className={styles.statN}>3</div><div className={styles.statL}>OSS packages</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
