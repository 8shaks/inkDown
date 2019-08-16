import React, { Component } from 'react'
import './navbar.css'
import {  Link } from "react-router-dom";

export default class Navbar extends Component {
   constructor(props){
       super(props)
       this.state={
           navbarClass : 'navbar'
       }
   }

   
   expandMenu = () => {
    if(this.state.navbarClass === 'navbar')
    this.setState({navbarClass:'navbar-activated'})
    else{
        this.setState({navbarClass:'navbar'})
    }
}
newPage = () => {
    this.setState({navbarClass:'navbar'})
}
    render() {
        
        let navbarOptions ;
        let url = window.location.href
        if(url.includes('services')){
            navbarOptions=(                
            <ul><li className='navbar-selected'><Link to='/services' onClick={this.newPage}>Services</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><a>About Us</a></li></ul>)
        } else  if(url.includes('contact')){
            navbarOptions=(                
            <ul><li><Link to='/services' onClick={this.newPage}>Services</Link></li>
            <li  className='navbar-selected'><Link to='/contact'>Contact Us</Link></li>
            <li><a>About Us</a></li></ul>)
        }
        else  if(url.includes('about-us')){
            navbarOptions=(                
            <ul><li><Link to='/services' onClick={this.newPage}>Services</Link></li>
            <li ><Link to='/contact'>Contact Us</Link></li>
            <li  className='navbar-selected'><a>About Us</a></li></ul>)
        }else{
            navbarOptions=(                
                <ul><li><Link to='/services' onClick={this.newPage}>Services</Link></li>
                <li ><Link to='/contact'>Contact Us</Link></li>
                <li ><a>About Us</a></li></ul>)
        }
        return (
            <div className={this.state.navbarClass}> 
            <Link to='/' className='navbar-logo'>inkDown</Link>
            <i className="fas fa-bars menu-icon" onClick={this.expandMenu}></i>
                {navbarOptions}
            </div>
        )
    }
}
