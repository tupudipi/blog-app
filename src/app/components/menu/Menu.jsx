import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>What&apos;s hot</h3>
      <h2 className={styles.title}>Most Popular</h2>
      <MenuPosts  />

      <h3 className={styles.subtitle}>Discover by topic</h3>
      <h2 className={styles.title}>Categories</h2>
      <MenuCategories />

      <h3 className={styles.subtitle}>Featured</h3>
      <h2 className={styles.title}>Editor&apos;s pick</h2>
      <MenuPosts withImage curated/>

    </div>
  )
}

export default Menu