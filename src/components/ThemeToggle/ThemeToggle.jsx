import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'
import IconMoon from '../../assets/images/icon-moon.svg?react'

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode)

    }, [darkMode])

    return (
        <>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    id="toggle"
                    checked={darkMode}
                    onChange={() => setDarkMode(prev => !prev)}
                />
                <span className={styles.slider}></span>
            </label>
            <IconMoon className={styles.iconMoon} onClick={() => setDarkMode(prev => !prev)}/>
        </>
    )
}