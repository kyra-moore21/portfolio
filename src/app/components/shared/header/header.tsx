import { Sparkles } from "lucide-react";
import styles from "./header.module.css"

export interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    return (
        <h2 className={styles.experienceTitle}>
            <span className={styles.sparkleWrapper}>
                <Sparkles className={styles.sparkleIcon} />
            </span>
            {title}
        </h2>
    )
}