import React, { Component } from 'react'

export default class ParentClass extends Component {
    constructor(){
        super()
        this.state = {
            data : "DataFromParent"
        }
    }
  render() {
    return (
      <div>
        <Child 
        dataFromParent = {this.state.data}
        />
      </div>
    )
  }
}

export class Child extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:this.props.dataFromParent
        }
    }
  render() {
    return (
      <div>
        {this.state.data}
      </div>
    )
  }
}
