import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import { colors, fontSizes } from "./theme/theme";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Nav from "./components/Nav/Nav";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import WishList from "./pages/WishList/WishList";
import Auth from "./pages/Auth/Auth";
import UserContext from "./UserContext";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CartContext from "./CartContext";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: Open-sans, sans-serif;
    font-size: ${fontSizes.md};
    color: ${colors.darkBlue};
  }
`;

//context TODO:
// - user context
// - shopping cart items

const App: React.FC = () => {
  const [sideBarState, setSideBarState] = useState(false);
  const [value, setValue] = useState("");
  const [cartValue, setCartValue] = useState("");

  const toggleSideBar = () => {
    setSideBarState(!sideBarState);
  };
  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ value, setValue }}>
        <CartContext.Provider value={{ cartValue, setCartValue }}>
          <BrowserRouter>
            <Nav toggleSideBar={toggleSideBar} />
            {sideBarState && <SideBar toggleFn={toggleSideBar} />}
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/wishlist" element={<WishList />} />

              <Route path="/user" element={<div>user page</div>} />
              <Route path="/login" element={<Auth login />} />
              <Route path="/signup" element={<Auth />} />
              <Route path="categories/:id" element={<CategoryPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContext.Provider>
      </UserContext.Provider>

      <div className="App"></div>
    </>
  );
};

export default App;
