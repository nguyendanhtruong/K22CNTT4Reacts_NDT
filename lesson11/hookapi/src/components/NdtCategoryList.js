import React from 'react'

export default function NdtCategoryList({ renderNdtCategories, onAddNew, onNdtDelete, onNdtEdit }) {
    console.log("renderNdtCategories:", renderNdtCategories);

    const ndtHandleAdd =()=>{
        onAddNew(true);
    }
    //  ham xu ly su kien xoa
    const ndtHandleDelete = (NdtId) => {
        console.log("Delete:", NdtId);
        if (window.confirm('Bạn có thực sự muốn xóa Category có mã ' + NdtId + ' không?')) {
            onNdtDelete(NdtId);
        }
    };


//xu kie cho nut sua
const ndtHandleEdit = (NdtCategory) => {
    onNdtEdit(NdtCategory);
};

let ndtCategoryElement = renderNdtCategories.map((NdtCategory, index) => {
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{NdtCategory.NdtId}</td>
            <td>{NdtCategory.NdtCategoryName}</td>
            <td>{NdtCategory.NdtCategoryStatus === true ? "Hiển thị" : "Tạm khóa"}</td>
            <td>
                <button className='btn btn-danger' onClick={() => ndtHandleDelete(NdtCategory.NdtId)}>
                    Xóa
                </button>
                <button className='btn btn-success' onClick={() => ndtHandleEdit(NdtCategory)}>
                    Sửa
                </button>
            </td>
        </tr>
    );
});

return (
    <div className='container m-2'>
        <h2>Danh Sách Loại Sản Phẩm</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã Loại</th>
                    <th>Tên Loại</th>
                    <th>Trạng Thái</th>
                    <th>Chức Năng</th>
                </tr>
            </thead>
            <tbody>
                {ndtCategoryElement}
            </tbody>
        </table>
        <button className='btn btn-primary' onClick={ndtHandleAdd}>Thêm Mới</button>
    </div>
);
}