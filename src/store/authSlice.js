import { createSlice } from "@reduxjs/toolkit";

const initialState = { userInfo: { id: "", username: "" ,email:"" ,image:""} };

const authSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
         setUserInfo:(state,action)=>{
            state.userInfo=action.payload;

         }  ,
         
         userLogOut:(state)=>{
            state.userInfo = { id: "", username: "", email: "", image: "" };
         }
    }

})

export const {setUserInfo,userLogOut}=authSlice.actions;

export default authSlice.reducer;