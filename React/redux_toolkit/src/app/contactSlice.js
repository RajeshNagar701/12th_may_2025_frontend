import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const get_contact=createAsyncThunk('get_contact',async()=>{
    const res=await axios.get(`http://localhost:3000/contact`);
    console.log(res);
    return res.data;
});

export const insert_contact=createAsyncThunk('insert_contact',async(object)=>{
    const res=await axios.post(`http://localhost:3000/contact`,object);
    return res.data;
});

export const delete_contact=createAsyncThunk('delete_contact',async(id)=>{
    const res=await axios.delete(`http://localhost:3000/contact/${id}`);
    return res.data;
});

export const update_contact=createAsyncThunk('update_contact',async(object)=>{
    const res=await axios.patch(`http://localhost:3000/contact/${object.id}`,object);
    return res.data;
});

export const contactSice=createSlice({
    name:'contactSice',
    initialState:{
        contact_arr:[]
    },
    reducers:{
       
    },
    extraReducers:{
        [get_contact.fulfilled]:(state,action)=>{
            state.contact_arr=action.payload;
        }
    }
})




export const { } = contactSice.actions
export default contactSice.reducer