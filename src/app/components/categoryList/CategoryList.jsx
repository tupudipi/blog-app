import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" alt="" width={32} height={32} className={styles.image} />
          style
        </Link>
        <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
          <Image src="/food.png" alt="" width={32} height={32} className={styles.image} />
          food
        </Link>
        <Link href="/blog?cat=travel" className={`${styles.category} ${styles.travel}`}>
          <Image src="/travel.png" alt="" width={32} height={32} className={styles.image} />
          travel
        </Link>
        <Link href="/blog?cat=culture" className={`${styles.category} ${styles.culture}`}>
          <Image src="/culture.png" alt="" width={32} height={32} className={styles.image} />
          culture
        </Link>
        <Link href="/blog?cat=coding" className={`${styles.category} ${styles.coding}`}>
          <Image src="/coding.png" alt="" width={32} height={32} className={styles.image} />
          coding
        </Link>
        <Link href="/blog?cat=leisure" className={`${styles.category} ${styles.leisure}`}>
          <Image src="/fashion.png" alt="" width={32} height={32} className={styles.image} />
          leisure
        </Link>
      </div>
    </div>
  )
}

export default CategoryList