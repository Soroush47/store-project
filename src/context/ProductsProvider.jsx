import { createContext, useEffect, useContext, useReducer } from "react";
import api from "../services/config";

const ProductsContext = createContext();

const initialState = {
    products: {},
    chosenProducts: {},
    searchProducts: ["", []],
    categories: ["", []],
    totalCost: 0,
    totalItems: 0,
    loading: true,
};

const reducer = (state, action) => {
    const { products, categories, id, count } = action.payload;

    switch (action.type) {
        case "INITIAL":
            return {
                ...state,
                products,
                categories: ["all", ["all", ...categories]],
                searchProducts: ["", Object.values(products)],
                loading: false,
            };
        case "INCREASE":
            // console.log({
            //     price,
            //     totalCost: state.totalCost,
            //     "price = 109.95": price === 109.95,
            // });

            const newProduct = {
                ...state.products[id],
                count: state.products[id].count + count,
            };

            let chosenProducts;

            if (!newProduct.count) {
                let {
                    [id]: { ...a },
                    ...newChosenProducts
                } = { ...state.chosenProducts };
                chosenProducts = newChosenProducts;
            } else {
                chosenProducts = {
                    ...state.chosenProducts,
                    [id]: newProduct,
                };
            }

            let totalCost = state.totalCost + state.products[id].price * count;
            // console.log({ totalCost });
            if (!Number.isInteger(totalCost)) {
                totalCost = Math.round(totalCost * 100) / 100;
                // console.log({ totalCost });
            }

            return {
                ...state,
                products: {
                    ...state.products,
                    [id]: newProduct,
                },
                chosenProducts,
                totalItems: state.totalItems + count,
                totalCost,
            };
        case "SEARCH":
            const searchProducts = Object.values(state.products).filter(product =>
                state.categories[0] === "all"
                    ? product.title.toLowerCase().includes(action.payload)
                    : product.category === state.categories[0] &&
                      product.title.toLowerCase().includes(action.payload)
            );
            return { ...state, searchProducts: [action.payload, searchProducts] };
        case "CATEGORY":
            const newProducts = Object.values(state.products).filter(product =>
                action.payload === "all"
                    ? product.title.toLowerCase().includes(state.searchProducts[0])
                    : product.category === action.payload &&
                      product.title.toLowerCase().includes(state.searchProducts[0])
            );
            return {
                ...state,
                searchProducts: [state.searchProducts[0], newProducts],
                categories: [action.payload, state.categories[1]],
            };
        default:
            throw new Error("action failed");
    }
};

function ProductsProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const getData = async () => {
            try {
                const products = await api.get("/products");
                const categories = await api.get("products/categories");
                dispatch({ type: "INITIAL", payload: { products, categories } });
            } catch (error) {
                console.log(error.message);
            }
        };
        getData();
    }, []);

    return (
        <ProductsContext.Provider
            value={{
                products: state.products,
                chosenProducts: state.chosenProducts,
                searchProducts: state.searchProducts,
                totalCost: state.totalCost,
                totalItems: state.totalItems,
                categories: state.categories,
                loading: state.loading,
                dispatch,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export const useProducts = () => useContext(ProductsContext);

export default ProductsProvider;
