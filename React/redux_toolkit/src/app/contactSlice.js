import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const contactSlice = createSlice({
    name: 'contactSlice',
    initialState: {
        contact: [],
    },
    reducers: {

    }
})

export const insert_contact = createAsyncThunk('insert_contact',async(object)=>{
    const res = await axios.post(`http://localhost:3000/contact`, object);
    console.log(res);
    return res;
});


export const update_contact = createAsyncThunk('update_contact',async(object)=>{
    const res = await axios.put(`http://localhost:3000/contact/${object.id}`,object);
    console.log(res);
    return res;
});

export const delete_contact= createAsyncThunk('delete_contact',async(id)=>{
    const res = await axios.delete(`http://localhost:3000/contact/${id}`);
    console.log(res);
    return res;
});

export default contactSlice.reducer