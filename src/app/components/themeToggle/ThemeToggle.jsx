"use client"
import styles from "./themeToggle.module.css";
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const ThemeToggle = () => {

  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggleTheme}>
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === 'dark'
            ? { left: 0, background: "#0f172a" } :
            { right: 0, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle