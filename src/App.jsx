import { useState } from "react";
// import ProductPage from "./pages/ProductPage";
import RouteLayout from "./routes";

function App() {
  const [count, setCount] = useState(0);
  return <RouteLayout />;
}
export default App;
