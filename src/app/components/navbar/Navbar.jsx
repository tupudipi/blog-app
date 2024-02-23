import React from 'react'
import styles from "./navbar.module.css";
import Image from 'next/image'
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <div className={styles.container}>

      <Link href="/" className={styles.logo}>
        Cico Blog
      </Link>

      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks />
      </div>

    </div>
  )
}

export default Navbar