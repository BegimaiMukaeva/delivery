import React from 'react';
import styles from './ProductCard.module.css';
import ratingImg from '../../img/card/rating.svg';

const ProductCard = ({like, image, title, price, originalPrice, description, discount }) => (
    <div className={styles.productCard}>
        <div className={styles.productCard__imageContainer}>
            <img src={discount} className={styles.productCard__discount} alt=""/>
            <img src={image} alt={title} className={styles.productCard__image}/>
            <img src={like} alt="" className={styles.productCard__likeImg}/>
        </div>
        <div className={styles.productCard__info}>
            <p className={styles.productCard__price}>{price} ₽ <span className={styles.productCard__originalPrice}>{originalPrice} ₽</span></p>
            <div className={styles.productCard__pay}>
                <p className={styles.productCard__originalPay}>С картой </p>
                <span className={styles.productCard__originalPay}>Обычная</span>
            </div>
            <h5 className={styles.productCard__title}>{title}</h5>
            <p className={styles.productCard__description}>{description}</p>
            <img src={ratingImg} alt="" className={styles.productCard__ratingImg}/>
            <button className={styles.productCard__button}>В корзину</button>
        </div>
    </div>
);

export default ProductCard;