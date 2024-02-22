import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, item }) => {
    return (
        <div className={styles.container} key={key}>
            {item.img &&
                <div className={styles.imageContainer}>
                    <Image src={item.img} alt="" fill className={styles.image} />
                </div>
            }
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{item.createdAt.substr(0, 10)}</span>
                    <span className={`${styles.category} ${styles[item.catSlug]}`}>{item.catSlug.toUpperCase()}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h3>{item.title}</h3>
                </Link>
                <p className={styles.desc}>
                    {item.desc.substring(0, 100) + "..."}
                </p>
                <Link href={`/posts/${item.slug}`}>
                    <span className={styles.link}>Read More</span>
                </Link>
            </div>
        </div>
    )
}

export default Card