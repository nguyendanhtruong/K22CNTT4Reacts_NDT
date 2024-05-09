import React, { Component } from 'react'

export default class NdtProduct extends Component {
  render() {
    let{renderProducts}=this.props;
    console.log("Products:",renderProducts);

    let elementProduct =renderProducts.map((item,index)=>{
    return(
      <>
      <tr key={index} >
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.status===1?'active':'nonactive'}</td>
      </tr>
      </>
    )
    })
    return (
      <div>
        <h2>danh sách sản phẩm</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Id</th>
              <th>title</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
           {elementProduct}
          </tbody>
        </table>
      </div>
    )
  }
}
