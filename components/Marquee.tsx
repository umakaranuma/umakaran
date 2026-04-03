"use client";

import React from "react";
import styles from "./Marquee.module.css";

const Marquee = () => {
  const items = [
    "Production-Ready Flutter", "Clean Architecture", "BLoC State Management",
    "Firebase Ecosystem", "REST API Integration", "App Store Publishing",
    "Performance Tuning", "Custom App Development"
  ];

  return (
    <div className={styles.mqWrap}>
      <div className={styles.mqTrack}>
        {/* Double the items for seamless loop */}
        {[...items, ...items].map((text, i) => (
          <div key={i} className={styles.mqItem}>
            <div className={styles.mqDot} />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
