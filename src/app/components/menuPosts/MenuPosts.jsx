import Link from "next/link"
import Image from "next/image"
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <div className={styles.detail}>
                        <span className={styles.username}>Cico</span>
                        <span className={styles.date}>20.02.2024</span>
                    </div>
                    <h4 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <div className={styles.detail}>
                        <span className={styles.username}>Cico</span>
                        <span className={styles.date}>20.02.2024</span>
                    </div>
                    <h4 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <div className={styles.detail}>
                        <span className={styles.username}>Cico</span>
                        <span className={styles.date}>20.02.2024</span>
                    </div>
                    <h4 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <span className={`${styles.category} ${styles.food}`}>Food</span>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <div className={styles.detail}>
                        <span className={styles.username}>Cico</span>
                        <span className={styles.date}>20.02.2024</span>
                    </div>
                    <h4 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <span className={`${styles.category} ${styles.coding}`}>Coding</span>
                </div>
            </Link>
        </div>
    )
}

export default MenuPosts