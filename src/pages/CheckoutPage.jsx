import NavBar from "../components/NavBar";
import { useProducts } from "../context/ProductsProvider";
import styles from "./CheckoutPage.module.css";
import { FaMinus as Minus, FaPlus as Plus } from "react-icons/fa";
import { RiDeleteBin5Line as Delete } from "react-icons/ri";

function CheckoutPage() {
    const { totalCost, totalItems, chosenProducts, dispatch } = useProducts();

    const getTitle = title => {
        title = title.split(" ");
        return [title[0], title[1], title[2]].join(" ");
    };

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
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.details}>
                    <p>Total: {totalCost} $</p>
                    <p>Quantity: {totalItems}</p>
                    <p>Status: pending...</p>
                </div>
                <div className={styles.products}>
                    {!!Object.keys(chosenProducts).length &&
                        Object.values(chosenProducts).map(product => (
                            <div className={styles.product} key={product.id}>
                                <img src={product.image} alt="no image" />
                                <p>{product.title} </p>
                                <div className={styles.count}>
                                    <span>Price: {product.price}$</span>
                                    <div className={styles.buttons}>
                                        {product.count === 1 ? (
                                            <Delete
                                                className={styles.delete}
                                                onClick={() =>
                                                    dispatchHandler(product.id, -1)
                                                }
                                            />
                                        ) : (
                                            <Minus
                                                className={styles.button}
                                                onClick={() =>
                                                    dispatchHandler(product.id, -1)
                                                }
                                            />
                                        )}
                                        {product.count}
                                        <Plus
                                            className={styles.button}
                                            onClick={() =>
                                                dispatchHandler(product.id, +1)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default CheckoutPage;
