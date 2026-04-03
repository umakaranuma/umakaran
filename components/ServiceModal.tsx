"use client";

import React, { useEffect } from "react";
import styles from "./ServiceModal.module.css";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: string;
    name: string;
    desc: string;
    tags?: string[];
  } | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!service) return null;

  return (
    <div 
      className={`${styles.mOverlay} ${isOpen ? styles.open : ""}`} 
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-hidden={!isOpen}
    >
      <div className={styles.mBox}>
        <button className={styles.mClose} onClick={onClose} aria-label="Close modal">
          ✕
        </button>
        <div className={styles.mIcon}>{service.icon}</div>
        <h3 className={styles.mTitle}>{service.name}</h3>
        <p className={styles.mBody}>{service.desc}</p>
        
        {service.tags && (
          <div className={styles.mTags}>
            {service.tags.map((tag) => (
              <span key={tag} className={styles.mTag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="mailto:umakaranuma1126@gmail.com" className="btn btn--teal">
            Book a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
