import { kaggle } from "@/data/content";
import styles from "./KaggleTable.module.css";

/**
 * Data table: the Kaggle evidence is figures, so it is shown as figures —
 * mono numerals, no invented deltas, no profile link.
 */
export function KaggleTable() {
  return (
    <div className={styles.block}>
      <h3 className={styles.heading}>{kaggle.heading}</h3>
      <p className={styles.note}>{kaggle.note}</p>
      <table className={styles.table}>
        <caption className={styles.caption}>
          Best public scores and submission references, Kaggle account
          dokumenhilang.
        </caption>
        <thead>
          <tr>
            <th scope="col">Competition</th>
            <th scope="col">Best public score</th>
            <th scope="col">Submission ref</th>
          </tr>
        </thead>
        <tbody>
          {kaggle.rows.map((row) => (
            <tr key={row.ref}>
              <th scope="row">{row.competition}</th>
              <td>
                <span className={styles.score}>{row.score}</span>{" "}
                <span className={styles.scoreLabel}>{row.scoreLabel}</span>
              </td>
              <td>
                <span className={styles.ref}>{row.ref}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
