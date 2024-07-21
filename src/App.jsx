import { Routes, Route, Navigate } from "react-router-dom";

import ProductsProvider from "./context/ProductsProvider";
import Layout from "./layout/Layout";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

    return (
        <ProductsProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Navigate to="products" replace />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="products/:id" element={<ProductPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>
        </ProductsProvider>
    );
}

export default App;
