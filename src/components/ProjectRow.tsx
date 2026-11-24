import { dailyDrift } from "@/data/content";
import styles from "./ProjectRow.module.css";

/**
 * Log-row treatment for Daily Drift: the evidence is two links and a
 * one-line description, so it gets a ruled row, not a card.
 */
export function ProjectRow() {
  return (
    <article className={styles.row} aria-labelledby="daily-drift-heading">
      <div className={styles.main}>
        <p className={styles.kind}>{dailyDrift.kind}</p>
        <h3 className={styles.name} id="daily-drift-heading">
          {dailyDrift.name}
        </h3>
        <p className={styles.description}>{dailyDrift.description}</p>
        <p className={styles.outcome}>{dailyDrift.outcome}</p>
      </div>
      <ul className={styles.links} aria-label="Daily Drift links">
        {dailyDrift.links.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </article>
  );
}
