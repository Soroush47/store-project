import Categories from "../components/Categories";
import NavBar from "../components/NavBar";
import ProductsCard from "../components/ProductsCard";
import Search from "../components/Search";
import { useProducts } from "../context/ProductsProvider";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
    const {
        searchProducts: [text, searchProducts],
        categories,
        loading,
        dispatch,
    } = useProducts();

    console.log({ category: categories[0], search: text, products: searchProducts });

    return (
        <>
            <NavBar />
            <Search />
            <div className={styles.container}>
                <div className={styles.products}>
                    {loading ? (
                        <p>loading...</p>
                    ) : (
                        searchProducts.map(product => (
                            <ProductsCard key={product.id} data={product} />
                        ))
                    )}
                </div>
                <Categories categories={categories} dispatch={dispatch} />
            </div>
        </>
    );
}

export default ProductsPage;
