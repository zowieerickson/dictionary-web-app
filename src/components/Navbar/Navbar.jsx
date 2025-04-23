import IconApp from '../../assets/images/logo.svg?react'
import IconMoon from '../../assets/images/icon-moon.svg?react'
import styles from './Navbar.module.css'
import FontDropdownSelector from '../FontDropdownSelector/FontDropdownSelector.jsx'
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'


export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <a href="/"><IconApp/></a>
            <div className={styles.controls}>
                <FontDropdownSelector/>
                <div className='vertical-divider'></div>
                <ThemeToggle />
                <IconMoon />
            </div>
        </nav>
    )
}