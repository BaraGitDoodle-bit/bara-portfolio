"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { hero, profile } from "@/data/content";
import styles from "./Hero.module.css";

/**
 * The one orchestrated page-load moment: the hero assembles like a field
 * document being laid on the desk — rule draws, headline rises, portrait
 * panel settles, signal bar arrives last. Runs once. Skipped entirely
 * when the user prefers reduced motion (content stays visible: gsap.from).
 */
export function Hero() {
  const scope = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = scope.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(`.${styles.rule}`, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.5,
      })
        .from(`.${styles.rise}`, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
        }, "-=0.2")
        .from(`.${styles.panel}`, {
          y: 16,
          opacity: 0,
          duration: 0.55,
        }, "-=0.35")
        .from(`.${styles.stamp}`, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.35,
        }, "-=0.25");
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} id="top" ref={scope} aria-label="Introduction">
      <div className={styles.grid}>
        <div className={styles.text}>
          <div className={styles.rule} aria-hidden="true" />
          <h1 className={`${styles.title} ${styles.rise}`}>{hero.title}</h1>
          <p className={`${styles.statement} ${styles.rise}`}>{hero.statement}</p>
          <p className={`${styles.pitch} ${styles.rise}`}>{hero.pitch}</p>
          <p className={`${styles.logLine} ${styles.rise}`}>{hero.logLine}</p>
          <div className={`${styles.actions} ${styles.rise}`}>
            <a className={styles.primaryAction} href="#work">
              See the work
            </a>
            <a href={profile.githubAccounts[0].url}>GitHub</a>
          </div>
          <div className={styles.stamp} aria-hidden="true" />
        </div>
        <figure className={`${styles.panel} ${styles.figure}`}>
          <Image
            src="/portrait.jpg"
            alt="Portrait of Nur Toha Mubarak"
            width={720}
            height={720}
            priority
            fetchPriority="high"
          />
          <figcaption className={styles.caption}>{hero.portraitCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
