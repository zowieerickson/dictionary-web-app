import AppIcon from '../../assets/images/logo.svg?react'
import styles from './Navbar.module.css'
import FontDropdownSelector from '../FontDropdownSelector/FontDropdownSelector.jsx'


export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <a href="/"><AppIcon/></a>
            <div className={styles.controls}>
                <FontDropdownSelector/>
                <div className='vertical-divider'></div>
            </div>
        </nav>
    )
}