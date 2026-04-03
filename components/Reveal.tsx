"use client";

import React, { useEffect, useRef } from "react";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}

const Reveal = ({ children, delay = 0, className = "", tag = "div", ...rest }: RevealProps) => {
  const ref = useRef<HTMLElement>(null);
  const Tag = tag as any;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -30px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Tag
      ref={ref as any}
      className={`rv ${className}`}
      style={{ transitionDelay: `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
