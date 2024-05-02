import React, { Component } from 'react'

export default class Ndtform3 extends Component {
  constructor(props){
    super(props);
    this.state ={
      submitname:"Nguyễn Danh Trường",
      age:"20",
      course:"ndt-html",
      gender:true,
    }
  }
  ndthandlechange =(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    this.setState({
      [name]:value
    })
  }
  ndthandlesubmit=(event)=>{
    event.preventdrfault();
    console.log(this.State);
    this.props.onsubmit(this.state)
  }
  render() {
    return (
      <div>
        <form>
          <div>
          <label>student name:</label>
          <input name='studentname'
                  value={this.state.studentname}
                  onChange={this.ndthandlechange} />
          </div>
          <div>
              <label>age:</label>
               <input   name='age'
                          value={this.state.age}
                          onChange={this.ndthandlechange} />
          </div>
          <div>
          <label>gender:</label>
          <input type='radio' name='gender'onChange={this.ndthandlechange}
          value={true} checked={(this.state.gender===true)?'checked':''}/> nam
          <input type='radio' name='gender'onChange={this.ndthandlechange}
           value={false} checked={(this.state.gender===false)?'checked':''}/> nữ
          </div>
          <div>
          <label>course:</label>
        <select name='course'
                   value={this.state.course}
                   onChange={this.ndthandlechange}>
          <option value={"ndt-html"}>ndt-html</option>
          <option value={"ndt-css"}> ndt-css</option> 
          <option value={"ndt-php"}>ndt-php</option> 
          <option value={"ndt-react"}>ndt-react</option>
        </select>
          </div>
          <button onClick={this.ndthandlesubmit}>submit</button>
        </form>
      </div>
    )
  }
}
