import React, { Component } from 'react'

export default class NdtProductadd extends Component {
    constructor(props){
        super(props);
        this.state={
            id:0,
            title:'',
            status:0
        }
    }
    render() {
    return (
      <div>
        <h2>Thêm mới sản phẩm</h2>
        <form className='col-md-6'>
        <div className="input-group mb-3">
         <span className="input-group-text" id="basic-addon1">
        id
         </span>
         <input
         type="text"
         className="form-control"
         name='id'
         value={this.state.id}
  />    
</div>
<div className="input-group mb-3">
         <span className="input-group-text" id="basic-addon2">
        title
         </span>
         <input
         type="text"
         className="form-control"
         name='title'
         value={this.state.title}
  />    
</div>
<div className="input-group mb-3">
         <span className="input-group-text" id="basic-addon3">
        status
         </span>
         <input
         type="text"
         className="form-control"
         name='status'
         value={this.state.status}
  />    
</div>
<button className='btn btn-success'>ghi lai</button>
</form>
      </div>
    )
  }
}
