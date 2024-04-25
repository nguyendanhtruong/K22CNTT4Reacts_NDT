import React, { Component } from 'react'

export default class Ndt_eventform1 extends Component {
    //ham xu ly su kien
    eventhandleclick1 =()=>{
        alert("event handle 1");

    }
    eventhandleclick2(){
        alert("event click 2")
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>event handle</h2>
        {/*gọi hàm xử lý sự kiện render*/}
        <button onClick={this.eventhandleclick1()}>click1</button>
        {/* gọi hàm sử lý khi click*/}
        <button onClick={this.eventhandleclick2}>click2</button>
      </div>
    )
  }
}
