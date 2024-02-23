'use client'

import Link from 'next/link'
import styles from './comments.module.css'
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }
    return data;
}

const Comments = ({ postSlug }) => {
    const { status } = useSession();
    const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher);

    const [desc, setDesc] = useState('')
    const handleSubmit = async () => {
        await fetch('http://localhost:3000/api/comments', {
            method: 'POST',
            body: JSON.stringify({ desc, postSlug }),
        });
        setDesc('');
        mutate();
    }


    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Comments</h3>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder='write a comment...' className={styles.input} onChange={e => setDesc(e.target.value)} value={desc}></textarea>
                    <button className={styles.button} onClick={handleSubmit}>Send</button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment.</Link>
            )}
            <div className={styles.comments}>
                {isLoading ? "Loading..." : data.map((comment) => (
                    <div className={styles.comment} key={comment._id}>
                        <div className={styles.user}>
                            <Image src={comment.user.image} alt="" width={50} height={50} className={styles.avatar} />
                            <div className={styles.userInfo}>
                                <span className={styles.username}>{comment.user.name}</span>
                                <span className={styles.date}>{comment.createdAt.substr(0, 10)}</span>
                            </div>

                        </div>
                        <p className={styles.text}>{comment.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments