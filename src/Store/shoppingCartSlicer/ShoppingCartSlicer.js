import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  products: [],
  totalAmout: 0,
  totalQuantity: 0,
};

const ShoppingCartSlicer = createSlice({
  name: "shoppingCartProducts",
  initialState: initialValues,
  reducers: {
    addToCart(preState, action) {
      const product = action.payload;
      //check if product already exist
      const existItem = preState.products.find(
        (item) => item.id === product.id
      );
      if (!existItem) {
        //push new item
        preState.products.push({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          totalPrice: product.price,
          description: product.description,
          quantity: 1,
          category: product.category,
        });
      } else {
        //increase
        existItem.quantity++;
        existItem.totalPrice += existItem.price;
      }
      preState.totalAmout += product.price;
      preState.totalQuantity++;
    },
    removeFromCart(preState, action) {
      const product = action.payload;
      //check if product already exist
      const existItem = preState.products.find(
        (item) => item.id === product.id
      );
      if (existItem.quantity == 1) {
        preState.products = preState.products.filter(
          (item) => item.id !== product.id
        );
      } else if (existItem.quantity > 1) {
        existItem.quantity--;
        existItem.totalPrice -= product.price;
      }
      preState.totalQuantity--;
      preState.totalAmout -= product.price;
    },
  },
});

export const { addToCart, removeFromCart } = ShoppingCartSlicer.actions;

export default ShoppingCartSlicer.reducer;
