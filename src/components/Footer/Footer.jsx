import styles from './Footer.module.css'
import IconNewWindow from '../../assets/images/icon-new-window.svg?react'

export default function Footer({ data }) {
    if (!data) return


    return (
        <>
        <footer className={styles.footer}>
            <hr className={styles.footerLine}/>
            <div className={styles.source}>
                <h4 className={`${styles.sourceTitle} underline`}>Source</h4>
                <a className={`${styles.sourceLink} underline`} href={data[0].sourceUrls[0]} target="_blank" rel="noopener noreferrer">
                    {data[0].sourceUrls[0]}
                    <IconNewWindow />
                </a>
            </div>
        </footer>
        </>
    )
}