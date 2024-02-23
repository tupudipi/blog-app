import styles from "./aboutPage.module.css";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <strong className={styles.bold}>About Page</strong>
      </h1>
      <p className={styles.subtitle}>
      Discover what I have to say about fish pâté and laser pointers.
      </p>

    </div>
  )
}

export default AboutPage;