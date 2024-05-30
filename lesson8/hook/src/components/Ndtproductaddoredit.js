import React, { useState } from 'react'

export default function Ndtproductaddoredit() {
    const [ndt_productId,setNdt_productId] =useState('');
    const [ndt_productName,setNdt_productName] =useState('');
    const [ndt_quantity,setNdt_quantity] =useState('0');
    const [ndt_price,setNdt_price] =useState('0');
  return (
    <div>
        <h2>thêm mới sản phẩm sửa</h2>
        <hr/>
        <form>
          <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">mã san phẩm</span>
                    <input type="text" class="form-control" placeholder="mã sản phẩm " 
                      name='ndt_productId'value={ndt_productId}

                   aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon2">tên san phẩm</span>
                    <input type="text" class="form-control" placeholder="tên sản phẩm " 
                         name='ndt_productName'value={ndt_productName}

                   aria-describedby="basic-addon2"/>
            </div>
            <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">số lượng san phẩm</span>
                    <input type="number" class="form-control" placeholder="số lượng sản phẩm " 
                                          name='ndt_quantity'value={ndt_quantity}


                    
                   aria-describedby="basic-addon3"/>
            </div>
            <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon4">đơn giá </span>
                    <input type="number" class="form-control" placeholder="đơn giá " 
                                          name='ndt_price'value={ndt_price}
                   aria-describedby="basic-addon4"/>
            </div>
            <button className='btn btn-primapry'name='ndtBtnAction'>them moi</button>
        </form>
    </div>
  )
}
