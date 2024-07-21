import { useProducts } from "../context/ProductsProvider";
import styles from "./CheckoutPage.module.css";
import { FaMinus as Minus, FaPlus as Plus } from "react-icons/fa";
import { RiDeleteBin5Line as Delete } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits as Quantity } from "react-icons/md";
import { IoCheckmarkCircle as Check } from "react-icons/io5";
import { TbChecklist } from "react-icons/tb";

function CheckoutPage() {
    const { totalCost, totalItems, chosenProducts, dispatch } = useProducts();

    const getTitle = title => {
        title = title.split(" ");
        return [title[0], title[1], title[2]].join(" ");
    };

    const dispatchHandler = (id, count) => {
        dispatch({
            type: "CHANGE",
            payload: {
                id,
                count,
            },
        });
    };

    return (
        <>
            {!!Object.keys(chosenProducts).length ? (
                <div className={styles.container}>
                    <div className={styles.details}>
                        <p>
                            <span>
                                <TbChecklist className={styles.icon} />
                                Total:
                            </span>
                            {totalCost} $
                        </p>
                        <p>
                            <span>
                                <Quantity className={styles.icon} />
                                Quantity:
                            </span>
                            {totalItems}
                        </p>
                        <p>
                            <span>
                                <Check className={styles.icon} />
                                Status:
                            </span>
                            pending...
                        </p>
                        <button onClick={() => dispatch({ type: "CHECKOUT" })}>
                            Checkout
                        </button>
                    </div>
                    <div className={styles.products}>
                        {Object.values(chosenProducts).map(product => (
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
            ) : (
                <div className={styles.empty}> <span>Your basket is empty!</span> </div>
            )}
        </>
    );
}

export default CheckoutPage;
