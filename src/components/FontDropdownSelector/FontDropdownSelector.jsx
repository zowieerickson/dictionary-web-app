import { useEffect, useState, useRef } from 'react'
import ArrowDownIcon from '../../assets/images/icon-arrow-down.svg?react'
import styles from './FontDropdownSelector.module.css'

export default function FontDropdownSelector() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const fontDropdownRef = useRef(null)
    const fontBtnRef = useRef(null)
    const dropdownOpenRef = useRef(dropdownOpen)

    useEffect(() => {
        dropdownOpenRef.current = dropdownOpen
    }, [dropdownOpen])

    useEffect(() => {
        function handleDocumentClick(e) {
            console.log(e.target, dropdownOpen)
            if (
                !fontBtnRef.current.contains(e.target) &&
                !fontDropdownRef.current.contains(e.target) &&
                dropdownOpenRef.current === true
            ) {
                setDropdownOpen(false)
            }
        }

        document.addEventListener("click", handleDocumentClick)

        return () => {
            document.removeEventListener("click", handleDocumentClick)
        }
    }, [])

    return (
        <>
            <button onClick={() => setDropdownOpen(prev => !prev)} ref={fontBtnRef} className={styles.fontSelector} >
                Sans Serif
                <ArrowDownIcon/>
            </button>
            <ul 
                className={`${styles.fontsList} ${dropdownOpen ? 'visible' : ''}`}
                ref={fontDropdownRef}
            >
                <li>Sans Serif</li>
                <li>Serif</li>
                <li>Mono</li>
            </ul>
        </>
    )
}