import { nanoOrCloud } from "@/data/content";
import { Reveal } from "./Reveal";
import styles from "./FlagshipProject.module.css";

/**
 * Full-width panel for the flagship project: the one piece of work with a
 * live deployed app and four verifiable links. The visual block is an
 * honest typographic placeholder — flat, no fake UI — captioned as such.
 * It is the single element on the page allowed a shadow (elevation reason:
 * flagship), per DESIGN.md.
 */
export function FlagshipProject() {
  return (
    <Reveal>
      <article className={styles.panel} aria-labelledby="nanoorcloud-heading">
        <div className={styles.visual} role="img" aria-label="Placeholder visual for NanoOrCloud. A real screenshot is to be added.">
          <span className={styles.visualWord}>NanoOrCloud</span>
          <span className={styles.visualNote}>On-device / cloud routing</span>
        </div>
        <p className={styles.caption}>
          Visual placeholder — a real screenshot of the live app is to follow.
        </p>
        <div className={styles.body}>
          <p className={styles.kind}>{nanoOrCloud.kind}</p>
          <h3 className={styles.name} id="nanoorcloud-heading">
            {nanoOrCloud.name}
          </h3>
          <p className={styles.description}>{nanoOrCloud.description}</p>
          <ul className={styles.tags} aria-label="Technologies">
            {nanoOrCloud.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p className={styles.outcome}>{nanoOrCloud.outcome}</p>
          <ul className={styles.links} aria-label="NanoOrCloud links">
            {nanoOrCloud.links.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}
