import React from 'react'

export default function NdtStudentList({ renderNdtStudentList }) {
    console.log("Data:", renderNdtStudentList);
    let ndtElement = renderNdtStudentList.map((ndtStudent, index) => {
        return (
            <tr key ={index}>
                <th scope="row">{index+1}</th>
                <td>{ndtStudent.Ndtid}</td>
                <td>{ndtStudent.NdtName}</td>
                <td>{ndtStudent.NdtAge}</td>
                <td>{ndtStudent.NdtPhone}</td>
                <td>{ndtStudent.NdtEmail}</td>
                <td>{ndtStudent.NdtCreatedAt}</td>
                <td>{ndtStudent.NdtStatus}</td>
                <td>
                    Edit / Delete
                </td>
            </tr>
        )
    });
    return (
        <div>
            <h2>Danh sach sinh vien</h2>
            <table className="table table bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">mã sinh viên</th>
                        <th scope="col">họ tên</th>
                        <th scope="col">tuổi</th>
                        <th scope="col">điện thoại</th>
                        <th scope="col">email</th>
                        <th scope="col">trạng thái</th>
                        <th scope="col">chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    
                  {ndtElement}
                </tbody>
            </table>

        </div>
    )
}
