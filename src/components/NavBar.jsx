import { Link } from "react-router-dom";

import { useProducts } from "../context/ProductsProvider";
import styles from "./NavBar.module.css";
import { FaBasketShopping as Basket } from "react-icons/fa6";

function NavBar() {
    const { totalItems } = useProducts();

    // console.log({ totalItems });
    // console.log("navbar");

    // const sum = Object.values(products).reduce((acc, cur) => cur.count + acc, 0);

    return (
        <div className={styles.container}>
            <Link to="/products" className={styles.boto}>
                BotoShop
            </Link>
            <Link to="/checkout">
                {!!totalItems && <span>{totalItems}</span>}
                <Basket className={styles.basket} />
            </Link>
        </div>
    );
}

export default NavBar;
