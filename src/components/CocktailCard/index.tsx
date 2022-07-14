import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
// @ts-ignore: Unreachable code error
import ReactStars from 'react-rating-stars-component';
import styles from './CocktailCard.module.scss';

let imgUrl = '/assets/Photos/WhiskeySour.png';
const title = 'Whiskey Sour';
const description = 'Wow what are terrific drink that consumes the souls of your enemies.';
const rating = 2;
const _id = 342342;

function CocktailCard() {
  return (
    <div className={styles.Container}>
      <Image src={imgUrl} width='300' height='300' alt='Cocktail Image' layout='responsive' objectFit='cover' objectPosition='center top' />
      <div className={styles.LowerContainer}>
        <div className={styles.TextContainer}>
          <h1 className={styles.Title}>{title}</h1>
          <p className={styles.Description}>{description.length > 30 ? description.substring(0, 140) + '...' : description}</p>
        </div>
        <span className={styles.StarsAndBtn}>
          <ReactStars value={rating} size={18} activeColor='#c69f6a' edit={false} />
          <Link href={`/cocktail/${_id}`} passHref>
            <button className={styles.Btn}>
              <div className={styles.BtnText}>Read More</div>
              <div className={styles.SVGContainer}>
                <FaArrowRight />
              </div>
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default CocktailCard;
