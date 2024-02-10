import React from 'react';
import styles from './HomePage.module.css';
import banner from '../../img/homePage/Group 7100.png';
import bannerImg from '../../img/homePage/img.png';

const HomePage = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerHome}>
                <img className={styles.bannerImg} src={banner} alt=""/>
            </div>
            <div className={styles.bannerImage}>
                <img className={styles.bannerHomeImg} src={bannerImg} alt=""/>
                <p className={styles.bannerTitle}>Доставка бесплатно от 1000 ₽</p>
            </div>
        </div>
    );
};

export default HomePage;