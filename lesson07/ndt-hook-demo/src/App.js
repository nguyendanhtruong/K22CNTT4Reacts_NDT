import React, { Component } from 'react'
import Ndtusestate from './components/Ndtusestate'
import NdtUseEffect from './components/NdtUseEffect'
import NdtUseContext from './components/NdtUseContext'
import'./App.css'
export default class App extends Component {
  render() {
    return (
    
       < div className='container border mt-3'>
        <h1 className='text-center'>Nguyễn Danh Trường - Hook</h1>
        <hr/>
        <Ndtusestate/>  
        <hr/>
        <NdtUseEffect/>
        <hr/>
        <NdtUseContext/>
        <hr/>
        
      </div>
    
    )
  }
}
