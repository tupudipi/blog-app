"use client"

import { useState, useEffect } from "react";
import styles from "./authLinks.module.css";
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react";

function AuthLinks() {

  const [open, setOpen] = useState(false)
  const [role, setRole] = useState(null);
  const { status, data = {} } = useSession();
  const { user } = data || {};

  useEffect(() => {
    const fetchRole = async () => {
      if (status === 'authenticated') {
        try {
          const res = await fetch(`/api/userRole?email=${user?.email}`);
          const data = await res.json();
          setRole(data.role);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchRole();
  }, [status, user]);

  console.log('role', role);

  return <>
    {status === 'unauthenticated' ? (
      <Link href='/login' className={styles.link}>Login</Link>
    ) : (
      <>
        {role === 'admin' &&
          <Link href='/write' className={styles.link}>Write</Link>
        }
        <span className={styles.link} onClick={signOut}>Logout</span>
      </>
    )}
    <div className={styles.burger} onClick={() => setOpen(!open)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
    {open && (
      <div className={styles.responsiveMenu}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        {status === 'not authenticated' ? (
          <Link href='/login'>Login</Link>
        ) : (
          <>
            {role === 'admin' && <Link href='/write'>Write</Link>}
            <span className={styles.link}>Logout</span>
          </>
        )}
      </div>
    )}
  </>
}

export default AuthLinks