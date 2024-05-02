import React, { Component } from 'react'

export default class Ndtform2 extends Component {
  // 1.
  constructor(props){
    super(props);
    this.state ={
      course:"NDT-reactjs"
    }
  }
  //3.ham xu ly su kien
  ndthandlechange = (event)=>{
    //cap nhat stats
    this.setState({
       course:event.target.value
    })
  }
  //4.
  ndthandlesubmit=(event)=>{
    event.preventdefault();
    alert(this.state.course)
  }

  render() {
    return (
      <div>
       <form onSubmit={this.ndthandlesubmit}> 
        <label>course</label>
        <select value={this.state.course}
          onChange={this.ndthandlechange}>
          <option value={"ndt-html"}>ndt-html</option>
          <option value={"ndt-css"}> ndt-css</option> 
          <option value={"ndt-php"}>ndt-php</option> 
          <option value={"ndt-react"}>ndt-react</option>
        </select>
        <input type='submit' value={"submit"}/>
       </form>
      </div>
    )
  }
}
