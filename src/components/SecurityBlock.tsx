import { securityResearch } from "@/data/content";
import styles from "./SecurityBlock.module.css";

/**
 * Plain block, deliberately link-free: responsible-disclosure reports are
 * described generically only, by design.
 */
export function SecurityBlock() {
  return (
    <div className={styles.block}>
      <h3 className={styles.heading}>{securityResearch.heading}</h3>
      <p className={styles.text}>{securityResearch.text}</p>
    </div>
  );
}
