import AppIcon from '../../assets/images/logo.svg?react'
import ArrowDownIcon from '../../assets/images/icon-arrow-down.svg?react'
import styles from './Navbar.module.css'


export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <a href="/"><AppIcon/></a>
            <div className={styles.controls}>
                <button className={styles.fontSelector}>
                    Sans Serif
                    <ArrowDownIcon/>
                </button>
                <ul className={styles.fontsList}>
                    <li>Sans Serif</li>
                    <li>Serif</li>
                    <li>Mono</li>
                </ul>
                <div className='vertical-divider'></div>
            </div>
        </nav>
    )
}