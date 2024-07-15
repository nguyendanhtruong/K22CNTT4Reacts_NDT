import React from 'react'

export default function NdtListTableName({renderNdtListTableName,onNdtDelete,onNdtEdit}) {
    console.log("List:",renderNdtListTableName);
       //hiển thị dữ liệu
    const ndtElementTableName = renderNdtListTableName.map((ndtItem,ndtIndex)=>{
        return(
            <tr key={ndtIndex}>
                <td>{ndtItem.ndtId}</td>
                <td>{ndtItem.ndtTbName}</td>
                <td>{ndtItem.ndtTbEmail}</td>
                <td>{ndtItem.ndtTbPhone}</td>
                <td>{(ndtItem.ndtTbStatus===true ||ndtItem.ndtTbStatus==="true")?"Active":"Non-Active"}</td>
                
                <td>
                    <button className='btn btn-success m-2'
                          onClick={() => ndthandleEdit(ndtItem)}
                    >Ndt-Edit</button>
                    <button className='btn btn-danger'
                        onClick={() => ndthandleDelete(ndtItem.ndtId)}
                    >Ndt-Delete</button>
                </td>
            </tr>
        );
    })
    //sự kiện xóa
    const ndthandleDelete =(ndtId)=>{
        if (window.confirm('Bạn chắc có muốn xóa Id trên không ='+ndtId)){
            onNdtDelete(ndtId);
        }
    }
// sửa 
const ndthandleEdit =(ndtObjTableName)=>{
    onNdtEdit(ndtObjTableName);
}


  return (
    <div>
        <h2>Danh Sách Thông Tin....</h2>
        <hr/>

        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ndtId</th>
                    <th>ndtTbName</th>
                    <th>ndtTbEmail</th>
                    <th>ndtTbPhone</th>
                    <th>ndtTbStatus</th>
                    <th>ndt: chức Năng</th>

                </tr>
            </thead>
            <tbody>
               {ndtElementTableName}
            </tbody>
        </table>
    </div>
  )
}
