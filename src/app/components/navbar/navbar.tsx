"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./navbar.module.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <a className={styles.logo} href="#home">KYRA MOORE</a>

                <ul className={styles.links}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                    <Menu size={24} />
                </button>
            </div>

            {/* Slide-Out Menu */}
            <div className={`${styles.sideMenu} ${menuOpen ? styles.open : ""}`}>
                <button className={styles.exit} onClick={() => setMenuOpen(!menuOpen)}><X size={24} /></button>
                <ul className={styles.list}>
                    <li><a onClick={() => setMenuOpen(false)} href="#home">Home</a></li>
                    <li><a onClick={() => setMenuOpen(false)} href="#about">About</a></li>
                    <li><a onClick={() => setMenuOpen(false)} href="#projects">Projects</a></li>
                    <li><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
