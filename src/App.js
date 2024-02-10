import styles from './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import StoresMap from './components/StoresMap/StoresMap';
import Articles from './components/Articles/Articles';
import Footer from './ui/Footer/Footer';
import HomePage from "./components/HomePage/HomePage";
import productImg from "./img/card/image.png";

function App() {
    const staticData = [
    ];
    return (
        <div className={styles.container}>
            <Header />
            <main>
                <HomePage />
                <ProductList products={staticData} />
                <SpecialOffers />
                <StoresMap />
                <Articles />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
