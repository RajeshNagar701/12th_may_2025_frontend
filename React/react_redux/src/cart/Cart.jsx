import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change, decreement, increment } from './cartSlice';

function Cart() {
   const {number,name} =useSelector((state)=>{ return state.cart});
   const dispatch=useDispatch();
  return (
    <div className='container mt-5'>
        
        <button onClick={()=>dispatch(change())} className='btn btn-primary'>Change</button>
        <h1>{name}</h1>
        <hr />
        <button onClick={()=>dispatch(increment())} className='btn btn-primary'>+</button>
            <h1>{number}</h1>
        <button onClick={()=>dispatch(decreement())} className='btn btn-primary'>-</button>
    </div>
  )
}

export default Cart