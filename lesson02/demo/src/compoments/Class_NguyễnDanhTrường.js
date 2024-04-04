import React, { Component } from 'react'

export default class Class_NguyễnDanhTrường extends Component {
   constructor(props){
    super(props);
    this.state={
        fullName:"Nguyễn Danh Trường",
        class:"k22cntt4"
    }
   }
    users ={
        name:"Nguyễn Danh Trường",
        age:20
    }
    //hand xu ly su kien
     handlechange = (event)=>{
        this.state({
        fullName:"Trường Đẹp Trai",
        })
     }
    render() {
    return (
      <div>
        <h2>Class component Demo</h2>
        {this.users.name}-{this.users.age}

        <hr/>
        <h3> 
            info:{this.props.info}
        </h3>
        <h3>time:{this.props.time}</h3>
        <hr/>
        <h3>state:
            FullName:{this.state.fullName}
            class:{this.state.class}

        </h3>
        <button onClick={this.handlechange}>change Name</button>
      </div>
    )
  }
}
