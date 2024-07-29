import { Link } from "react-router-dom";

import { TbListDetails as Details, TbShoppingCartPlus as Shopping } from "react-icons/tb";
import { FaMinus as Minus, FaPlus as Plus } from "react-icons/fa";
import { RiDeleteBin5Line as Delete } from "react-icons/ri";
import { IoMdPricetag as Price } from "react-icons/io";

import { useProducts } from "../context/ProductsProvider";
import images from "../constants/images";
import styles from "./ProductsCard.module.css";

function ProductsCard({ data: product }) {
    const { dispatch, chosenProducts } = useProducts();

    const dispatchHandler = (id, count) => {
        dispatch({
            type: "CHANGE",
            payload: {
                id,
                count,
            },
        });
    };

    console.log(product);

    return (
        <div className={styles.container}>
            <img src={images[product.id - 1]} alt="no image" />
            <h3>{product.title}</h3>
            <span className={styles.price}>
                <Price className={styles.priceTag} />
                {product.price} $
            </span>
            <div className={styles.functions}>
                <Link to={product.id.toString()}>
                    <Details className={styles.details} />
                </Link>
                {chosenProducts[product.id] ? (
                    <div className={styles.buttons}>
                        {chosenProducts[product.id].count === 1 ? (
                            <Delete
                                className={styles.delete}
                                onClick={() => dispatchHandler(product.id, -1)}
                            />
                        ) : (
                            <Minus
                                className={styles.button}
                                onClick={() => dispatchHandler(product.id, -1)}
                            />
                        )}
                        <span>{chosenProducts[product.id].count}</span>
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
