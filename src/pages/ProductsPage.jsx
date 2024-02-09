import Categories from "../components/Categories";
import NavBar from "../components/NavBar";
import ProductsCard from "../components/ProductsCard";
import Search from "../components/Search";
import { useProducts } from "../context/ProductsProvider";
import styles from "./ProductsPage.module.css";

function ProductsPage() {
    const {
        searchProducts: [, searchProducts],
        categories,
        loading,
        dispatch,
    } = useProducts();

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

/*
https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg

1 :
81fPKd-2AYL._AC_SL1500_.jpg

2 :
71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg

3
: 
71li-ujtlUL._AC_UX679_.jpg"
4
: 
"71YXzeOuslL._AC_UY879_.jpg"
5
: 
"71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
6
: 
"61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
7
: 
"71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
8
: 
"51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
9
: 
"61IBBVJvSDL._AC_SY879_.jpg"
10
: 
"61U7T1koQqL._AC_SX679_.jpg"
11
: 
"71kWymZ+c+L._AC_SX679_.jpg"
12
: 
"61mtL65D4cL._AC_SX679_.jpg"
13
: 
"81QpkIctqPL._AC_SX679_.jpg"
14
: 
"81Zt42ioCgL._AC_SX679_.jpg"
15
: 
"51Y5NI-I5jL._AC_UX679_.jpg"
16
: 
"81XH0e8fefL._AC_UY879_.jpg"
17
: 
"71HblAHs5xL._AC_UY879_-2.jpg"
18
: 
"71z3kpMAYsL._AC_UY879_.jpg"
19
: 
"51eg55uWmdL._AC_UX679_.jpg"
20
: 
"61pHAEJ4NML._AC_UX679_.jpg"
*/
