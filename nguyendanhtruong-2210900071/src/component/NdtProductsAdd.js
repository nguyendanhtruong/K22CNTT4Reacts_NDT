import React, { Component } from 'react'

export default class NdtProductsAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Ndt_productId: 0,
            Ndt_productName: '',
            Ndt_quantity: 0,
            Ndt_price: 0
        }
    }
    ndtHandleChange = (event) => {
        let Ltk_name = event.target.name
        let Ltk_value = event.target.value
        this.setState({
            [Ltk_name]: Ltk_value
        })
    }
    ndtHandleSubmit = (ev) => {
        ev.preventDefault()
        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <div>
                <h2>Thêm mới sản phẩm</h2>
                <form className='col-md-6'>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"> ID </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            name='ndt_productId'
                            value={this.state.ndt_productId}
                            onChange={this.ndtHandleChange}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon2"> Tên sản phẩm </span>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            name='ndt_productName'
                            value={this.state.ndt_productName}
                            onChange={this.ndtHandleChange}
                        />
                    </div>


                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3"> Số lượng </span>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            name='ndt_quantity'
                            value={this.state.ndt_quantity}
                            onChange={this.ndtHandleChange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3"> Giá </span>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            name='ndt_price'
                            value={this.state.ndt_price}
                            onChange={this.ndtHandleChange}
                        />
                    </div>
                    <button className='btn btn-success' onClick={this.ndtHandleSubmit}>Ghi lại</button>
                </form>
            </div>
        )
    }
}
