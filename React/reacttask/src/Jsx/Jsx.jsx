

/*
What is JSX?
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.


Coding JSX
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
JSX converts HTML tags into react elements.
Expressions in JSX
With JSX you can write expressions inside curly braces { }.

*/


import React from 'react'

function Jsx() {

  let data="Hi i am jsx";  
  const myelement1 = <h1>I Love JSX!</h1>
  const myelement2 = <h1>React is {5 + 5} times better with JSX</h1>; 
  const myelement3 = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
    );

  return (
    <div>

        {data}
        {myelement1}
        {myelement2}
        {myelement3}

        <hr />

        <h1 style={{backgroudColor: 'red', color: 'white'}}>Hi i am css </h1>

        <h1 className="mybox">Hello i am css from index.html</h1>
        <h1 class="mybox">Hello i am css from index.html</h1>


    </div>
  )
}

export default Jsx