import { configureStore } from "@reduxjs/toolkit";
import ShoppingCartReduce from "./shoppingCartSlicer/ShoppingCartSlicer";

const Store = configureStore({
  reducer: { cart: ShoppingCartReduce },
});

export default Store;
