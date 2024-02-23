import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/topCats", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.categories;
}

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.image &&
              <Image
                src={`${item.image}`}
                alt=""
                width={32} height={32}
                className={styles.image} />
            }
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList