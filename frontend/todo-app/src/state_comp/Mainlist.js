import React, { Component } from 'react'

export default class Mainlist extends Component {
  render() {
    return (
        <form>
            <input type="text" className="form-control rounded-0" placeholder=" Type your task here..."/>
            <button className='form-control rounded-0 btn-secondary' type="submit"> Make Task</button>
        </form>
    )
  }
}

