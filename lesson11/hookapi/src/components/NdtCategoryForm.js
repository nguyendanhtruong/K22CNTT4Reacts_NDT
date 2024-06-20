import React, { useEffect, useState } from 'react'
import axios  from '../api/NdtApi';
export default function NdtCategoryForm({oncloseForm ,onCategorySubmit,rendenrNdtCategory}) {
//state
const[ndtId,setNdtId]= useState ("0");
const[ndtCategoryName,setNdtCategoryName]= useState("");
const[ndtCategoryStatus,setNdtCategoryStatus]= useState(true);


useEffect(()=>{
    setNdtId(rendenrNdtCategory.NdtIddtId);
    setNdtCategoryName(rendenrNdtCategory.NdtCategoryName);
    setNdtId(rendenrNdtCategory.NdtCategoryStatus);

});
    const ndtHandleClose =()=>{ 
        oncloseForm(false);
    }
    const ndtHandleSubmit= async (event)=>{
        event.preventDefault();
        if(ndtId ===0 ){// them
        let ndtCategory = {
            NdtId:0,
            NdtCategoryName:ndtCategoryName,
            NdtCategoryStatus:ndtCategoryStatus,
        }
        console.log("NdtCategory",ndtCategory);
        await axios.post("NdtCategory",ndtCategory);
        onCategorySubmit(ndtCategory);
     
    }else{//sua
        let ndtCategory = {
            NdtId:ndtId,
            NdtCategoryName:ndtCategoryName,
            NdtCategoryStatus:ndtCategoryStatus,
        }
        console.log("NdtCategory",ndtCategory);
        await axios.put(`NdtCategory/${rendenrNdtCategory.ndtId}`,ndtCategory);
        onCategorySubmit(ndtCategory);
    }
    
}

    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category Name</span>
                    <input type="text" className="form-control" 
                      name='NdtCategoryName'
                      value={ndtCategoryName}
                      onChange={(ev)=>setNdtCategoryName(ev.target.value)}

                        placeholder="Category Name" aria-label="Category Name" 
                        aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Category Status </span>
                    <select className='form-control'
                    name='NdtCategoryStatus'
                     value={ndtCategoryStatus}
                     onChange={(ev)=>setNdtCategoryStatus(ev.target.value)}
                     >
                        <option value={true}>hiển thị </option>
                        <option value={false}>ẩn </option>
                     </select>
                </div>
                <button className='btn btn-success' onClick={ndtHandleSubmit}>Ghi lai</button>
                <button className='btn btn-dangeer'onClick={ndtHandleClose}>Đóng lai</button>

            </form>
        </div>
    )
}
