import CocktailCard from '@/components/CocktailCard';
import React from 'react';
import styles from './Section.module.scss';

function Section({ Title }: { Title: string }) {
  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <h1>{Title}</h1>
        <div>lass 10 days</div>
      </div>
      <CocktailCard />
    </div>
  );
}

export default Section;
