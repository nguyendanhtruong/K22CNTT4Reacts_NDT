import axios from '../Ndt-Apis/Ndt-2210900071'
import React, { useEffect, useState } from 'react'

export default function NdtFormTableName({renderNdtTableName,onNdtEdit}) {

const [ndtId,setNdtId] =useState(renderNdtTableName.ndtId)
const [ndtTbName,setNdtTbName] =useState(renderNdtTableName.ndtTbName)
const [ndtTbEmail,setNdtTbEmail] =useState(renderNdtTableName.ndtTbEmail)
const [ndtTbPhone,setNdtTbPhonet] =useState(renderNdtTableName.ndtTbPhone)
const [ndtTbStatus,setNdtTbStatus] =useState(renderNdtTableName.ndtTbStatus)
  
useEffect(()=>{
    setNdtId(renderNdtTableName.ndtId)
    setNdtTbName(renderNdtTableName.ndtTbName)
    setNdtTbEmail(renderNdtTableName.ndtTbEmail)
    setNdtTbPhonet(renderNdtTableName.ndtTbPhone)
    setNdtTbStatus(renderNdtTableName.ndtTbStatus)
},[renderNdtTableName])


const ndtHandleSubmit =async (ndtEvent)=>{
    ndtEvent.preventDefault();
    const ndtObjTableName={
   "ndtTbName": ndtTbName,
    "ndtTbEmail": ndtTbEmail,
    "ndtTbPhone":ndtTbPhone ,
    "ndtTbStatus": ndtTbStatus,
    "ndtId": ndtId
}


console.log(ndtObjTableName);
// thêm dữ liệu vào api
await axios.put("ndtTableName/"+ndtObjTableName.ndtId,ndtObjTableName);
onNdtEdit();
    }
   
    return (
        <div>
            <h2>Form xử lý dữ liệu thêm mới</h2>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="ndtId">Id</span>
                    <input type="text" className="form-control" placeholder="ndtId"
                        name ='ndtId'
                        value={ndtId}
                        onChange={(ndtEv)=>setNdtId(ndtEv.target.value)}
                        aria-label="ndtId"
                        aria-describedby="ndtId" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="ndtTbName">Name</span>
                    <input type="text" className="form-control" placeholder="ndtTbName"
                        name='ndtTbName'
                        value={ ndtTbName}
                        onChange={(ndtEv)=>setNdtTbName(ndtEv.target.value)}

                        aria-label="ndtTbName"
                        aria-describedby="ndtTbName" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="ndtTbEmail">Email</span>
                    <input type="text" className="form-control" placeholder="ndtTbEmail"
                         name ='ndtTbEmail'
                         value={ndtTbEmail}
                         onChange={(ndtEv)=>setNdtTbEmail(ndtEv.target.value)}

                        aria-label="ndtTbEmail"
                        aria-describedby="ndtTbEmail" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="ndtTbPhone">Phone</span>
                    <input type="text" className="form-control" placeholder="ndtTbPhone"
                          name ='ndtTbPhone'
                          value={ndtTbPhone}
                          onChange={(ndtEv)=>setNdtTbPhonet(ndtEv.target.value)}

                        aria-label="ndtTbPhone"
                        aria-describedby="ndtTbPhone" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="ndtTbStatus">Status</span>
                    <select  id='ndtTbStatus' className='form-control'
                     name ='ndtTbStatus'
                     value={ndtTbStatus}
                     onChange={(ndtEv)=>setNdtTbStatus(ndtEv.target.value)}

                    
                    >

                        <option value={true}>Active</option>
                        <option value={false}>Non-Active</option>

                    </select>
                </div>
                   <button className='btn btn-primary my-3' name='btnNdtSave' onClick={ndtHandleSubmit}>Ndt:Save</button>
            </form>
        </div>
    )
}
