import React from 'react'

export default function Ndt_funcdemo(props) {
  return (
    <div>
        <hr/>
        <h2> function component demo</h2>
        <h3>sử dụng thuộc tính props</h3>
        <p> userName: {props.userName}</p>
        <p>fullName:{props.fullName}</p>
        <p>age:{props.age}</p>
    </div>
  )
}
