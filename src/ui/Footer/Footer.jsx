import React from 'react';
import styles from './Footer.module.css';
import instagram from '../../img/footer/instagram.svg';
import vk from '../../img/footer/vkontakte.svg';
import facebook from '../../img/footer/facebook.svg';
import ok from '../../img/footer/ok.svg';
import number from '../../img/footer/Vector 188 (Stroke).svg';
import icon from '../../img/footer/logo-zasovskiy-small-black.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.footer__section}>
                    <nav className={styles.footer__navigation}>
                        <ul className={styles.footer__navList}>
                            <li className={styles.footer__navItem}>
                                <a href="" className={styles.footer__navLink}>О компании</a>
                            </li>
                            <li className={styles.footer__navItem}>
                                <a href="" className={styles.footer__navLink}>Контакты</a>
                            </li>
                            <li className={styles.footer__navItem}>
                                <a href="" className={styles.footer__navLink}>Вакансии</a>
                            </li>
                            <li className={styles.footer__navItem}>
                                <a href="" className={styles.footer__navLink}>Статьи</a>
                            </li>
                            <li className={styles.footer__navItem}>
                                <a href="" className={styles.footer__navLink}>Политика обработки персональных данных</a>
                            </li>
                        </ul>
                    </nav>

                    <nav className={styles.footer__social}>
                        <ul className={styles.footer__socialList}>
                            <li className={styles.footer__socialItem}>
                                <a href="https://instagram.com" className={styles.footer__socialLink}>
                                    <img src={instagram} alt=""/>
                                </a>
                            </li>
                            <li className={styles.footer__socialItem}>
                                <a href="https://vk.com" className={styles.footer__socialLink}>
                                    <img src={vk} alt=""/>
                                </a>
                            </li>
                            <li className={styles.footer__socialItem}>
                                <a href="https://facebook.com" className={styles.footer__socialLink}>
                                    <img src={facebook} alt=""/>
                                </a>
                            </li>
                            <li className={styles.footer__socialItem}>
                                <a href="https://ok.com" className={styles.footer__socialLink}>
                                    <img src={ok} alt=""/>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <nav className={styles.footer__section}>
                        <div>
                            <div className={styles.footer__contactInfo}>
                                <img src={number} alt=""/>
                                <span className={styles.footer__contact}>8 800 777 33 33</span>
                            </div>
                            <div className={styles.footer__contactInfo}>
                                <span className={styles.footer__copyRight}>Дизайн</span>
                                <img src={icon} alt=""/>
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
