import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../components/features/newProduct"

import { Link } from "react-router-dom";

import "./AddProduct.css";

export default function AddProduct() {
  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    productName: "",
    color: "",
    price: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const productName = formData.productName;
    const color = formData.color;
    const price = formData.price;

    axios
      .post("http://localhost:5000/api/products", { productName, color, price })
      .then(() => {
         
        // dispatch(add({ productName: "", color: "", price: "" }));
        setFormData({ productName: "", color: "", price: "" });
      })
      
      .catch((error) => console.log(error));
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          className="form--input"
          onChange={handleChange}
          name="productName"
          value={formData.productName}
        />
        <input
          type="text"
          placeholder="Color"
          className="form--input"
          onChange={handleChange}
          name="color"
          value={formData.color}
        />
        <input
          type="text"
          placeholder="price"
          className="form--input"
          onChange={handleChange}
          name="price"
          value={formData.price}
        />
        <br />
        <button className="form--add">Add Product</button>
      </form>
      <br />
      <Link to="/products" style={{ textDecoration: "none" }}>
        See product list
      </Link>
    </div>
  );
}
