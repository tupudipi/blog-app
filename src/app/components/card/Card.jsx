import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>20.02.2024</span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h3>The Best Way to Learn a New Language</h3>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link href="/">
                    <span className={styles.link}>Read More</span>
                </Link>
            </div>
        </div>
    )
}

export default Card