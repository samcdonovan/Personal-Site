import { React, useState, useEffect } from 'react';
import styles from '../styles/components/ToggleButton.module.css';

export default function ToggleButton() {

    const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme);
    }, [activeTheme]);

    return (
        <button
            className={styles['mode-icon'] + " navbar-brand"}
            type="button"
            onClick={() => { setActiveTheme(inactiveTheme) }}>

            <i className={"fa-2x fa-solid" + (activeTheme === "light" ? " fa-sun" : " fa-moon")} alt="sun/moon icon"></i>
            <div className={styles['mode-text-container']}>
                <p className={styles['mode-text']}>{activeTheme === "light" ? "Sol!" : "Luna!"}</p>
            </div>
        </button>
    );
}