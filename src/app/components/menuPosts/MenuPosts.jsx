'use client'

import { useEffect, useState } from 'react';
import Link from "next/link"
import Image from "next/image"
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage, curated }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (!curated) {
        fetch('http://localhost:3000/api/topPosts')
            .then(response => response.json())
            .then(data => {
                setPosts(data.posts);
            });
        } else {
        fetch('http://localhost:3000/api/curatedPosts')
            .then(response => response.json())
            .then(data => {
                setPosts(data.posts);
            });
        }
    }, []);

    return (
        <div className={styles.items}>
            {posts.map(post => (
                <Link key={post.id} href={`/posts/${post.slug}`} className={styles.item}>
                    {withImage && post.image && (
                        <div className={styles.imageContainer}>
                            <Image src={post.image} alt={post.title} fill className={styles.image} />
                        </div>
                    )}
                    <div className={styles.textContainer}>
                        <div className={styles.detail}>
                            <span className={styles.username}>{post.user.name}</span>
                            <span className={styles.date}>{post.createdAt.substring(0,10)}</span>
                        </div>
                        <h4 className={styles.postTitle}>{post.title}</h4>
                        <span className={`${styles.category} ${styles[post.catSlug]}`}>{post.catSlug}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MenuPosts