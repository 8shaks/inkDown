import React, { Component } from 'react'
import indexStyles from '../styles/index.module.css'
import Layout from '../components/layout'
import {Link} from 'gatsby'

export default class Landing extends Component {
    render() {
        return (
            <Layout>
            <div className={indexStyles.home}>
              <div className={indexStyles.heading}><h2> inkDown.</h2>
               <span>Quality perserveres</span></div> 
               <div className={indexStyles.cta}>
                   <Link to='/portfolio'><button className={indexStyles.portfolio}>Portfolio</button></Link><Link to='/contact'><button className={indexStyles.contact}>Get in touch</button></Link>
               </div>
            </div>
            </Layout>

        )
    }
}
