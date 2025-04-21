import { useState } from 'react'
import ArrowDownIcon from '../../assets/images/icon-arrow-down.svg?react'
import styles from './FontDropdownSelector.module.css'

export default function FontDropdownSelector() {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    console.log(dropdownOpen)

    return (
        <>
            <button onClick={() => setDropdownOpen(prev => !prev)} className={styles.fontSelector} >
                Sans Serif
                <ArrowDownIcon/>
            </button>
            <ul className={`${styles.fontsList} ${dropdownOpen ? 'visible' : ''}`}>
                <li>Sans Serif</li>
                <li>Serif</li>
                <li>Mono</li>
            </ul>
        </>
    )
}