import React, { useState } from 'react'
import NdtProduct from './NdtProduct';

export default function Ndtproductaddoredit() {
    const [ndt_productId,setNdt_productId] =useState('');
    const [ndt_productName,setNdt_productName] =useState('');
    const [ndt_quantity,setNdt_quantity] =useState('0');
    const [ndt_price,setNdt_price] =useState('0');

    const ndtHandleSubmit=(ndtEvent)=>{
      ndtEvent.preventDefaul
      let ndtProduct ={
        ndt_productId:ndt_productId,
        ndt_productName:ndt_productName,
        ndt_quantity:ndt_quantity,
        ndt_price:ndt_price,
      }
      ndtOnSubmit(ndtProduct)
    }
  return (
    <div>
        <h2>thêm mới sản phẩm sửa</h2>
        <hr/>
        <form>
          <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">mã san phẩm</span>
                    <input type="text" class="form-control" placeholder="mã sản phẩm " 
                      name='ndt_productId'value={ndt_productId}
                      onChange={(ev)=>setNdt_productId(ev.target.value)}

                   aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">tên san phẩm</span>
                    <input type="text" class="form-control" placeholder="tên sản phẩm " 
                         name='ndt_productName'value={ndt_productName}
                         onChange={(ev)=>setNdt_productName(ev.target.value)}

                   aria-describedby="basic-addon2"/>
            </div>
            <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">số lượng san phẩm</span>
                    <input type="number" class="form-control" placeholder="số lượng sản phẩm " 
                                          name='ndt_quantity'value={ndt_quantity}
                                          onChange={(ev)=>setNdt_quantity(ev.target.value)}


                    
                   aria-describedby="basic-addon3"/>
            </div>
            <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon4">đơn giá </span>
                    <input type="number" class="form-control" placeholder="đơn giá " 
                                          name='ndt_price'value={ndt_price}
                                          onChange={(ev)=>setNdt_price(ev.target.value)}
                   aria-describedby="basic-addon4"/>
            </div>
            <button className='btn btn-primapry'name='ndtBtnAction'
                onClick={ndtHandleSubmit}
            
            >them moi</button>
        </form>
    </div>
  )
}
