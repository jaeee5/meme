import {useState, useEffect} from "react"
import styles from "./Meme.module.scss"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className={styles.form}>
                <input 
                    type="text"
                    placeholder="Top text"
                    className={styles.form_input}
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className={styles.form_input}
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className={styles.form_button}
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className={styles.meme}>
                <img src={meme.randomImage} className={styles.meme_image} />
                <h2 className={`${styles.meme_text} ${styles.top}`}>{meme.topText}</h2>
                <h2 className={`${styles.meme_text} ${styles.bottom}`}>{meme.bottomText}</h2>
            </div>
        </main>
    )
}
