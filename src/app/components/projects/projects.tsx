"use-client"

import Header from "../shared/header/header"
import styles from "./projects.module.css"

export default function Projects() {
    return (
        <div className={styles.projectContainer}>
            <Header title="PROJECTS" />
        </div>
    )
}