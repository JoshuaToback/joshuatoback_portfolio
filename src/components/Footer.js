import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <center className='footer'>
      <h2>Developed by Joshua Toback</h2>
      <div className='footerIcons'>
      <div className='footerIcon'>
        <SocialIcon url="https://linkedin.com/in/joshua-toback" />
      </div>
      <div className='footerIcon'>
        <SocialIcon url='https://twitter.com/joshuatoback' />
      </div>
      <div className='footerIcon'>
        <SocialIcon url='https://github.com/JoshuaToback' />
      </div>
      </div>
    </center>
  )
}

export default Footer
