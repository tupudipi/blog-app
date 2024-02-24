import styles from "./featured.module.css"
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <strong className={styles.bold}>Hey, Cico here!</strong>
      </h1>
      <p className={styles.subtitle}>
      Discover what I have to say about fish pâté and laser pointers.
      </p>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Meow there! 🐾 Join me on a whisker-twitching adventure through my world of feline musings!</h2>
          <p className={styles.postDesc}>Embark on a feline odyssey with yours truly! From the joy of morning cuddles to savoring the finest pâté, and reveling in the thrill of laser pointers, this is my cozy corner of the web. Explore the tales and the intriguing world behind these green eyes. Dive in and discover the purr-sonalities that make me the one and only Cico! 🐾✨</p>
          <Link href={'/about'}><button className={styles.button}>Read More</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Featured