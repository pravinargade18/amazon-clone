import { createSlice } from "@reduxjs/toolkit";

const amazonSlice = createSlice({
  name: "amazon",
  initialState: { products: [], totalQuantity: 0, userInfo: [] },
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (item) => item.id === newProduct.id
      );

      state.totalQuantity++;
      if (!existingProduct) {
        state.products.push({
          id: newProduct.id,
          title: newProduct.title,
          description: newProduct.description,
          price: newProduct.price,
          category: newProduct.category,
          image: newProduct.image,
          totalPrice: newProduct.price,
          quantity: newProduct.quantity,
        });
      }
      else{
        existingProduct.quantity++;
        existingProduct.totalPrice=existingProduct.totalPrice+newProduct.price;
      }
    },
  },
});

export const { addToCart } = amazonSlice.actions;

export default amazonSlice.reducer;
