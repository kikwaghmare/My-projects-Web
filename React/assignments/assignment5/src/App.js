import React, { Component,PureComponent, useState } from 'react';
import './App.css';
import { Counter } from './Hoc';

class App extends PureComponent{

 
  constructor(){
    super();
    this.state={
      count:0
    }
  }

  render(){
    return (
      <>
        
          <h1>Pure Component Count {this.state.count}</h1>
          
          <div className='btnflex'>
          <button className='btn' onClick={()=>{this.setState({count: this.state.count + 1})}}>Increment</button>
          <button className='btn' onClick={()=>{this.setState({count: this.state.count - 1})}}>Decrement</button>
          </div>

        <div className='hoc'>
          <h1>High Order Component</h1>
        <Counter/>
        </div>
    </>
    );
  }
}

export default App