import React, { Component } from 'react'
import './images.css'
export default class Images extends Component {
  constructor(props) {
    super(props);
    this.arrayOfPictures = ['0.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png']
    this.src = ''
    this.className = ''
  }
  check = () => {
    let i = 0;
    this.arrayOfPictures.forEach(() => {
      if (this.props.variable === i) {
        this.src = i + '.png';
        console.log(i)
      }
      i++
    })
    this.className = this.props.n
  }
  render() {
    return (
      <div>
        {this.check()}
        <img src={this.src} alt="" className={this.className} />
      </div>
    )
  }
}
