"use client";

import Image from "next/image";
import styles from "./write.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import ReactQuill from "react-quill";
import { UserRoleContext } from "@/context/UserContext";
import { useContext } from "react";

const WritePage = () => {
    const { status, data = {} } = useSession();
    const router = useRouter();
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");
    const { role } = useContext(UserRoleContext);
    
    useEffect(() => {
        const storage = getStorage(app);
        const upload = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => { },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL);
                    });
                }
            );
        };

        file && upload();
    }, [file]);

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (status === "unauthenticated" || role !== "admin") {
        router.push("/");
    }

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: catSlug || "style", //If not selected, choose the general category
            }),
        });

        if (res.status === 200) {
            const data = await res.json();
            router.push(`/posts/${slugify(title)}`);
        }
    };

    return (
        <div className={styles.container}>
            <select
                className={styles.select}
                onChange={(e) => setCatSlug(e.target.value)}
            >
                <option>Pick a post category</option>
                <option value="style">style</option>
                <option value="leisure">leisure</option>
                <option value="food">food</option>
                <option value="culture">culture</option>
                <option value="travel">travel</option>
                <option value="coding">coding</option>
            </select>
            <input
                type="text"
                placeholder="Title"
                className={styles.input}
                onChange={(e) => setTitle(e.target.value)}
            />

            <div className={styles.editor}>
                <input
                    type="file"
                    id="image"
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button className={styles.button} >
                    <label htmlFor="image" style={{ cursor: 'pointer' }}>
                        🖼️
                    </label>
                </button>
                <ReactQuill
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder="Tell your story..."
                />
            </div>
            <button className={styles.publish} onClick={handleSubmit}>
                Publish
            </button>
        </div>
    );
};

export default WritePage;