import { Link, useNavigate, useParams } from "react-router-dom";

import { BiCategoryAlt as Category } from "react-icons/bi";
import { IoMdPricetag as Price } from "react-icons/io";
import { IoArrowBackOutline as Back } from "react-icons/io5";

import { useProductsDetails } from "../context/ProductsProvider";
import styles from "./ProductPage.module.css";
import Loader from "../components/Loader";

function ProductPage() {
    const { id } = useParams();
    const product = useProductsDetails(id);
    return (
        <>
            {!product ? (
                <Loader />
            ) : (
                <div className={styles.container}>
                    <img src={product.image} alt="no image" />
                    <div className={styles.details}>
                        <div className={styles.description}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.icons}>
                                <div>
                                    <Category className={styles.icon} />
                                    {product.category}
                                </div>
                                <div>
                                    <Price className={styles.icon} />
                                    {product.price} $
                                </div>
                            </div>
                            <Link to="/products" replace className={styles.link}>
                                <Back className={styles.backIcon} />
                                Back to Shop
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductPage;
