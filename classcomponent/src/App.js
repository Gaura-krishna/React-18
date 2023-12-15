// import React from "react"

// export class App extends React.Component {
//   //first way of creacting class component in react without destructure 
//   render() {
//     return (
//       <>
//         <h1> hello this is first sample</h1>
//       </>
//     )
//   }
// }


// import { Component } from "react";
// export default class App extends Component {
//   //second way of creacting class component in react with destructure 
//   render() {
//     return (
//       <>
//         <h1> hello this is second sample</h1>
//       </>
//     )
//   }
// }


//-----------------------------------------------------------------------------------------------------------------


//Props using in class component



// import React,{Component}from "react"
// import Classprops from "./components/Classprops"

// export class App extends Component {
//   render() {
//     return (
//       <>
//         <h1> hello this is first sample</h1>
//         <Classprops component="Class" />
//       </>
//     )
//   }

// }


//-----------------------------------------------------------------------------------------------------------------
//States in class component

//Note: if your working with class component the you will have to use this. keyword alot keep it in mind

// I'm implementing a count using class component 


import React, { Component } from "react"
export class App extends Component {

  // const [count, setCount] = useState(0) this is how we use usestate in function component
  //While working with state in class component , state are in object in class component
  
  state = {
    count: 0,
  }
  handlecountAdd = () => {
   // we use this.setState() instead of setcount
    this.setState(countState => {
      return {
        count: countState.count + 1
      }
    })
  }
  handlecountSub = () => {
    // we use this.setState() instead of setcount
    this.setState(countState => {
      return {
        count: countState.count - 1
      }
    })
  }
  
  render(){
    return (
      <div style={{textAlign:'center'}}>
        <h1>{this.state.count}</h1>
        <button onClick={this.handlecountAdd}>+</button>
        <button onClick={this.handlecountSub}>-</button>
      </div>
    )
  }
}