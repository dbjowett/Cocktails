import Image from 'next/image';
import React from 'react';
import styles from './Hero.module.scss';

const Title = 'Find your new favourite drink, store your old.';
const SubTitle = 'Share your recipes with the community or just store them for yourself. Whatever you want do it with myCocktails.';

function Hero() {
  return (
    <div className={styles.PageContainer}>
      <div className={styles.LeftSide}>
        <h1 className={styles.Title}>{Title}</h1>
        <div className={styles.SubTitle}>{SubTitle}</div>
        <button className={styles.Btn}>Get Started</button>
      </div>
      <div className={styles.RightSide}>
        <Image
          className={styles.Image}
          src={'/assets/Photos/Home_Cocktail.jpg'}
          alt='Image of Cocktail'
          layout='fill'
          objectFit='cover'
          objectPosition='top left'
        />
      </div>
    </div>
  );
}

export default Hero;
