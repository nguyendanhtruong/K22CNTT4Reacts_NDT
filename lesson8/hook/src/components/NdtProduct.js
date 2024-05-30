import React from 'react'

    export default function NdtProduct({ renderNdtproduct }) {
        console.log("List Product:", renderNdtproduct);
        let ndttongcong = 0;
        let ndtElementProduct = renderNdtproduct.map((ndtProduct, index) => {
            ndttongcong += ndtProduct.ndt_quantity * ndtProduct.ndt_price
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{ndtProduct.ndt_productId}</td>
                    <td>{ndtProduct.ndt_productName}</td>
                    <td>{ndtProduct.ndt_quantity}</td>
                    <td>{ndtProduct.ndt_price}</td>
                    <td>{ndtProduct.ndt_quantity * ndtProduct.ndt_price}</td>
                    <td>
                        <button className='btn btn-success mx-1'>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button className='btn btn-success mx-1'>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            );
        });
    
        return (
            <div>
                <h2>Danh Sách sản phẩm</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ndtElementProduct}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={5} className='text-end'>Tổng cộng</th>
                            <th colSpan={2} className='text-start'>
                                {ndttongcong}
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
    