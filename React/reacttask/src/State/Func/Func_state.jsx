
/*

React components has a built-in state object.

React is mutable state object

The state object is where you store property values that belong to the component.

When the state object changes, the component re-renders.

The React useState Hook allows us to track state in a function component.

Import useState

We initialize our state by calling useState in our function component.
useState accepts an initial state and returns two values:

The current state.
A function that updates the state.

var [name,setName]=usestate("Rajesh nagar");
{name}


var [mydata,setMydata]=usestate({
        id:"1",
        name:"Rajesh nagar",
        age:33,
        mobile:31548799
});

{mydata.name}



*/


import React, { useState } from 'react'
import Img_state from '../Img_state';

function Func_state() {

    const [name, setName] = useState("Rajesh Nagar");

    const [data, setData] = useState({
        number: 1,
        iImage: true
    });

    return (
        <div>
            <button onClick={() => setName("Akash Patel")}>Change</button>
            <h1>{name}</h1>

            <hr />

            <button onClick={() => setData({ ...data, number: data.number + 1 })}>+</button>
            <h1>{data.number}</h1>
            <button onClick={() => setData({ ...data, number: data.number - 1 })}>-</button>

            <hr />

            <button onClick={()=>setData({...data,iImage:false})}>Hide</button>
            <button onClick={()=>setData({...data,iImage:true})}>Show</button>
            <button onClick={()=>setData({...data,iImage:!data.iImage})}>Toggle</button>

            {data.iImage ? <Img_state /> : null}
        </div>
    )
}

export default Func_state