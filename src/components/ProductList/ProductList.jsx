import React from 'react';
import ProductCard from '../../ui/ProductCard/ProductCard';
import Products from '../../ui/Products/Products';
import styles from './ProductList.module.css';
import productImg from '../../img/card/image.png';
import salaryImg from '../../img/card/notice.svg';
import likeImg from '../../img/card/Button.svg';
import img from '../../img/card/Shape (Stroke).svg';

const staticData = [
  {
    id: 1,
    image: productImg,
    like: likeImg,
    title: "Г/Ц Блинчики с мясом вес,",
    price: "44,50",
    originalPrice: "50,50",
    description: "Россия",
    discount: salaryImg
  },
  {
    id: 2,
    image: productImg,
    like: likeImg,
    title: "Г/Ц Блинчики с мясом вес,",
    price: "44,50",
    originalPrice: "50,50",
    description: "Россия",
    discount: salaryImg
  },
  {
    id: 3,
    image: productImg,
    like: likeImg,
    title: "Г/Ц Блинчики с мясом вес,",
    price: "44,50",
    originalPrice: "50,50",
    description: "Россия",
    discount: salaryImg
  },
  {
    id: 4,
    image: productImg,
    like: likeImg,
    title: "Г/Ц Блинчики с мясом вес,",
    price: "44,50",
    originalPrice: "50,50",
    description: "Россия",
    discount: salaryImg
  },
];

const ProductList = () => {
  return (
      <section className={styles.container}>
        <div className={styles.stocks__page}>
          <h2 className={styles.stocks__pageTitle}>Акции</h2>
          <div className={styles.stocks__pageButton}>
            <button>Все акции</button>
            <img src={img} alt=""/>
          </div>
        </div>
        <div className={styles.product__cards}>
          {staticData.map(product => (
              <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className={styles.stocks__page}>
          <h2 className={styles.stocks__pageTitle}>Новинки</h2>
          <div className={styles.stocks__pageButton}>
            <button>Все новинки</button>
            <img src={img} alt=""/>
          </div>
        </div>
        <div className={styles.product__cards}>
          {staticData.map(product => (
              <Products key={product.id} {...product} />
          ))}
        </div>

        <div className={styles.stocks__page}>
          <h2 className={styles.stocks__pageTitle}>Покупали раньше</h2>
          <div className={styles.stocks__pageButton}>
            <button>Все покупки</button>
            <img src={img} alt=""/>
          </div>
        </div>
        <div className={styles.product__cards}>
          {staticData.map(product => (
              <Products key={product.id} {...product} />
          ))}
        </div>
      </section>
  );
};

export default ProductList;
