import React, { Component } from 'react'

export default class NdtListProducts extends Component {
    render() {
        let { Ndt_ListProducts } = this.props
        let Ndt_Products = Ndt_ListProducts.map((item, index) => {
            return (
                <>
                    <tr key={index}>
                        <td>{item.Ndt_productId}</td>
                        <td>{item.Ndt_productName}</td>
                        <td>{item.Ndt_quantity}</td>
                        <td>{item.Ndt_price}</td>
                    </tr>
                </>
            )
        })
        return (
            <div>
                <h2>Danh sách sản phẩm</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Ndt_Products}
                    </tbody>
                </table>
            </div>
        )
    }
}
