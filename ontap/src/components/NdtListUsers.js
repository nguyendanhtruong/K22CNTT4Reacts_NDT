import React from 'react';

export default function NdtListUsers({renderNdtListUsers}) {
  console.log("NdtListUsers:",renderNdtListUsers);
  //hien thi du lieu 
  let ndtElementUser =renderNdtListUsers.map ((ndtUser,index)=>{
    return(
      <>
        <tr>
            <td>{ndtUser.id}</td>
            <td>{ndtUser.UsersName}</td>
            <td>{ndtUser.Password}</td>
            <td>{ndtUser.Email}</td>
            <td>{ndtUser.Phone}</td>
            <td>....</td>
          </tr>
      </>
    )
  })
  return (
    <div className='row'>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserName</th>
            <th>PassWord</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Chức Năng</th>
          </tr>
        </thead>
        <tbody>
          {ndtElementUser}
        </tbody>
      </table>
    </div>
  );
}
