import React, { useEffect, useState } from 'react'
import NdtListTableName from './Ndt-components/NdtListTableName'
import axios from './Ndt-Apis/Ndt-2210900071'
import NdtFormTableName from './Ndt-components/NdtFormTableName'

export default function NdtApp() {
    const [ndtListTableName, setNdtListTableName] = useState([])
    const ndtGetTableName = async ()=>{
      let ndtResp = await axios.get("ndtTableName");
      console.log("App list:",ndtResp.data);
      setNdtListTableName(ndtResp.data);
    }

    useEffect(()=>{
      ndtGetTableName();
    },[])


//hàm xóa
const ndthandleDelete =async(ndtId)=>{
  let ndtRes =await axios.delete("ndtTableName/"+ndtId);
  ndtGetTableName();

}
const ndtObjTableName ={
  "ndtTbName": "Nguyễn Danh Trường",
    "ndtTbEmail": "truong626215@gmail.com",
    "ndtTbPhone": "0797475264",
    "ndtTbStatus": true,
    "ndtId": "2210900071"
}
const [ndtTableName,setNdtTableName]=useState(ndtObjTableName);


const ndtHandelEdit = () => {
  ndtGetTableName();
};
const ndtHandeleEdit=(ndtObjEditTableName)=>{
  setNdtTableName(ndtObjEditTableName);
}
  return (
    <div className='container border my-3'>
      <h1>Bài Đánh Giá Hết Học Phần - Nguyễn Danh TRường :2210900071</h1>
      <hr/>

 
          <NdtListTableName renderNdtListTableName={ndtListTableName} onNdtDelete={ndthandleDelete} onNdtEdit={ndtHandeleEdit}/>
          <hr/>
          <NdtFormTableName  renderNdtTableName={ndtTableName} onNdtEdit={ndtHandelEdit}/>
    </div>
  )
}
