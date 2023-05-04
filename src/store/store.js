import { configureStore } from "@reduxjs/toolkit";
import amazonReducer from "./amazonSlice";


const store = configureStore({
  reducer: { amazon: amazonReducer },
});

export default store;