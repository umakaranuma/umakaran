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
            <a href="https://github.com/umakaranuma" target="_blank" rel="noopener" className={`${styles.si} ${styles.siGh}`} aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a href="https://gitlab.com/umakaran" target="_blank" rel="noopener" className={`${styles.si} ${styles.siGl}`} aria-label="GitLab">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="m21.98 9.686-2.539-7.814a.467.467 0 0 0-.889 0L16.55 7.44H7.45L5.448 1.872a.467.467 0 0 0-.889 0L2.02 9.686l-.001.005a3.274 3.274 0 0 0 1.085 3.667l.007.005.018.014 3.994 2.991 1.976 1.496 1.203.909a.541.541 0 0 0 .655 0l1.203-.909 1.976-1.496 4.012-3.004.007-.006a3.274 3.274 0 0 0 1.085-3.667z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/umakaran-ampigaipagan-a91075213/" target="_blank" rel="noopener" className={`${styles.si} ${styles.siLi}`} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://pub.dev/packages/api_apptimus" target="_blank" rel="noopener" className={`${styles.si} ${styles.siPd}`} aria-label="pub.dev">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </a>
            <a href="https://pypi.org/manage/projects/" target="_blank" rel="noopener" className={`${styles.si} ${styles.siPy}`} aria-label="PyPI">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.022 0C5.446 0 5.845 2.808 5.845 2.808l.007 2.909h6.27v.874H3.676S0 6.158 0 12.8s3.168 6.408 3.168 6.408h1.89v-3.082s-.102-3.167 3.115-3.167h5.37s3.013.048 3.013-2.913V3.083S16.97 0 12.022 0zm-2.97 1.783a.97.97 0 1 1 0 1.94.97.97 0 0 1 0-1.94zM11.978 24c6.576 0 6.177-2.808 6.177-2.808l-.007-2.909h-6.27v-.874h8.446S24 17.842 24 11.2s-3.168-6.408-3.168-6.408h-1.89v3.082s.102 3.167-3.115 3.167h-5.37s-3.013-.048-3.013 2.913v5.963S7.03 24 11.978 24zm2.97-1.783a.97.97 0 1 1 0-1.94.97.97 0 0 1 0 1.94z"/></svg>
            </a>
            <a href="https://wa.me/94769214278" target="_blank" rel="noopener" className={`${styles.si} ${styles.siWa}`} aria-label="WhatsApp">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.29-4.115c1.53.912 3.383 1.397 5.27 1.398 5.703 0 10.345-4.642 10.347-10.347.001-2.766-1.077-5.365-3.037-7.327-1.959-1.963-4.558-3.041-7.326-3.041-5.705 0-10.348 4.643-10.35 10.35-.001 1.836.48 3.626 1.391 5.187l-.918 3.356 3.443-.903zm9.884-7.535c-.306-.154-1.813-.894-2.093-.997-.282-.102-.487-.154-.69.155-.204.309-.79.997-.968 1.198-.178.203-.357.228-.663.075-.306-.154-1.293-.476-2.463-1.519-.91-.812-1.524-1.812-1.703-2.12-.178-.309-.019-.476.134-.63.138-.139.306-.356.459-.533.153-.178.204-.306.306-.511.103-.204.051-.383-.025-.533-.077-.154-.69-1.666-.946-2.28-.249-.599-.501-.518-.69-.527-.179-.009-.383-.01-.587-.01s-.536.076-.816.383c-.282.309-1.073 1.047-1.073 2.553s1.099 2.96 1.252 3.165c.153.204 2.163 3.303 5.239 4.629.731.316 1.302.505 1.746.645.735.234 1.404.201 1.933.122.589-.088 1.814-.741 2.069-1.455.255-.715.255-1.328.178-1.455-.077-.127-.282-.204-.588-.358z"/></svg>
            </a>
            <a href="tel:+94769214278" className={`${styles.si} ${styles.siPhone}`} aria-label="Phone">
               <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.06 6.06l1.27-.78a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          </div>

          <Reveal delay={0.4} className={styles.heroCtas}>
            <a href="#hire" className="btn btn--ink btn--sm">Hire Me</a>
            <a href="#work" className={`btn btn--sm ${styles.btnOutline}`}>View Projects</a>
            <a href="/cv.pdf" download className={`btn btn--sm ${styles.btnOutline}`}>
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
          </Reveal>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.avWrap}>
            <div className={styles.avOuter}>
              <div className={styles.avInner}>
                <img src="/profile.jpeg" alt="Umakaran Ampigaipagan" className={styles.avImg} />
                <div className={styles.avFallback}>
                  <div className={styles.avI}>UA</div>
                  <div className={styles.avISub}>FLUTTER · DEV</div>
                </div>
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
