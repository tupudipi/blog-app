import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.css";
import Image from 'next/image'
import Link from 'next/link';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Cico Blog Logo" width={50} height={50} className={styles.logoImg}/>
          <h2 className={styles.logoText}>Cico Blog</h2>
        </div>
        <p className={styles.description}>Paws and whiskers, thanks for wandering through my digital realm. Stay curious, stay cozy! 🐾✨</p>
        <div className={styles.social}>
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

      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=style">Style</Link>
          <Link href="/blog?cat=culture">Culture</Link>
          <Link href="/blog?cat=leisure">Leisure</Link>
          <Link href="/blog?cat=food">Food</Link>
          <Link href="/blog?cat=coding">Coding</Link>
          <Link href="/blog?cat=travel">Travel</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer