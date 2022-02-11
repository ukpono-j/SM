import React from 'react'
import "./Footer.css"

function footer() {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <div>
          <div className='logo'>Logo</div>
          <div className='footer-tile'>Connect with SDC, a online resource platform that offers services and satisfation on every goods and services given..</div>
          <a href='#' alt="" className='footer_join'>Join Us</a>

        </div>
        <div>
          <div className='footer-menu'>
            <div>
              <li><a href='#' alt="">Home</a> </li>
              <li><a href='#' alt="">Swingers</a> </li>
              <li><a href='#' alt="">Kink</a> </li>
              <li><a href='#' alt="">Sex</a> </li>
              <li><a href='#' alt="">Relationship</a> </li>
            </div>
            <div>
              <li><a href='#' alt="">Media</a> </li>
              <li><a href='#' alt="">Travel</a> </li>
              <li><a href='#' alt="">SDC Shop</a> </li>
              <li><a href='#' alt="">Advertise on SDC</a> </li>

            </div>

          </div>
        </div>
      </div>
      <div className='foot'>
        <a href='#' alt="">Privacy</a>
        <a href='#' alt="">Terms and Conditions </a>

        <a href='#' alt=""> ©2022 SDC.com. All rights reserved........ </a>
      </div>
    </div>
  )
}

export default footer