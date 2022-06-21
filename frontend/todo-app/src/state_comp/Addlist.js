import React, { Component } from 'react'
import {Consumer} from '../func-context'
import axios from "axios"
export default class Addlist extends Component {
  style = ()=>{
    const {complete} = this.props.addlist
    return {textDecoration:complete? "line-through":"none"}
  }
  toggle = (id, dispatch)=> {
    dispatch({type:"TOGGLE", payload:id})
  }
  remove = (id, dispatch) => {
    axios.delete(`/addlists/${id}`)
    .then(()=>dispatch({type:"REMOVE", payload:id}))
    
  }
  render() {
    const {title,_id} = this.props.addlist
    return (
      <Consumer className="card">{value=> {
        const {dispatch } = value
        return <h3 className="text-dark text-center p-1 bg-light border-bottom border-top" style ={this.style()}> 
        <i className=" d-flex far fa-window-close fa-sm float-right m-2 text-danger" aria-hidden="true" onClick={this.remove.bind(this,_id,dispatch)}></i> {title}
        <input type="checkbox" className=" d-flex  m-2 float:left" onChange={this.toggle.bind(this, _id, dispatch)} />
      </h3>
      }}</Consumer>

    )
  }
}
