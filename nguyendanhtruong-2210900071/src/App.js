import React, { Component } from 'react'
import NdtListProducts from './component/NdtListProducts.js ';
import NdtProductsAdd from './component/NdtProductsAdd';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Ndt_Products: [
        {
          ndt_productId: "2210900071",
          ndt_productName: "Nguyễn Danh Trường",
          ndt_quantity: 15,
          ndt_price: 1000
        },
        {
          ndt_productId: "P002",
          ndt_productName: "IPhone 12",
          ndt_quantity: 20,
          ndt_price: 1250
        },
        {
          ndt_productId: "P003",
          ndt_productName: "IPhone 14",
          ndt_quantity: 20,
          ndt_price: 1250
        },
      ]
    };
  }
  ndtHandleSubmit = (param) => {
    let { Ndt_Products } = this.state
    Ndt_Products.push(param)
    this.setState({
      Ndt_Products: Ndt_Products
    })
  }
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1 className="display-4">Nguyễn Danh Trường - 2210900071</h1>
        </div>
        <NdtListProducts Ndt_ListProducts={this.state.Ndt_Products} />
        <hr />
        <NdtProductsAdd onSubmit={this.ndtHandleSubmit} />
      </div>
    )
  }
}
