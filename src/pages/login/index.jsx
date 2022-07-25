import React, { Component } from 'react'
import {Outlet} from 'react-router-dom'
export default class Login extends Component {
  render() {
    return (
      <div>
         <Outlet/>
        <h2>后管管理系统</h2>
      </div>
    )
  }
}
