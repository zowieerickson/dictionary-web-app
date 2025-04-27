import styles from './Footer.module.css'

export default function Footer({ data }) {
    if (!data) return


    return (
        <footer className={styles.footer}>
            <h4>Source</h4>
            <p><a href={data[0].sourceUrls[0]} target="_blank" rel="noopener noreferrer">{data[0].sourceUrls[0]}</a></p>
        </footer>
    )
}