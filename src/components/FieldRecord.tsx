import { fieldRecord } from "@/data/content";
import { Reveal } from "./Reveal";
import styles from "./FieldRecord.module.css";

/**
 * Field Record: the dark band. Experience and education as a filed record —
 * definition list and plain list, no cards. Education is the completed
 * schooling only (SMAN 110 Jakarta Utara).
 */
export function FieldRecord() {
  const { experience, educationCompleted } = fieldRecord;
  return (
    <section className={styles.band} id="record" aria-labelledby="record-heading">
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.heading} id="record-heading">
            {fieldRecord.heading}
          </h2>
        </Reveal>
        <div className={styles.columns}>
          <div>
            <h3 className={styles.subheading}>Experience</h3>
            <dl className={styles.record}>
              <div className={styles.entry}>
                <dt>Role</dt>
                <dd>{experience.role}</dd>
              </div>
              <div className={styles.entry}>
                <dt>Employer</dt>
                <dd>{experience.employer}</dd>
              </div>
              <div className={styles.entry}>
                <dt>Placement</dt>
                <dd>{experience.placement}</dd>
              </div>
              <div className={styles.entry}>
                <dt>Period</dt>
                <dd>{experience.period}</dd>
              </div>
              <div className={styles.entry}>
                <dt>Location</dt>
                <dd>{experience.location}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className={styles.subheading}>Education</h3>
            <dl className={styles.record}>
              <div className={styles.entry}>
                <dt>Completed</dt>
                <dd>
                  {`${educationCompleted.school} — ${educationCompleted.field}, ${educationCompleted.period}`}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
