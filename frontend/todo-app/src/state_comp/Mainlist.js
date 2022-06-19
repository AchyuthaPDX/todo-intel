import React, { Component } from 'react'
import {Consumer} from '../func-context'
export default class Mainlist extends Component {
  state={
    id:4,
    title:"",
    complete:false
  }
  update=(e) => {
    this.setState({
      title:e.target.value
    })
  }
  add=(dispatch, e)=>{
    e.preventDefault()
    const newAddlist = this.state
    dispatch({type:"ADD",payload:newAddlist} )
    this.setState({title:" "})
  }
  render() {
    return (
      <Consumer>{value => {
        const {dispatch} = value
        return <form onSubmit={this.add.bind(this, dispatch)}>
        <input type="text" className="form-control rounded-0" placeholder=" Type your task here..." onChange={this.update} value={this.state.title}/>
        <button className='form-control rounded-0 btn-secondary' type="submit"> Make Task</button>
    </form>
    
      }}</Consumer>
        
    )
  }
}

