import React, { Component } from 'react'

export default class Ndt_classcomp extends Component {
    constructor(props){
        super(props)
        this.state={
            firstName: "Truong",
            lastName:"Danh",
            userName:"k22cntt4",
        }
    }
    member =(props)=>{
        return<div className='alert alert-success'>
         <h3> xin chao:{props.fullName}-ban da{this.props.age}tuoi</h3>
        </div>
    }
  render() {
    return (
      <div>
        <h2> class component demo</h2>
        <hr/>
        <h3> du lieu trong state </h3>
        <h3>xin chao {this.state.firstName}{this.state.lastName}</h3>
        <h3> du lieu tu props</h3>
        <p>company:{this.props.company}</p>
        <p>course:{this.props.course}</p>
        <hr/>
        <this.member fullName="Nguyễn Danh Trường" age="20"/>
      </div>
    )
  }
}
