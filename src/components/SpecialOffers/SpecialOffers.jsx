import React from 'react';
import styles from './SpecialOffers.module.css';
import card from '../../img/specialOffers/card.png';

const SpecialOffers = () => {
    return (
        <section className={styles.specialOffers}>
            <h2 className={styles.specialOffers__title}>Специальные предложения</h2>
            <div  className={styles.specialOffers__items}>
                <div className={styles.specialOffers__item}>
                    <div>
                        <p className={styles.specialOffers__description}>Оформите карту «Северяночка»</p>
                        <p className={styles.specialOffers__button}>И получайте бонусы при покупке в магазинах и на сайте</p>
                    </div>
                    <div>
                        <img src={card} alt="Описание изображения" className={styles.specialOffers__image} />
                    </div>
                </div>
                <div className={styles.specialOffers__item}>
                    <div>
                        <p className={styles.specialOffers__description}>Оформите карту «Северяночка»</p>
                        <p className={styles.specialOffers__button}>И получайте бонусы при покупке в магазинах и на сайте</p>
                    </div>
                    <div>
                        <img src={card} alt="Описание изображения" className={styles.specialOffers__image} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;
