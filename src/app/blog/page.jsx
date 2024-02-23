import CardList from "../components/cardList/CardList"
import Menu from "../components/menu/Menu"
import styles from "./blogPage.module.css"
import Image from 'next/image'

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {cat &&
          <div className={styles.imgContainer}>
            <Image src={`/${cat}.png`} alt={`${cat} blog`} fill className={styles.img} />
          </div>
        }
        <h1 className={`${styles.title} ${styles[cat]}`}>{cat} Blog</h1>
      </div>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage