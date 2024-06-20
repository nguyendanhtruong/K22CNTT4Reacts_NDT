import React from 'react'

export default function NdtCategoryList({ renderNdtCategories,onAddNew,onNdtDelete,onNdtEdit}) {
    console.log("renderNdtCategories:", renderNdtCategories);
    let ndtCategoryElement = renderNdtCategories.map((NdtCategory, index) => {
        return(
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{NdtCategory.NdtId}</td>
            <td>{NdtCategory.NdtCategoryName}</td>
            <td>{NdtCategory.NdtCategoryStatus===true?"hiển thị ":"tạm khóa"}</td>
            <td>
                <button className='btn btn-danger'onClick={()=>ndtHandleDelete(NdtCategory.NdtId)} >
                    Delete
                </button>
                <button className='btn btn-success'onClick={()=>ndtHandleEdit(NdtCategory.NdtId)} >
                    Edit
                </button>
            </td>
            </tr>
            
        )
    })
    const ndtHandleAdd =()=>{
        onAddNew(true);
    }
    //  ham xu ly su kien xoa
    const ndtHandleDelete =(NdtId)=>{
        console.log ("Delete:",NdtId);
        if (window.confirm('bạn có thưc sự muốn xóa Category có mã' +NdtId+'không?')){
            console.log ("Delete:",NdtId);
            onNdtDelete(NdtId)

        }else{


        }
        //onNdtDelete(NdtId)
    }

//xu kie cho nut sua
const ndtHandleEdit =(NdtCategory)=>{
    onNdtEdit(NdtCategory)
}
    return (
        <div className='container m-2'>
            <h2> Danh Sach Loai San Pham</h2>
            <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>mã loại</th>
                    <th>Tên Loại</th>
                    <th>Trạng Thái</th>
                    <th>Chức Năng</th>
                </tr>
            </thead>
            <tbody>
                 {ndtCategoryElement}
            </tbody>
            </table>
          <button className='btn btn-primary' onClick={ndtHandleAdd}>Thêm mới </button>
        </div>
    )
}
