"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./OSS.module.css";

const packages = [
  {
    plat: "pub.dev · Flutter",
    icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    name: "Package Name 01",
    desc: "A Flutter package solving a specific developer pain point. Replace with your real package name and what it does for the Flutter community.",
    url: "https://pub.dev/packages/YOUR_PACKAGE_1"
  },
  {
    plat: "pub.dev · Flutter",
    icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    name: "Package Name 02",
    desc: "Second Flutter package on Pub.dev. Replace with your real package description and the problem it solves.",
    url: "https://pub.dev/packages/YOUR_PACKAGE_2"
  },
  {
    plat: "PyPI · Python",
    icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ transform: "rotate(180deg)" }}><path d="m18 15-6-6-6 6"/></svg>,
    name: "Package Name 03",
    desc: "Python package on PyPI showing cross-language range. Replace with your real package name and description.",
    url: "https://pypi.org/project/YOUR_PACKAGE_3"
  }
];

const OSS = () => {
  return (
    <section className="section section--alt" id="oss">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// Open source</span>
          <h2 className="t-h1">Giving back to<br /><em className="hi">the community</em></h2>
        </Reveal>

        <div className={styles.ossGrid}>
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.1} tag="article" className={styles.ossCard}>
              <div className={styles.ossPlat}>
                {pkg.icon}
                {pkg.plat}
              </div>
              <h3 className={styles.ossName}>{pkg.name}</h3>
              <p className={styles.ossDesc}>{pkg.desc}</p>
              <a href={pkg.url} target="_blank" rel="noopener" className={styles.ossLink}>
                View on {pkg.plat.split(" ")[0]} ↗
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OSS;
