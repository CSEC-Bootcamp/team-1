import { LogIn } from "lucide-react";
import Fotter from "../components/layout/Fotter";
import Navbar from "../components/layout/Navbar";
import ProductDetail from "../components/product/ProductDetail";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RouteLayout() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}
