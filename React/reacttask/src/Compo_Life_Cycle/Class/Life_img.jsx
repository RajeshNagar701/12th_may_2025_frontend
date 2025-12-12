import React, { Component } from 'react'

export class Life_img extends Component {

    // function autocall when component load
    componentDidMount(){
        console.log('Component Birth');
    }

     // function autocall when component unload
    componentWillUnmount(){
        console.log('Component Death');
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