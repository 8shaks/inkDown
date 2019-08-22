import React, { Component } from 'react'
import'./services.css'
import'./web-design.css'

import { Link } from "react-router-dom";
export default class Services extends Component {
    render() {
        return (
            <div className='services'>
                <h1 className='services-page-header'><span>What we do</span></h1>
                <div className='services-cards'>
              <a href='#'className='services-card' id='graphic-box'><div > Graphic Design<br/><span>Coming Soon</span></div></a>
                    <a className='services-card'  id='brand-box'><div > Brand Consulting<br/><span>Coming Soon</span></div></a>
                    <a href='#web-design'className='services-card' id='web-box'><div > Web Design<br/><span>Click for more info!</span></div></a>
                    </div>
                    <div className='services-webDesign' id='web-design'> <h1>Web Design</h1>
                    <p className='services-webDesign-para1'>At inkDown we make web development <b>easy</b> for <b>you</b>. We take care of <b>everything</b>, from getting your site to the top of google rankings to designing a website that showcases your <b>business's talent</b> and <b>hard work</b>. Our websites are always created with one <b>purpose</b>, to boost your sales and get you the perfect clients your looking for.</p>
                    <p className='services-webDesign-para2'>inkDown's web design process is simple. We keep you goals in mind when creating your website, the design is always catered to ensure your goals are have enough opportunity to be easily be reached. </p>
                    <Link to='/contact'className='services-webDesign-contact'><span>Contact us now</span></Link>
                    </div>
            </div>
        )
    }
}
