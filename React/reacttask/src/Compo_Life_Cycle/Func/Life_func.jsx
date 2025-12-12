

/*
There are 3 phases in the React Component LifeCycle


Mounting Phase
Updating Phase
Unmounting Phase

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

1. No dependency passed:

useEffect(() => {
  //Runs on every render
});


2. An empty array:

useEffect(() => {
  //Runs only on the first render
}, []);


3. Props or state values:

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state])

*/

import React, { useEffect, useState } from 'react'
import Img_life from './Img_life';

function Life_func() {

    const [data, setData] = useState({
        number: 1,
        isImage: true
    });

    // call automatica in all time render
    useEffect(() => {
        console.log('Main Component Birth');
    },[data.number]);



    return (
        <div>
            <button className='btn btn-primary' onClick={() => setData({ ...data, isImage: false })}>Hide</button>
            <button className='btn btn-primary' onClick={() => setData({ ...data, isImage: true })}>Show</button>
            <button className='btn btn-primary' onClick={() => setData({ ...data, isImage: !data.isImage })}>Hide/Show</button>

            {
                data.isImage ? <Img_life /> : null
            }


            <button className='btn btn-primary' onClick={() => setData({ ...data, number: data.number+1 })}>Plus</button>
            <h1>{data.number}</h1>
        </div>
    )
}

export default Life_func