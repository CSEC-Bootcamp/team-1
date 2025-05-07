import Fotter from "../components/layout/Fotter";
import Navbar from "../components/layout/Navbar";
import ProductDetail from "../components/product/ProductDetail";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fotter from "../components/layout/Fotter";

export default function RouteLayout() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}
