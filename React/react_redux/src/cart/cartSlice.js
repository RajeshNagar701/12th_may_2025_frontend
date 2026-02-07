import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({ 
    name: 'cart',
    initialState: {
        number: 0,
        name:"Rajesh nagar"
    },
    reducers: {
    change: (state) => {
        return({...state,name:"Akash Nagar"})
    },
    increment: (state) => {
        return({...state,number:state.number+1})
    },
    decreement: (state) => {
        return({...state,number:state.number-1})
    }
}});


export const { increment, decreement, change } = cartSlice.actions

export default cartSlice.reducer