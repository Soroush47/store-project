import styles from "./Categories.module.css";

function Categories({ categories, dispatch }) {
    return (
        <div className={styles.container}>
            <h3>Categories</h3>
            {categories[1].map((cat, index) => {
                return (
                    <p
                        key={index}
                        onClick={() => dispatch({ type: "CATEGORY", payload: cat })}
                        className={categories[0] === cat ? styles.selected : styles.hover}
                    >
                        {cat === "all"
                            ? "All"
                            : cat // toUpperCaseFirstLetter
                                  .split(" ")
                                  .map(
                                      word => word.charAt(0).toUpperCase() + word.slice(1)
                                  )
                                  .join(" ")}
                    </p>
                );
            })}
        </div>
    );
}

export default Categories;
