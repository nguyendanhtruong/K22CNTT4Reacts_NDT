import React, { Component } from 'react'
import Ndt_eventform1 from './components/Ndt_eventform1'
import Ndt_eventform2 from './components/Ndt_eventform2'
import Ndt_eventform3 from './components/Ndt_eventform3'
import Ndt_eventform4 from './components/Ndt_eventform4'

export default class App extends Component {
  render() {
    return (
      <div>
        <Ndt_eventform1/>
        <Ndt_eventform2/>
        <Ndt_eventform3/>
        <Ndt_eventform4 name="Nguyễn Danh Trường"/>
      </div>
    )
  }
}



