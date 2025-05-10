import IconApp from '../../assets/images/logo.svg?react'
import styles from './Header.module.css'
import FontDropdownSelector from '../FontDropdownSelector/FontDropdownSelector.jsx'
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'


export default function Header() {
    return (
        <header className={styles.header}>
            <a href="/"><IconApp/></a>
            <div className={styles.controls}>
                <FontDropdownSelector/>
                <div className='vertical-divider'></div>
                <ThemeToggle />
            </div>
        </header>
    )
}