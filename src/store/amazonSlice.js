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
    removeItemFromCart:(state,action)=>{
        const newId=action.payload;
        const itemToDelete=state.products.find(item=>item.id===newId);
        state.totalQuantity--;
        if(itemToDelete.quantity===1){
            state.products=state.products.filter(item=>item.id!==newId);
        }
        else{
            itemToDelete.quantity--;
            itemToDelete.totalPrice=itemToDelete.totalPrice-itemToDelete.price;
        }

    },
    resetCart:(state)=>{
        state.products=[];
        state.totalQuantity=0;
    }
  },
});

export const { addToCart, removeItemFromCart, resetCart } = amazonSlice.actions;

export default amazonSlice.reducer;
