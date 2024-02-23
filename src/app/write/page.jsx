'use client'

import styles from './write.module.css'
import { useState } from 'react'
import 'react-quill/dist/quill.bubble.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const WritePage = () => {
    const {status} = useSession();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('')

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'unauthenticated') {
        router.push('/')
        return null;
    }

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