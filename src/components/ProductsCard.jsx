import { Link } from "react-router-dom";

import { TbListDetails as Details, TbShoppingCartPlus as Shopping } from "react-icons/tb";
import { FaMinus as Minus, FaPlus as Plus } from "react-icons/fa";
import { IoMdPricetag as Price } from "react-icons/io";

import { useProducts } from "../context/ProductsProvider";
import styles from "./ProductsCard.module.css";

function ProductsCard({ data: product }) {
    const { products, dispatch } = useProducts();

    // const title = product.title.split(" ");

    const dispatchHandler = (id, count) => {
        dispatch({
            type: "INCREASE",
            payload: {
                id,
                count,
            },
        });
    };

    return (
        <div className={styles.container}>
            <img src={product.image} alt="no image" />
            <p>{product.title}</p>
            <span>
                <Price className={styles.price} />
                {product.price} $
            </span>
            <div className={styles.functions}>
                <Link to={product.id.toString()}>
                    <Details className={styles.details} />
                </Link>
                {products[product.id].count ? (
                    <div className={styles.buttons}>
                        <Minus
                            className={styles.button}
                            onClick={() => dispatchHandler(product.id, -1)}
                        />
                        {products[product.id].count}
                        <Plus
                            className={styles.button}
                            onClick={() => dispatchHandler(product.id, 1)}
                        />
                    </div>
                ) : (
                    <Shopping
                        className={styles.shopping}
                        onClick={() => dispatchHandler(product.id, 1)}
                    />
                )}
            </div>
        </div>
    );
}

export default ProductsCard;
