import styles from "./featured.module.css";
import Image from "next/image";

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
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, tempora eveniet?</h2>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rerum nihil eum ab consectetur non necessitatibus, officia provident vel doloribus distinctio accusamus culpa, eius iusto soluta deleniti ullam eos harum.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured