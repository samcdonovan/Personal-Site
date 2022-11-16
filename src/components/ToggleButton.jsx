import { React, useState, useEffect } from 'react';

export default function ToggleButton() {

    const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme);
    }, [activeTheme]);

    return (
        <button
            className="navbar-brand mode-icon"
            type="button"
            onClick={() => { setActiveTheme(inactiveTheme) }}>

            <i className={"fa-2x fa-solid" + (activeTheme === "light" ? " fa-sun" : " fa-moon")} alt="sun/moon icon"></i>
            <div className="mode-text-container">
                <p className="mode-text">{activeTheme === "light" ? "Sol!" : "Luna!"}</p>
            </div>
        </button>
    );
}