import React from 'react';

const NdtProduct = ({ renderNdtProduct }) => {
  // Initialize total price
  let total = 0;

  // Map through each product and calculate total price
  const products = renderNdtProduct.map((product, index) => {
    // Calculate total price for each product
    const totalPrice = product.ndt_quantity * product.ndt_price;

    // Add to total price
    total += totalPrice;

    // Return list item or table row based on the format
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{product.ndt_productId}</td>
        <td>{product.ndt_productName}</td>
        <td>{product.ndt_quantity}</td>
        <td>{product.ndt_price}</td>
        <td>{totalPrice}</td>
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
      <h2>Product List (Table View)</h2>
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
          {products}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={5} className='text-end'>Tổng cộng</th>
            <th colSpan={2} className='text-start'>
              {total}
            </th>
          </tr>
        </tfoot>
      </table>

      <h2>Product List (List View)</h2>
      <ul>
        {renderNdtProduct.map((product) => (
          <li key={product.ndt_productId}>
            {product.ndt_productName} - {product.ndt_quantity} - ${product.ndt_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NdtProduct;
