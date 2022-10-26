import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Homa/Home";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/productsDetails/ProductDetails";
import Cart from "./Components/Cart/Cart";
import AuthCard from "./Components/auth/authCard";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <AuthCard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
