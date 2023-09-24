import React from 'react'
import footer from './images/footerText.png'
import button from './images/Button.png'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
        <div className="footer-bio">
            <h4>Newslleter</h4>
            <p>Get news about articles and updates in your box</p>
        </div>
        <div className="contact">
            <div>
            <input type="text" placeholder='name' id='name' name='name' />
            </div>
            <div>
            <input type="email" placeholder='email' id='email' name='email' />
            </div>
            <div>
            <input type="text" placeholder='message' id='message' name='message' />
            </div>
        </div>
        </div>
        <img src={footer} alt="Footer" className='footerText' />
        <img src={button} alt="sendBtn" className='sendBtn' />

      </div>
      <p className='footerBottomeText' style={{textAlign:"center"}}>Copyright 2022 All Right Reserved By SG</p>
    </>
  )
}

export default Footer
