import React from 'react';
import styles from './StoresMap.module.css';
import mapImg from '../../img/specialOffers/image 12.png';

const StoresMap = () => {
    return (
        <section className={styles.storesMap}>
            <h2 className={styles.storesMap__title}>Наши магазины</h2>
            <div className={styles.storesMap__buttonContainer}>
                <button className={styles.storesMap__button}>п.Щельяюр</button>
                <button className={styles.storesMap__button}>д.Вертеп</button>
                <button className={styles.storesMap__button}>с.Краснобор</button>
                <button className={styles.storesMap__button}>д.Диюр</button>
            </div>
            <div className={styles.storesMap__mapContainer}>
                <img src={mapImg} alt=""/>
            </div>
        </section>
    );
};

export default StoresMap;
