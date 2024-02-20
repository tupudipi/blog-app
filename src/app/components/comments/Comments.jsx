import Link from 'next/link'
import styles from './comments.module.css'
import Image from 'next/image'

const Comments = () => {
    const status = "authenticated"

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Comments</h3>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder='write a comment...' className={styles.input}></textarea>
                    <button className={styles.button}>Send</button>
                </div>
            ) : (<Link href="/login">Login to write a comment.</Link>)}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.avatar} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Cico Motan</span>
                            <span className={styles.date}>20.02.2024</span>
                        </div>

                    </div>
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, neque enim iure sed exercitationem ea nostrum repudiandae odio, consequatur laborum assumenda, similique labore dicta ex unde voluptates tenetur ipsum. Aliquid!</p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.avatar} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Cico Motan</span>
                            <span className={styles.date}>20.02.2024</span>
                        </div>

                    </div>
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, neque enim iure sed exercitationem ea nostrum repudiandae odio, consequatur laborum assumenda, similique labore dicta ex unde voluptates tenetur ipsum. Aliquid!</p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.avatar} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Cico Motan</span>
                            <span className={styles.date}>20.02.2024</span>
                        </div>

                    </div>
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, neque enim iure sed exercitationem ea nostrum repudiandae odio, consequatur laborum assumenda, similique labore dicta ex unde voluptates tenetur ipsum. Aliquid!</p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.avatar} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Cico Motan</span>
                            <span className={styles.date}>20.02.2024</span>
                        </div>

                    </div>
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, neque enim iure sed exercitationem ea nostrum repudiandae odio, consequatur laborum assumenda, similique labore dicta ex unde voluptates tenetur ipsum. Aliquid!</p>
                </div>
            </div>
        </div>
    )
}

export default Comments