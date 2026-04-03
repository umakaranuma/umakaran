"use client";

import React from "react";
import Reveal from "./Reveal";
import styles from "./Services.module.css";

const services = [
  {
    icon: "📱",
    name: "Cross-Platform Mobile App Development",
    desc: "End-to-end Flutter apps for Android & iOS from a single codebase. Clean Architecture, BLoC, full Firebase integration, and App Store/Play Store publishing."
  },
  {
    icon: "⚡",
    name: "Feature Enhancement & App Optimization",
    desc: "Improve your existing Flutter app — reduce startup time, fix memory leaks, upgrade architecture, and implement missing features."
  },
  {
    icon: "🔌",
    name: "API & Backend Integration",
    desc: "Connect Flutter apps to REST APIs, GraphQL, WebSocket, and Firebase. Robust error handling, token refresh, and secure auth flows via Dio."
  },
  {
    icon: "💳",
    name: "Payment Gateway & In-App Purchases",
    desc: "Integrate Stripe, payment gateways, and subscription billing into your Flutter app, with full transaction management."
  },
  {
    icon: "🔧",
    name: "App Maintenance & Technical Support",
    desc: "Ongoing maintenance, bug fixes, dependency upgrades, Crashlytics monitoring, and performance tuning for both platforms."
  },
  {
    icon: "🏗️",
    name: "Architecture Consulting & Code Review",
    desc: "Audit your codebase, refactor to Clean Architecture, establish BLoC patterns, set up CI/CD pipelines, and define team coding standards."
  }
];

const Services = () => {
  return (
    <section className="section section--alt" id="services">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="t-cap">// What I offer</span>
          <h2 className="t-h1">Services</h2>
        </Reveal>
        
        <div className={styles.srvGrid}>
          {services.map((svc, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className={styles.srvCard}>
              <div className={styles.srvIcon}>{svc.icon}</div>
              <h3 className={styles.srvName}>{svc.name}</h3>
              <p className={styles.srvDesc}>{svc.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
