import React from 'react'
import './contact.css'
function Contact() {
  return (
    <div className=''>
      <div className='contact'>
        <h1> We'd Love To Hear From You
        </h1>
        <div className='buttons'>
          <button><i class="fa-brands fa-square-instagram"> <a href="https://www.instagram.com/soukaina9mourabit/?hl=fr" target="_blank"> Our Instagram </a></i></button>
          <button><i class="fa-solid fa-envelope"><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"> Our Email </a></i></button>
        </div>
      </div>
    </div>
  )
}
export default Contact