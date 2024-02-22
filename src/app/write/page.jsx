"use client"

import Image from 'next/image'
import styles from './write.module.css'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const WritePage = () => {

    const {status} = useSession();
    const router = useRouter();

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'unauthenticated') {
        router.push('/')
    }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('')

    return (
        <div className={styles.container}>
            <input type="text" placeholder='Title' className={styles.input} />
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    📎
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            🖼️
                        </button>

                        <button className={styles.addButton}>
                            🔗
                        </button>

                        <button className={styles.addButton}>
                            🎥
                        </button>
                    </div>
                )}
                <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder='Tell your story...' />
            </div>
            <button className={styles.publish}>
                Publish
            </button>
        </div>
    )
}

export default WritePage