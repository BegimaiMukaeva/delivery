import React from 'react';
import styles from './Articles.module.css';
import acticlesImg from '../../img/specialOffers/image 5.png';
import img from "../../img/card/Shape (Stroke).svg";


const Articles = () => {
    return (
        <section className={styles.articles}>
            <div className={styles.articles__page}>
                <h2 className={styles.articles__title}>Статьи</h2>
                <div className={styles.articles__button}>
                    <button>Все статьи</button>
                    <img src={img} alt=""/>
                </div>
            </div>

            <div className={styles.articles__list}>
                <article className={styles.articles__item}>
                    <img src={acticlesImg} alt="Описание изображения" className={styles.articles__image} />
                    <div className={styles.articles__content}>
                        <p className={styles.articles__itemDate}> 05.03.2021</p>
                        <h3 className={styles.articles__itemTitle}>Режим использования масок и перчаток на территории магазинов</h3>
                        <p className={styles.articles__itemDescription}>Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.</p>
                        <button className={styles.articles__itemButton}>Подробнее</button>
                    </div>
                </article>
                <article className={styles.articles__item}>
                    <img src={acticlesImg} alt="Описание изображения" className={styles.articles__image} />
                    <div className={styles.articles__content}>
                        <p className={styles.articles__itemDate}> 05.03.2021</p>
                        <h3 className={styles.articles__itemTitle}>Режим использования масок и перчаток на территории магазинов</h3>
                        <p className={styles.articles__itemDescription}>Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.</p>
                        <button className={styles.articles__itemButton}>Подробнее</button>
                    </div>
                </article>
                <article className={styles.articles__item}>
                    <img src={acticlesImg} alt="Описание изображения" className={styles.articles__image} />
                    <div className={styles.articles__content}>
                        <p className={styles.articles__itemDate}> 05.03.2021</p>
                        <h3 className={styles.articles__itemTitle}>Режим использования масок и перчаток на территории магазинов</h3>
                        <p className={styles.articles__itemDescription}>Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.</p>
                        <button className={styles.articles__itemButton}>Подробнее</button>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Articles;
