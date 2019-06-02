import React, { Component } from 'react'

class Die extends Component{
  render(){
    const rand = this.props.num;
    const words = ['one','two','three','four','five','six'];
    return(
        <div>
            <i class = {`fas fa-dice-${words[rand-1]}`}></i>
        </div>
    )
  }
}

export default Die;