import React from 'react'
import './Footer.jsx'
import youtube_icon from '../../assets/youtube_icon.png'
import twiiter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'



const Footer = ()=> {
    render(
        <div className = 'footer'>
            <div className="footer-icons">
                <img src={facebook_icon} alt="" />
                <img src={instagram_icon} alt="" />
                <img src={twitter_icon} alt="" />
                <img src={youtube_icon} alt="" />
            </div>
        </div>
    )
}