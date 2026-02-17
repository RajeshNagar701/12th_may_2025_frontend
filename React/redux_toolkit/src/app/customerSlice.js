import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const customerSlice = createSlice({
    name: 'customerSlice',
    initialState: {
        customers: [],
        name: "Raj nagar"
    },
    reducers: {
        
    }
})



export const get_cust = createAsyncThunk('get_cust',async()=>{
    const res = await axios.get(`http://localhost:3000/customer`);
    console.log(res);
    return res;
});

export const insert_cust = createAsyncThunk('insert_cust',async(object)=>{
    const res = await axios.post(`http://localhost:3000/customer`, object);
    console.log(res);
    return res;
});


export const update_cust = createAsyncThunk('update_cust',async(object)=>{
    const res = await axios.put(`http://localhost:3000/customer/${object.id}`,object);
    console.log(res);
    return res;
});

export const delete_cust= createAsyncThunk('delete_cust',async(id)=>{
    const res = await axios.delete(`http://localhost:3000/customer/${id}`);
    console.log(res);
    return res;
});

export default customerSlice.reducer