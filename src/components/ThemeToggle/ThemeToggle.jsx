import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {

    return(
        <>
            <label className={styles.switch}>
                <input type="checkbox" id="toggle" />
                <span className={styles.slider}></span>
            </label>
        </>
    )
}