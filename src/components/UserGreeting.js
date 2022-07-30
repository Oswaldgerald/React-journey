import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggeedIn : false
      }
    }
  render() {
    return this.state.isLoggeedIn ?(
      <div>Welcome Oswald</div>)
      :(
      <div>Welcome Guest</div>
       )
    // let message
    // if(this.state.isLoggeedIn){
    //   message = <div>Welcome Oswald</div>  
    // }
    // else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
    // if(this.state.isLoggeedIn){
    //     return <div>Welcome Oswald</div>
    // }
    // else{
    //     return <div>Welcome Guest</div>
    // }
    // return (
    // <div>
    //   <div>Welcome Oswald</div>
    //   <div>Welcome Guest</div>
    // </div>

    //   )
  }
}

export default UserGreeting
