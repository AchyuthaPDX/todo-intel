import Addlist from './Addlist.js'
import React, { Component } from 'react'
import {Consumer} from '../func-context'

export default class addlists extends Component {
  render() {
    return (
      <Consumer>{value => { 
        const {addlists} = value
        return addlists.map(t=><Addlist addlist = {t} key={t.id}></Addlist>)
      }}
      </Consumer>
    )
  }
}
