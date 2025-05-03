import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        document.body.className = darkMode ? "dark-mode" : ""

    }, [darkMode])

    return (
        <>
            <label className={styles.switch}>
                <input
                    onClick={() => setDarkMode(prev => !prev)}
                    type="checkbox"
                    id="toggle"
                    checked={darkMode}
                />
                <span className={styles.slider}></span>
            </label>
        </>
    )
}