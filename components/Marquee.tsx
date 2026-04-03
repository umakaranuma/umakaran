"use client";

import React from "react";
import styles from "./Marquee.module.css";

const items = [
  "Clean Architecture",
  "BLoC State Management",
  "Android & iOS",
  "Firebase Ecosystem",
  "CI/CD Pipelines",
  "Open Source Contributor",
  "95%+ Test Coverage",
  "Dart & Flutter Expert"
];

const Marquee = () => {
  return (
    <div className={styles.mqWrap} aria-hidden="true">
      <div className={styles.mqTrack}>
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className={styles.mqItem}>
            <span className={styles.mqDot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
