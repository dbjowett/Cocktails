import Navbar from '@/components/Navbar';
import React from 'react';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.PageContainer}>
      <Navbar />
    </div>
  );
}

export default Home;
