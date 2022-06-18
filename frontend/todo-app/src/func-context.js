import React, { Component } from 'react'

const Context = React.createContext()
export class Provider extends Component {
  state ={
    addlists:[
        {id:1,
        title:"check emails",
    complete:true},
    {id:2,
        title:"Time stamp adding",
    complete:false},
    {id:1,
        title:" Adding RESTApi",
    complete:false},

    ]
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