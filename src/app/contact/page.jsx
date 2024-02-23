import styles from "./contactPage.module.css";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <strong className={styles.bold}>Contact Page</strong>
      </h1>
      <p className={styles.subtitle}>
      Discover what I have to say about fish pâté and laser pointers.
      </p>

    </div>
  )
}

export default ContactPage;