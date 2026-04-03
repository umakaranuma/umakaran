"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./OSS.module.css";

const packages = [
  {
    plat: "pub.dev · Flutter",
    icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    name: "api_apptimus",
    desc: "A comprehensive Flutter package for simplifying API integration, handling requests, and response parsing with ease.",
    url: "https://pub.dev/packages/api_apptimus"
  },
  {
    plat: "pub.dev · Flutter",
    icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    name: "map_apptimus",
    desc: "A powerful Flutter package for Google Maps integration with built-in search functionality and custom markers.",
    url: "https://pub.dev/packages/map_apptimus"
  },
  {
    plat: "PyPI · Python",
    icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ transform: "rotate(180deg)" }}><path d="m18 15-6-6-6 6"/></svg>,
    name: "djmigrator",
    desc: "A Django utility for seamless migration management. Resolves complex migration conflicts and automates schema updates with just one command.",
    url: "https://pypi.org/project/djmigrator/"
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
