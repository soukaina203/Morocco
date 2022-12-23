import React, { Component } from 'react'
import './header.css'
import {Link} from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <img src="0.png" alt="" />
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          {/* <li> <a href="/" >Home</a>  </li>
          <li> <a href="/about">About</a>  </li>
          <li> <a href="/contact">Contact</a>  </li> */}
        </ul>
      </div>
    )
  }
}
