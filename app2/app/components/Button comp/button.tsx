'use client'
import styles from "./Button.module.css"

interface BtnProps {
    label: string;
    onClick: () => void
    color?: "green" | "blue" | "red"  // ✅ All lowercase
}

export default function Button({label, onClick, color = "blue"}: BtnProps){
    return(
        <button onClick={onClick} className={styles[color]}>
            {label}
        </button>
    )
}