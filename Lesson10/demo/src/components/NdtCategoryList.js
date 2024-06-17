import React from 'react'

export default function NdtCategoryList({ renderNdtCategories,onAddNew }) {
    console.log("renderNdtCategories:", renderNdtCategories);
    let ndtCategoryElement = renderNdtCategories.map((NdtCategory, index) => {
        return(
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{NdtCategory.NdtId}</td>
            <td>{NdtCategory.NdtCategoryName}</td>
            <td>{NdtCategory.NdtCategoryStatus===true?"hiển thị ":"tạm khóa"}</td>
            </tr>
            
        )
    })
    const ndtHandleAdd =()=>{
        onAddNew(true);
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
