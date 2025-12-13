
/*
Using the state Object
Refer to the state object anywhere in the component by using the 

constructor(){
    super();
    this.state = {
            name: "Rajesh Nagar",
    }
}
print : {this.state.name}

Changing the state Object
To change a value in the state object, use the this.setState() method.

this.setState({color: "blue"})


*/


import React, { Component } from 'react'
import Img_state from '../Img_state'

export class State_class extends Component {

  constructor(){
    super()
    this.state={
        name:"Raj nagar",
        number:1,
        iImage:true
    }
  }  

  render() {
    return (
      <div>
        <button onClick={()=>this.setState({name:"Akash Patel"})}>Change</button>
        <h1>{this.state.name}</h1>

        <hr />
        <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={()=>this.setState({number:this.state.number-1})}>-</button>

        <hr />

        <button onClick={()=>this.setState({iImage:false})}>Hide</button>
        <button onClick={()=>this.setState({iImage:true})}>Show</button>
        <button onClick={()=>this.setState({iImage:!this.state.iImage})}>Toggle</button>
        <h1>
            {this.state.iImage? <Img_state/> : null}
        </h1>
      </div>
    )
  }
}

export default State_class