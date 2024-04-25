import React, { Component } from 'react'

export default class Ndt_eventform3 extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Nguyễn Danh Trường",
            job:"dev sof"
        };
    }
    HashChangeName =()=>{
        this.setState({
            name:"k22cntt4"
        })
    }
  render() {
    return (
      <div class ='alert alert-primary'>
        <h2>thay dữ liệu</h2>
        <p>du lieu:{this.state.name} - {this.state.job}</p>
        <button onclick={this.HashChangeName}>thay đổi name</button>
      </div>
    )
  }
}
