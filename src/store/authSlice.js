import { createSlice } from "@reduxjs/toolkit";

const initialState = { userInfo: { id: "", username: "" ,email:"" ,image:""},userDataLoading:false,signOutLoading:false };

const authSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
         setUserInfo:(state,action)=>{    
            state.userInfo=action.payload;

         }  ,
         userLogOut:(state)=>{
            state.userInfo = { id: "", username: "", email: "", image: "" };
         },
         setUserDataLoading:(state,action)=>{
            state.userDataLoading=action.payload;
         },
         setSignOutLoading:(state,action)=>{
            state.signOutLoading=action.payload;
         }
         


    }

})

export const {setUserInfo,userLogOut,setUserDataLoading,setSignOutLoading}=authSlice.actions;

export default authSlice.reducer;