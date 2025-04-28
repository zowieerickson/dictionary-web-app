import styles from './LoadingBar.module.css'

export default function LoadingBar() {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.loader}></div>
        </div>
    )
}