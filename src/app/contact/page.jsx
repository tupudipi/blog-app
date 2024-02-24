import styles from "./contactPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <strong>Hello There, Admirable Guests!</strong>
      </h1>
      <p className={styles.text}>
        Ah, you&apos;ve reached the hallowed grounds of the Contact Page. It seems you&apos;re yearning for more, perhaps a desire to shower me with praises or inquire about the nuances of my majestic existence. I must say, I appreciate your taste!
      </p>
      <p className={styles.text}>
        However, as much as I&apos;d love to personally handle these matters, my schedule is tightly packed with napping, bird-watching, and maintaining my impeccable fluff. Fear not, for my benevolent owner is at your service!
      </p>
      <p className={styles.text}>
        For all inquiries, be it collaborations, fan mail, or requests for appearances (I do have a certain star quality, don&apos;t I?), kindly direct your words to my diligent human. They possess the thumbs necessary for such tasks.
      </p>
      <p className={styles.text}>
        Simply drop a message to my faithful owner&apos;s mailbox, and rest assured, your missive will be treated with the utmost importance. You can also reach us through the other channels. Remember, while I may be the star, every star needs a trusty constellation of support.
      </p>

      <div className={styles.links}>
        <Link href="mailto:tupudipi@gmail.com">
          <i className={styles.icon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
        </Link>
        <Link href="https://www.linkedin.com/in/alexandru-stefan-tudor">
          <i className={styles.icon}>
            <FontAwesomeIcon icon={faLinkedin} />
          </i>
        </Link>
        <Link href="https://github.com/tupudipi">
          <i className={styles.icon}>
            <FontAwesomeIcon icon={faGithub} />
          </i>
        </Link>
      </div>
    </div>
  )
}

export default ContactPage;