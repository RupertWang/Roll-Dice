import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component{
  constructor(props){
      super(props);
      this.state={rand1:1, rand2:2};
      this.roll = this.roll.bind(this);
  }
  roll(){
      let r1 = Math.floor(Math.random()*6+1);
      let r2 = Math.floor(Math.random()*6+1);
      this.setState({rand1:r1,rand2:r2});
  }
  render(){
    return(
        <div>
            <Die num = {this.state.rand1}/>
            <Die num = {this.state.rand2}/>
            <button onClick = {this.roll}>Roll Dice!</button>
        </div>
    )
  }
}

export default RollDice;