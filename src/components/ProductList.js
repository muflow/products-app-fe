// import React from "react";
//import React, { Component } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";

import "./productList.css";

export default function ProductList() {
  //const newProd = useSelector((state) => state.newProd.value)

  const [listOfProducts, setListOfProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((responseFromApi) => {
      setListOfProducts(responseFromApi.data);
    });
  }, []);

  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        Go to Add Product Page
      </Link>
      <h1>Product list</h1>
      <div className="products-container">
        {listOfProducts
          .map((product) => {
            return (
              <div className="product-card " key={product._id}>
                <h3>Name: {product.productName}</h3>
                <p>Color: {product.color}</p>
                <p>Price: {product.price}€</p>
              </div>
            );
          })
          .reverse()}
      </div>
    </div>
  );
}

// export default function ProductList() {
//   const [listOfProducts, setListOfProducts] = React.useState([]);

//   React.useEffect(() => {
//     axios.get("http://localhost:5000/api/products").then((responseFromApi) => {
//       setListOfProducts(responseFromApi.data);
//     });
//   }, []);

//   return (
//     <div>
//       <Link to="/" style={{ textDecoration: "none" }}>
//         Go to Add Product Page
//       </Link>
//       <h2>Product list</h2>
//       <div>
//         {listOfProducts.map((product) => {
//           return (
//             <div key={product._id}>
//               <h3>{product.productName}</h3>
//               <p>{product.color}</p>
//               <p>{product.price}</p>
//             </div>
//           );
//         }).reverse()}
//       </div>
//     </div>
//   );
// }

// WITH CLASS COMPONENT

// class ProjectList extends Component {
//   state = { listOfProducts: [] };

//   getAllProducts = () => {
//     axios.get(`http://localhost:5000/api/products`).then((responseFromApi) => {
//       this.setState({
//         listOfProducts: responseFromApi.data,
//       });
//     });
//   };

//   componentDidMount() {
//     this.getAllProducts();
//   }

//   render() {
//     return (
//       <div>
//         <div style={{ width: "60%", float: "left" }}>
//           {this.state.listOfProducts.map((product) => {
//             return (
//               <div key={product._id}>
//                 <p>{product.productName}</p>
//                 <p>{product.color}</p>
//                 <p>{product.price}</p>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     );
//   }
// }

// export default ProjectList;
