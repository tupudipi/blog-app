import styles from "./aboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <strong>Meow-velous Greetings, Admirers of the Extraordinary!</strong>
      </h1>
      <p className={styles.text}>
        I am Cico, the illustrious feline behind this dazzling corner of the internet. This blog is my canvas, where I paw-sitively dazzle you with tales of my exquisite taste in fish pâté, masterful laser pointer acrobatics, and the art of morning cuddles. You may wonder, 'Why does a cat need a blog?' Well, dear friends, I graciously allow my human to share the wonders of my world because, let's face it, my paws are too busy with napping and bird-watching to manage this digital masterpiece. My devoted owner assists in translating my feline brilliance into words because, alas, I lack the gift of opposable thumbs.
      </p>
      <p className={styles.text}>
        Now, let me whisker you away into the enchanting universe of my indoor escapades and occasional outdoor forays. Enjoy the tales, marvel at the photos, and be mesmerized by my sheer charisma.
      </p>
      <p className={styles.text}>
        Purr-sistently Yours,
      </p>
      <p className={styles.text}>
        Cico 🐾✨
      </p>
      <hr />
      <br />

      <h1 className={styles.subtitle}>
        Editor's Notes
      </h1>
      <p className={styles.text}>
        Welcome to the behind-the-scenes scoop of Cico's digital lair. Our tech stack is as sleek as Cico's midnight-blue fur:
      </p>
      <p className={styles.text}>
        Here at Cico's Domain, we take web development as seriously as a fresh bowl of fish pâté. This blog is a charming creation brought to life using <strong className={styles.strong}>Next.js</strong>, a delightful React framework that ensures seamless navigation through Cico's anecdotes. The database wizardry is powered by <strong className={styles.strong}>MongoDB</strong>, orchestrated with precision through <strong className={styles.strong}>Prisma ORM</strong>.
      </p>
      <p className={styles.text}>
        For the purr-fect file hosting, we turn to <strong className={styles.strong}>Firebase</strong>, ensuring every snapshot of Cico's captivating moments finds its cozy spot on the web. <strong className={styles.strong}>Google Auth</strong> extends a friendly paw, allowing users to partake in this feline adventure with secure accounts. And, of course, our sleek design is crafted with love and a dash of catnip, employing <strong className={styles.strong}>vanilla CSS</strong> with the elegance of <strong className={styles.strong}>CSS modules</strong>.
      </p>
      <p className={styles.text}>
        Wishing You Whiskers and Wonder
      </p>
    </div>
  )
}

export default AboutPage;