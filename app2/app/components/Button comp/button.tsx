import styles from "./Button.module.css"
interface BtnProps {
    label: string;
    onClick: () => void
    color?: "Green" | "Blue" | "red"
}

export default function Btn({label, onClick, color = "Blue"}: BtnProps){
    return(
        <button onClick={onClick} className = {styles[color]}>
            {label}
        </button>

    )
}