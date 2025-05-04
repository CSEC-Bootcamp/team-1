import ProductPage from "../pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RouteLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
