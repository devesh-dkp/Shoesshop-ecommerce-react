import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Card from "./components/Card";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./Cart/Cart";
import "./index.css";
import useLocalStorageState from "use-local-storage-state";
import { Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useLocalStorageState("cart", {});
  const addToCart = (product) => {
    product.quantity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
  };

  const isInCart = (productId) =>
    Object.keys(cart || {}).includes(productId.toString());
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }
    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          (newPrice <= selected && newPrice >= selected - 3000) ||
          title === selected
      );
    }

    return filteredProducts.map((product) => (
      <Card
        product={product}
        addToCart={addToCart}
        isInCart={isInCart}
        key={product.id}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation
                query={query}
                handleInputChange={handleInputChange}
                handleChange={handleChange}
                handleClick={handleClick}
              />
              <Products result={result} />
              <Footer />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Navigation
                query={query}
                handleInputChange={handleInputChange}
                handleChange={handleChange}
                handleClick={handleClick}
              />
              <Cart />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
