"use client";

import React, { useState } from "react";
import Reveal from "./Reveal";
import ServiceModal from "./ServiceModal";
import styles from "./Services.module.css";

const services = [
  {
    icon: "📱",
    name: "Cross-Platform Mobile App Development",
    desc: "End-to-end Flutter application development for Android and iOS from a single codebase. I handle everything: UI/UX implementation, Clean Architecture setup, BLoC state management, Firebase integration, REST API connectivity, and full App Store/Play Store publishing with code signing and build flavors.",
    tags: ["Flutter", "Dart", "Clean Architecture", "BLoC", "Firebase", "REST APIs", "CI/CD", "Play Store", "App Store"]
  },
  {
    icon: "⚡",
    name: "Feature Enhancement & App Optimization",
    desc: "Already have a Flutter app that needs improvement? I audit your codebase, identify bottlenecks, refactor to Clean Architecture patterns, and implement missing features. Past results: 30% faster startup and 40% fewer state bugs.",
    tags: ["Performance Tuning", "Code Refactoring", "BLoC Migration", "Lazy Loading", "Memory Optimization"]
  },
  {
    icon: "🔌",
    name: "API & Backend Integration",
    desc: "Seamlessly connect your Flutter app to any backend. Robust REST API integration using Dio, token refresh mechanisms, secure auth flows, WebSocket connections via Ably, and GraphQL — with comprehensive error handling throughout.",
    tags: ["REST APIs", "GraphQL", "WebSocket", "Ably", "Dio", "Token Refresh", "OAuth", "Firebase"]
  },
  {
    icon: "💳",
    name: "Payment Gateway & In-App Purchases",
    desc: "Full payment integration for Flutter — Stripe subscriptions, one-time purchases, in-app purchases, and custom payment gateway SDKs. Implemented in live e-commerce and e-learning products with complete transaction management.",
    tags: ["Stripe", "Payment Gateway", "Subscriptions", "In-App Purchases", "Transaction Management"]
  },
  {
    icon: "🔧",
    name: "App Maintenance & Technical Support",
    desc: "Ongoing maintenance for your Flutter app: dependency updates, SDK upgrades, bug fixes, Firebase Crashlytics monitoring, performance regression testing, and platform-specific issues on both Android and iOS.",
    tags: ["Bug Fixes", "Dependency Updates", "Crashlytics", "Performance Monitoring", "Android", "iOS"]
  },
  {
    icon: "🏗️",
    name: "Architecture Consulting & Code Review",
    desc: "I audit your Flutter codebase and provide a detailed report with actionable recommendations. Then help implement Clean Architecture, establish BLoC patterns, set up CI/CD on Codemagic/GitHub Actions, and mentor your developers.",
    tags: ["Code Audit", "Clean Architecture", "CI/CD Setup", "GitHub Actions", "Codemagic", "Team Standards", "Mentoring"]
  }
];

const Services = () => {
  const [activeSvc, setActiveSvc] = useState<typeof services[0] | null>(null);

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
              <div onClick={() => setActiveSvc(svc)} style={{ cursor: "pointer", height: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className={styles.srvIcon}>{svc.icon}</div>
                <h3 className={styles.srvName}>{svc.name}</h3>
                <p className={styles.srvDesc}>
                  {svc.desc.length > 120 ? svc.desc.substring(0, 115) + "..." : svc.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <ServiceModal 
        isOpen={!!activeSvc} 
        onClose={() => setActiveSvc(null)} 
        service={activeSvc} 
      />
    </section>
  );
};

export default Services;
