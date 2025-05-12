import styles from "./skills.module.css";
import skills from "../../data/skills.json";
import Header from "../shared/header/header";

export default function Skills() {
    return (
        <div className={`${styles.skillsSection}`}>
            <Header title={"MY STACK"} />
            <div className={styles.skillsGrid}>
                {skills.map((group, i) => (
                    <div key={i} className="stackBackground">
                        <h4 className={styles.skillHeader}>{group.category}</h4>
                        <div className={styles.badgeGroup}>
                            {group.items.map((item, idx) => (
                                <span key={idx} className={styles.skillBadge}>
                                    {item}
                                </span>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}