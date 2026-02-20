import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const get_user=createAsyncThunk('get_user',async()=>{
    const res=await axios.get(`http://localhost:3000/user`);
    console.log(res);
    return res.data;
});

export const insert_user=createAsyncThunk('insert_user',async(object)=>{
    const res=await axios.post(`http://localhost:3000/user`,object);
    return res.data;
});

export const userSice=createSlice({
    name:'userSice',
    initialState:{
        name:"raj",
        user_arr:[]
    },
    reducers:{
       
    },
    extraReducers:{
        [get_user.fulfilled]:(state,action)=>{
            state.user_arr=action.payload;
        }
    }
})




export const { } = userSice.actions
export default userSice.reducer