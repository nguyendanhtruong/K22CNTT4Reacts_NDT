import React from 'react'

export default function Ndt_eventform2() {
    const eventhandleclick1 =(content)=>{
        console.log('====================');
        console.log(content);
        console.log('====================');
    }
  return (
    <div className='alert alert-success'>
        <h2>event demo-function Component</h2>
        <button onClick={eventhandleclick1("Nguyễn Danh Trường")}>gọi khi render</button>
        <button onClick={()=> eventhandleclick1("K22CNTT4")}>gọi khi click</button>
    </div>
  )
}
