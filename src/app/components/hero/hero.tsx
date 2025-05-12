"use client"

import { Volume2 } from "lucide-react"
import Button from "../shared/button/button"
import styles from "./hero.module.css"

export default function Hero() {
    function playNameAudio() {
        const audio = new Audio("/audio/kyra-pronunciation.mp3")
        audio.play();
    }
    return (
        <div className={styles.heroContainer}>
            <div className={styles.titleSection}>
                <h1 className={styles.title}>FULL STACK</h1>
                <h1 className={styles.titleSecondary}>DEVELOPER</h1>
            </div>

            <p className={styles.aboutMe}>Hi! I'm Kyra
                <button
                    onClick={playNameAudio}
                    className={styles.soundButton}
                    aria-label="Hear how to pronounce Kyra"
                    title="Pronounced: Key-ruh">
                    <Volume2 size={22} />
                </button>, a full stack developer, with a passion for building full stack applications focused on the user experience.</p>

            <Button text="Resume" href="/resume/Kyra-Moore-Resume.pdf" download />
        </div>
    )
}