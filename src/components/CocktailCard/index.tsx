import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
// import ReactStars from 'react-rating-stars-component';
import styles from './CocktailCard.module.scss';

let imgUrl = '@/assets/Photos/WhiskeySour.png';
const title = 'Whiskey Sour';
const description = 'Wow what are terrific drink that consumes the souls of your enemies.';
const rating = 5;
const _id = 342342;

function CocktailCard() {
  return (
    <div className={styles.container}>
      {/* <Image src={imgUrl} width='300' height='300' alt='Cocktail Image' layout='responsive' objectFit='cover' objectPosition='center top' /> */}
      <div className={styles.desc_container}>
        <div className={styles.desc}>
          <div>
            <h1>{title}</h1>
            <p>{description.length > 30 ? description.substring(0, 140) + '...' : description}</p>
          </div>
          <span className={styles.starsAndBtn}>
            {/* <ReactStars value={rating} size={18} activeColor='#c69f6a' edit={false} /> */}
            <Link href={`/cocktail/${_id}`} passHref>
              <button>
                <div>Learn More</div>
                <FaArrowRight />
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CocktailCard;
