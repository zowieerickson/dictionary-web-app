import { useEffect, useState, useRef } from 'react'
import ArrowDownIcon from '../../assets/images/icon-arrow-down.svg?react'
import styles from './FontDropdownSelector.module.css'

export default function FontDropdownSelector() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [fontStyle, setFontStyle] = useState(null)
    const [fontText, setFontText] = useState('Sans Serif')
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
        const fonts = ['serif', 'mono', 'sans-serif']
        document.body.classList.remove(...fonts)
        document.body.classList.add(fontStyle)
    }, [fontStyle])

    function handleFontSelection(e) {
        const fontFamily = e.target.className;
        if (fontFamily === 'sans-serif' || fontFamily === 'serif' || fontFamily === 'mono') {
            setFontStyle(fontFamily)
        }

        if (e.target.localName === 'li') {
            const selectedFontText = e.target.innerText
            setFontText(selectedFontText)
        }
    }

    return (
        <>
            <button onClick={() => setDropdownOpen(prev => !prev)} ref={fontBtnRef} className={styles.fontSelector} >
                {fontText}
                <ArrowDownIcon/>
            </button>
            <ul onClick={handleFontSelection}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleFontSelection(e)
                    }
                }}
                className={styles.fontsList} style={{display: dropdownOpen ? 'block' : 'none'}}
                ref={fontDropdownRef}
                role="listbox"
            >
                <li tabIndex="0" role="option" className='sans-serif'>Sans Serif</li>
                <li tabIndex="0" role="option" className='serif'>Serif</li>
                <li tabIndex="0" role="option" className='mono'>Mono</li>
            </ul>
        </>
    )
}