import React from 'react';
import style from './Header.module.css';
import menu from '../../img/header/menu.svg';
import search from '../../img/header/search.svg';
import liked from '../../img/header/Shape (Stroke).svg';
import orders from '../../img/header/Frame 211.svg';
import basket from '../../img/header/Frame 211 (1).svg';
import avatar from '../../img/header/avatar.png';
import avatarIcon from '../../img/header/chevron-down.svg';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__logo}>
                <img src={menu} alt=""/>
                <button className={style.header__button}>Каталог</button>
            </div>
            <div className={style.header__search}>
                <input type="text" placeholder='Найти товар' className={style.header__searchInput}/>
                <img src={search} alt=""/>
            </div>
            <nav className={style.header__navigation}>
                <div className={style.header__navigationLiked}>
                    <img src={liked} alt=""/>
                    <button className={style.header__navigationButton} >Избранное</button>
                </div>
                <div className={style.header__navigationLiked}>
                    <img src={orders} alt=""/>
                    <button className={style.header__navigationButton} >Заказы</button>
                </div>
                <div className={style.header__navigationLiked}>
                    <img src={basket} alt=""/>
                    <button className={style.header__navigationButton} >Корзина</button>
                </div>
            </nav>
            <div className={style.header__userActions}>
                <img className={style.header__userActionsIcon} src={avatar} alt=""/>
                <p className={style.header__userActionsText}>Алексей</p>
                <button className={style.header__userActionsButton}>
                    <img src={avatarIcon} alt=""/>
                </button>
            </div>
        </header>
    );
};

export default Header;
