import styles from "./loading-screen.module.css";
import clsx from "clsx";

interface LoadingScreenProps {
    hidden: boolean;
}

export default function LoadingScreen({ hidden }: LoadingScreenProps) {
    return (
        <div className={clsx(styles.loader, hidden && styles.hidden)}>
            <h1 className={styles.loaderText}>KYRA MOORE</h1>
        </div>
    )
}