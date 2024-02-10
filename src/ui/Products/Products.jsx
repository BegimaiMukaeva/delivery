import React from 'react';
import ratingImg from "../../img/card/rating.svg";
import styles from './Products.module.css';
import image from '../../img/card/image1234.png';

const Products = ({like, title }) => {
    return (
        <div className={styles.productCard}>
            <div className={styles.productCard__imageContainer}>
                <img src={image} alt={title} className={styles.productCard__image}/>
                <img src={like} alt="" className={styles.productCard__likeImg}/>
            </div>
            <div className={styles.productCard__info}>
                 <p className={styles.productCard__discount}>599,99 ₽</p>
                <h5 className={styles.productCard__title}>Комбайн КЗС-1218 </h5>
                <p className={styles.productCard__description}>«ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                <img src={ratingImg} alt="" className={styles.productCard__ratingImg}/>
                <button className={styles.productCard__button}>В корзину</button>
            </div>
        </div>
    );
};

export default Products;