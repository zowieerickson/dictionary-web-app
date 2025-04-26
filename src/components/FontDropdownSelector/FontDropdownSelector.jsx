import { useEffect, useState, useRef } from 'react'
import ArrowDownIcon from '../../assets/images/icon-arrow-down.svg?react'
import styles from './FontDropdownSelector.module.css'

export default function FontDropdownSelector() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [font, setFont] = useState(null)
    const fontDropdownRef = useRef(null)
    const fontBtnRef = useRef(null)
    const dropdownOpenRef = useRef(dropdownOpen)

    useEffect(() => {
        dropdownOpenRef.current = dropdownOpen
    }, [dropdownOpen])

    useEffect(() => {
        function handleDocumentClick(e) {
            if (
                !fontBtnRef.current.contains(e.target) &&
                !fontDropdownRef.current.contains(e.target) &&
                dropdownOpenRef.current === true
            ) {
                setDropdownOpen(false)
            }
        }

        function handleKeydown(e) {
            if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
                setDropdownOpen(false)
            }
        }

        document.addEventListener("click", handleDocumentClick)
        document.addEventListener("keydown", handleKeydown)

        return () => {
            document.removeEventListener("click", handleDocumentClick)
            document.removeEventListener("keydown", handleKeydown)
        }
    }, [])

    useEffect(() => {
        document.body.className = font
    }, [font])

    function handleFontSelection(e) {
        const fontFamily = e.target.className;

        if (fontFamily === 'sans-serif' || fontFamily === 'serif' || fontFamily === 'mono') {
            setFont(fontFamily)
        }
    }

    return (
        <>
            <button onClick={() => setDropdownOpen(prev => !prev)} ref={fontBtnRef} className={styles.fontSelector} >
                Sans Serif
                <ArrowDownIcon/>
            </button>
            <ul onClick={handleFontSelection}
                className={`${styles.fontsList} ${dropdownOpen ? 'visible' : ''}`}
                ref={fontDropdownRef}
            >
                <li className='sans-serif'>Sans Serif</li>
                <li className='serif'>Serif</li>
                <li className='mono'>Mono</li>
            </ul>
        </>
    )
}