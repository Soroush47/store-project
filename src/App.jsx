import { Routes, Route, Navigate } from "react-router-dom";

// import "./App.css";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsProvider from "./context/ProductsProvider";

function App() {
    // console.log("App");

    return (
        <ProductsProvider>
            <Routes>
                <Route path="/" element={<Navigate to="products" replace />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="products/:id" element={<ProductPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </ProductsProvider>
    );
}

export default App;
