import memeImage from "../images/troll-face.png"
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <img 
                src={memeImage} 
                className={styles.header_image}
            />
            <h2 className={styles.header_title}>Meme Generator</h2>
            <h4 className={styles.header_project}>React Course - Project 3</h4>
        </header>
    )
}