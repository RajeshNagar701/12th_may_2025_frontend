import React from 'react'

function D({name,setName}) {
  return (
    <div>
        <h1>Hi i am D Component : {name}</h1>
        <button onClick={() => setName("Nagar Raj From D")}>Change Main</button>
    </div>
  )
}

export default D