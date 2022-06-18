import React, { Component } from 'react'

export default class Addlist extends Component {
  render() {
    const {title} = this.props.addlist
    return (
      <h3 className="text-dark text-center p-1 bg-light border-bottom border-top">
        <i className=" d-flex far fa-window-close fa-sm float-right m-2 text-danger" aria-hidden="true"></i> {title}
        <input type="checkbox" className=" d-flex m-2 float:left" />
      </h3>
    )
  }
}
