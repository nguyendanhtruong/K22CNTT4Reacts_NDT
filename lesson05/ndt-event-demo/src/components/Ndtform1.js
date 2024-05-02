import React, { Component } from 'react'

export default class Ndt_form1 extends Component {
  constructor(props){
    super(props);
    this.state ={
      studentname:"Nguyễn Danh Trường"
    }
  }
// ham xu ly su kien khi thay doi du lieu tre text
handlechange=(event)=>{
  // cap nhat lai state
  this.setState({
    studentname:event.target.value,
  })
}
// su kien submit form
handlesubmit =(ev)=>{
   console.log(ev);
   ev.preventdefault();
}
  render() {
    return (
      <div>
         <h2>demo reactjs form</h2>
         <form>
          <label>student name:</label>
          <input value={this.state.studentname}
           onChange={this.handlechange} />
          <button onClick={this.handlesubmit}>submit</button>
         </form>
      </div>
    )
  }
}
