import Image from "next/image"
import Menu from "../components/menu/Menu"
import styles from "./singlePage.module.css"
import Comments from "../components/comments/Comments"

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.user}>Cico Motan</span>
                            <span className={styles.user}>20.02.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consectetur fuga et perspiciatis est necessitatibus, laudantium placeat dolores nam atque ipsum dignissimos minima nemo nisi cum quis eum praesentium sapiente!</p>
                        <p>Maxime explicabo a eum molestiae veritatis quam voluptatibus, quisquam asperiores exercitationem expedita suscipit, voluptatem dignissimos? Laudantium, modi voluptas sint officia mollitia deserunt sapiente fuga eius, molestiae aspernatur sed optio labore.</p>
                        <p>Accusantium dignissimos accusamus maiores debitis rem atque ipsum? Deserunt, asperiores mollitia, ratione odio, quod assumenda qui quas ullam eveniet molestias cupiditate dolorem numquam ducimus molestiae nobis optio sequi tempore unde.</p>
                    </div>

                    <div className={styles.comments}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage