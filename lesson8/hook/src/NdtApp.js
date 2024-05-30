import './App.css';
import {React, useState} from 'react';
import NdtProduct from './components/NdtProduct';
import Ndtproductaddoredit from './components/Ndtproductaddoredit';

function NdtApp() {
  // Dữ liệu giả
  const ndt_Products = [
    {
      ndt_productId: "2210900071",
      ndt_productName: "Nguyễn Danh Trường",
      ndt_quantity: 15,
      ndt_price: 1000,
    },
    {
      ndt_productId: "P002",
      ndt_productName: "IPhone 12",
      ndt_quantity: 20,
      ndt_price: 1250,
    },
    {
      ndt_productId: "P003",
      ndt_productName: "IPhone 13",
      ndt_quantity: 10,
      ndt_price: 1500,
    },
  ];

  // Hook UseState để quản lý trạng thái danh sách sản phẩm
  const [ndtProductState, setNdtProductState] = useState(ndt_Products);

  const ndtHandleSubmit = (ndtProduct) => {
    console.log("AddOrEdit:", ndtProduct);
    setNdtProductState((Ndtprev) => {
      return [
        ...Ndtprev,
        ndtProduct
      ];
    });
  }

  return (
    <div className="container border mt-5 p-3">
      <h1 className="text-center my-3">Xử lý chức năng CRUD - HOOK</h1>
      <hr />
      <NdtProduct renderNdtProduct={ndtProductState} />
      <Ndtproductaddoredit ndtOnSubmit={ndtHandleSubmit} />
    </div>
  );
}

export default NdtApp;
