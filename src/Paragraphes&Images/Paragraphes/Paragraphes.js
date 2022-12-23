import React, { Component } from 'react'
import './para.css'
export default class Paragraphe extends Component {
  constructor(props) {
    super(props)
    this.title = this.props.title;
    this.Text = this.props.Text
    this.class = this.props.class
  }
  render() {
    return (
      <div className='Para'>
        <h2 className='Tit'>{this.title}</h2>
        <p className={this.class ? 'afterFlag' : "p"}>{this.Text}</p>
      </div>
    )
  }
}


