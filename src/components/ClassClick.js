import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('Class component triggered')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click me</button>
         </div>
    )
  }
}

export default ClassClick
