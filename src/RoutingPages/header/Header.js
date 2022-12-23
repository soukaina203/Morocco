import React, { Component } from 'react'
import './header.css'
export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <img src="0.png" alt="" />
        <ul>
          <li> <a href="/" >Home</a>  </li>
          <li> <a href="/about">About</a>  </li>
          <li> <a href="/contact">Contact</a>  </li>
        </ul>
      </div>
    )
  }
}
