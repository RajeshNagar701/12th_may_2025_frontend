import React from 'react'


import './mystyle1.css';

function Mycss() {


  const internal={color:"red",backgroundColor:"orange"}  
  return (
    <div>
         
         <h1 style={{color:"red",backgroundColor:"yellow"}}>Hi i am inline css </h1>

         <h1 style={internal}>Hi i am Internal css </h1>   

         <h1 className='box1'>Hi i am external css </h1>  


    </div>
  )
}

export default Mycss