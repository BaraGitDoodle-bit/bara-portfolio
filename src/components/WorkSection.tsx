import { FlagshipProject } from "./FlagshipProject";
import { ProjectRow } from "./ProjectRow";
import { KaggleTable } from "./KaggleTable";
import { SecurityBlock } from "./SecurityBlock";
import { Reveal } from "./Reveal";
import styles from "./WorkSection.module.css";

/**
 * Work section: four treatments matched to four kinds of evidence —
 * flagship panel, log row, data table, plain block. No uniform cards.
 */
export function WorkSection() {
  return (
    <section className={styles.section} id="work" aria-labelledby="work-heading">
      <Reveal>
        <h2 className={styles.heading} id="work-heading">
          Work
        </h2>
      </Reveal>
      <div className={styles.entries}>
        <FlagshipProject />
        <ProjectRow />
        <KaggleTable />
        <SecurityBlock />
      </div>
    </section>
  );
}
