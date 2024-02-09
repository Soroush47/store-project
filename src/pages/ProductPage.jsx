import { useNavigate, useParams } from "react-router-dom";

import { BiCategoryAlt as Category } from "react-icons/bi";
import { IoMdPricetag as Price } from "react-icons/io";
import { IoArrowBackOutline as Back } from "react-icons/io5";

import NavBar from "../components/NavBar";
import { useProducts } from "../context/ProductsProvider";

import styles from "./ProductPage.module.css";

function ProductPage() {
    const { products } = useProducts();
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products[id];
    // const title = product.title.split(" ");

    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <img src={product.image} alt="no image" />
                <div className={styles.details}>
                    <h2>{product.title}</h2>
                    <p className={styles.description}>{product.description}</p>
                    <div>
                        <Category className={styles.icon} />
                        {product.category}
                    </div>
                    <div className={styles.price}>
                        <p>
                            <Price className={styles.icon} />
                            {product.price}
                        </p>
                        <span onClick={() => navigate("/products", { replace: true })}>
                            <Back className={styles.backIcon} />
                            Back to Shop
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPage;
