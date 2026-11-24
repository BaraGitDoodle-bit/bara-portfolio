import { profile } from "@/data/content";
import styles from "./ContactFooter.module.css";

/**
 * Contact footer: one column. Email, LinkedIn, and all three authorized
 * GitHub accounts (primary first). No phone number anywhere on the site.
 */
export function ContactFooter() {
  return (
    <footer className={styles.footer} id="contact" aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <h2 className={styles.heading} id="contact-heading">
          Contact
        </h2>
        <p className={styles.line}>
          Email:{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p className={styles.line}>
          LinkedIn:{" "}
          <a href={profile.linkedin.url}>{profile.linkedin.label} — Nur Toha Mubarak</a>
        </p>
        <h3 className={styles.subheading}>GitHub</h3>
        <ul className={styles.accounts}>
          {profile.githubAccounts.map((account) => (
            <li key={account.url} className={styles.account}>
              <a href={account.url} className={styles.handle}>
                {account.handle}
              </a>
              <span className={styles.note}>{account.note}</span>
            </li>
          ))}
        </ul>
        <p className={styles.colophon}>
          © 2026 Nur Toha Mubarak. Static site, no trackers.
        </p>
      </div>
    </footer>
  );
}
