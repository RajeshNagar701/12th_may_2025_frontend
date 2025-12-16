import React, { Component } from 'react'

export class Life_img extends Component {

   // Component Mounting 
   componentDidMount(){
    console.log('Component Mounting (Creation)');
   }

   // Component Unmounting 
   componentWillUnmount(){
    console.log('Component Unmounting (Removal)');
   }

    render() {
        return (
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwL84l73tWyp5uQltmrdAN_FxIlZdPwafGw&s" alt="" width="100px" />
            </div>
        )
    }
}

export default Life_img