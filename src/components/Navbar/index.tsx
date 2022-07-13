import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.scss';
const isLoggedIn = false;

function Navbar() {
  return (
    <div className={styles.Container}>
      <div className={styles.Logo}>
        <Link href='/'>
          <Image alt='Cocktails Logo' src={'/assets/Icons/Logo.svg'} width={280} height={50} />
        </Link>
      </div>
      <div className={styles.LinkContainer}>
        <Link href='/popular'>
          <a className={styles.LinkItem}>Popular</a>
        </Link>
        <Link href='recommended'>
          <a className={styles.LinkItem}>Recommended</a>
        </Link>
        {isLoggedIn ? <button className={styles.LoginBtn}>Login</button> : <button className={styles.LoginBtn}>Logout</button>}
      </div>
    </div>
  );
}

export default Navbar;
