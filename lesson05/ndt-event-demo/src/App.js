import React, { Component } from 'react'
import Ndtform1 from './components/Ndtform1'
import Ndtform2 from './components/Ndtform2'
import Ndtform3 from './components/Ndtform3'

export default class App extends Component {
  ndtsubmit = (param)=>{
    console.log("App:",param);
  }
  render() {
    return (
      <div>
        <h1>Controlled Component reactjs demo</h1>
      <Ndtform1/>
      <Ndtform2/>
      <Ndtform3 onsubmit={this.ndtsubmit}/>
    
      </div>
    )
  }
}
