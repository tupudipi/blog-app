import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({key, item}) => {
    return (
        <div className={styles.container} key={key}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>20.02.2024</span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h3>{item.title}</h3>
                </Link>
                <p className={styles.desc}>
                    {item.desc}
                    </p>
                <Link href="/">
                    <span className={styles.link}>Read More</span>
                </Link>
            </div>
        </div>
    )
}

export default Card