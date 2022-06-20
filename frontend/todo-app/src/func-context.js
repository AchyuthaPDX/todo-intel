import React, { Component } from 'react'
import axios from "axios"
const Context = React.createContext()
const reducer = (prevState, action)=>{
  switch(action.type){
    case "TOGGLE":
      return{addlists: prevState.addlists.map(t=>{if(t._id=== action.payload){t.complete = 
      !t.complete}; return t}) }
    case "REMOVE":
      return{ addlists: prevState.addlists.filter(addlist => addlist._id !== action.payload)}
    case "ADD":
      return{ addlists: [...prevState.addlists , action.payload]}
  default:
    return prevState
  }
}
export class Provider extends Component {
  state ={
    addlists:[],
      dispatch:(action) => this.setState(prevState => reducer(prevState,action))
    }
    componentDidMount(){
      axios.get('/addlists')
      .then(res=>this.setState({addlists:res.data}))
    }
  render() {
    return (
        <Context.Provider value={this.state}> 
          {this.props.children}
        </Context.Provider> 
    )
  }
}
export const Consumer = Context.Consumer