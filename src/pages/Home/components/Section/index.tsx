import CocktailCard from '@/components/CocktailCard';
import React from 'react';
import styles from './Section.module.scss';

function Section({ Title }: { Title: string }) {
  return (
    <div className={styles.Container}>
      <div className={styles.UpperItemsContainer}>
        <div className={styles.TitleContainer}>
          <h1 className={styles.Title}>{Title}</h1>
          <div>last 10 days</div>
        </div>
        <div>
          <button>View More</button>
        </div>
      </div>
      <div className={styles.CocktailCardContainer}>
        <CocktailCard />
        <CocktailCard />
        <CocktailCard />
      </div>
    </div>
  );
}

export default Section;
