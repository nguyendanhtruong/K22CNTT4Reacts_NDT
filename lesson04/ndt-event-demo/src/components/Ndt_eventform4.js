import React, { Component } from 'react'

export default class Ndt_eventform4 extends Component {
 constructor(props){
    super(props);
    this.state={
        name:"Trường đẹp trai"
    }
 }
 handlegetname= () =>{
    alert(this.props.name);
    this.setState({
     name:this.props.name
    })
 }
    render() {
    return (
      <div className='alert alert-info'>
        <h2>lấy dữ liệu từ props</h2>
        <button onClick={this.handlegetname}>lấy tên</button>
        <h2 >welcome to ,{this.state.name}</h2>
      </div>
    )
  }
}
