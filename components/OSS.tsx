"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./OSS.module.css";

const ossItems = [
  {
    plat: "Pub.dev · Flutter",
    name: "package_name_1",
    desc: "A Flutter package for simplified state management and utilities. 100+ likes on pub.dev.",
    link: "https://pub.dev/packages/YOUR_PACKAGE"
  },
  {
    plat: "PyPI · Python",
    name: "tool_name_2",
    desc: "CLI tool for automating Flutter CI/CD tasks and metadata synchronization.",
    link: "https://pypi.org/project/YOUR_TOOL"
  },
  {
    plat: "GitHub · Dart",
    name: "repo_name_3",
    desc: "Custom workflow engine reference implementation in Dart for complex states.",
    link: "https://github.com/YOUR_USERNAME/repo"
  }
];

const OSS = () => {
  return (
    <section className="section section--alt" id="oss">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// Giving back</span>
          <h2 className="t-h1">Open Source</h2>
        </Reveal>

        <div className={styles.ossGrid}>
          {ossItems.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className={styles.ossCard}>
              <div className={styles.ossPlat}>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                {item.plat}
              </div>
              <h3 className={styles.ossName}>{item.name}</h3>
              <p className={styles.ossDesc}>{item.desc}</p>
              <a href={item.link} target="_blank" rel="noopener" className={styles.ossLink}>
                View project
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M7 17L17 7M7 7h10v10" /></svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OSS;
