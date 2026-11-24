import { about } from "@/data/content";
import { Reveal } from "./Reveal";
import styles from "./About.module.css";

export function About() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-heading">
      <Reveal>
        <h2 className={styles.heading} id="about-heading">
          {about.heading}
        </h2>
      </Reveal>
      <div className={styles.body}>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
