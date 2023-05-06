import { configureStore } from "@reduxjs/toolkit";
import amazonReducer from "./amazonSlice";
import authReducer from "./authSlice"


const store = configureStore({
  reducer: { amazon: amazonReducer,auth:authReducer },
});

export default store;