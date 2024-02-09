import { useState } from "react";

import { IoIosSearch as SearchIcon } from "react-icons/io";

import styles from "./Search.module.css";
import { useProducts } from "../context/ProductsProvider";

function Search() {
    const [search, setSearch] = useState(false);
    const {
        searchProducts: [text],
        dispatch,
    } = useProducts();

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Search..."
                value={search === false ? text : search}
                onChange={e => setSearch(e.target.value)}
                onKeyUp={event =>
                    event.key === "Enter" &&
                    dispatch({ type: "SEARCH", payload: search.toLowerCase() })
                }
            />
            <SearchIcon
                className={styles.search}
                onClick={() => {
                    dispatch({ type: "SEARCH", payload: search.toLowerCase() });
                }}
            />
        </div>
    );
}

export default Search;
