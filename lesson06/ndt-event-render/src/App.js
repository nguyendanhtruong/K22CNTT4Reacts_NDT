import React, { Component } from 'react'
import NdtProduct from './compoments/NdtProducts';
import NdtProductadd from './compoments/NdtProductadd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products :[
        {title:'Nguyễn Danh Trường ',id:2210900071,status:1},
        {title:'Cabbage',id:1,status:0},
        {title:'Garlic',id:2,status:0},
        {title:'Apple',id:3,status:1},
        {title:'sam sung',id:4,status:5},
      ]
    }
     
  }
  ndthandldsumit =(param)=>{
    console.log("App",param);
    let{products}=this.state;
    products.push(param);
    this.setState({
      products:products 
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Nguyễn Danh Trường -render data</h1>
        <NdtProduct renderProducts={this.state.products}/>
        <hr/>
        <NdtProductadd onsubmit ={this.ndthandldsumit }/>
      </div>
    )
  }
}
