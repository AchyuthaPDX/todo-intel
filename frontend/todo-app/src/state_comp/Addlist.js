import React, { Component } from 'react'

export default class Addlist extends Component {
  render() {
    return (
      <h3 className="text-dark text-center p-1 bg-light">
        <i className="far fa-window-close fa-sm float-right m-1" aria-hidden="true"></i> Task
        <input type="checkbox" className="m-2 float-right" />
      </h3>
    )
  }
}
