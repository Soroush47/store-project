import { Link } from "react-router-dom";

import { useProducts } from "../context/ProductsProvider";

import styles from "./Layout.module.css";
import { FaBasketShopping as Basket } from "react-icons/fa6";

function Layout({ children }) {
    const { totalItems } = useProducts();


    return (
        <div className={styles.container}>
            <div>
                <header className={styles.header}>
                    <Link to="/products" className={styles.shop}>
                        OnlineShop
                    </Link>
                    <Link to="/checkout">
                        {!!totalItems && <span>{totalItems}</span>}
                        <Basket className={styles.basket} />
                    </Link>
                </header>
                {children}
            </div>
            <footer className={styles.footer}>
                <p>Developed by Soroush Ghasemi</p>
            </footer>
        </div>
    );
}

export default Layout;
