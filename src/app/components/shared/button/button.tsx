import { Download } from "lucide-react";
import styles from "./button.module.css";

export interface ButtonProps {
    text: string
    href?: string;
    download?: boolean;
}

export default function Button({ text, href, download }: ButtonProps) {

    if (href) {
        return (
            <a href={href} download={download}>
                <button className={styles.button}>
                    <span className={styles.inner}>
                        {text}
                        <Download size={18} className={styles.icon} />
                    </span>
                </button>
            </a>
        );
    }

    return (
        <button className={styles['button']}>{text}</button>
    )
}