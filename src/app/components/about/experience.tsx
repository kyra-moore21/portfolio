import styles from "./experience.module.css";
import experience from "../../data/experience.json";
import Header from "../shared/header/header";

export default function Experience() {
    return (
        <div>
            <div className={styles.header}>
                <Header title="EXPERIENCE & EDUCATION" />
            </div>

            <div className={styles.grid}>
                {experience.map((item, index) => (
                    <div key={index} className="stackBackground">
                        <div className={`${styles.experienceItem}`}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <h4 className={styles.expBadge}>{item.company}</h4>
                            <h4 className={styles.expBadge}>{item.date}</h4>
                            <ul className={styles.list}>
                                {item.bullets.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
                }
            </div>
        </div >
    )
}