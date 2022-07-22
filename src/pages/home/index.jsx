import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADD, JIAN } from '../../store/reduxs/actions-type'
import {Button} from 'antd'
class Home extends Component {
    increment = () => {
        this.props.increment(2)
    }
    decrement = () => {
        this.props.decrement(1)
    }
    render() {
        return (
            <div>
                <div>Home</div>
                <div>{this.props.count}</div>
                <Button type="primary" onClick={this.increment}>加加</Button>
                <Button type="primary" onClick={this.decrement}>减减</Button>
            </div>
        )
    }
}
export default connect(
    state => ({
        count: state.count
    }),
    {
        increment: data => ({ type: ADD, data }),
        decrement:data => ({type:JIAN,data})
    })(Home)
