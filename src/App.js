import { Routes, Route } from "react-router-dom";

import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;

// react-router-dom installed!
