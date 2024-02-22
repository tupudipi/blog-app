import CardList from "../components/cardList/CardList"
import Menu from "../components/menu/Menu"
import styles from "./blogPage.module.css"

const BlogPage = ({searchParams}) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  console.log(`Blog page: page: ${page}, cat: ${cat}`);

  return (
    <div className={styles.container}>
        <h1 className={`${styles.title} ${styles[cat]}`}>{cat} Blog</h1>
        <div className={styles.content}>
            <CardList page={page} cat={cat} />
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage