import React, { Component } from 'react'
import './navbar.css'
import {  Link } from "gatsby";

export default class Navbar extends Component {
   constructor(props){
       super(props)
       this.state={
           navbarClass : 'navbar',
           url:''
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
componentDidMount(){
    this.setState({url:window.location.href})
}
    render() {
        let navbarOptions ;
        // console.log(url)
        // if(url.includes('services')){
        //     console.log('hi')
        //     navbarOptions=(                
        //     <ul><li className='navbar-selected'><Link to='/services#tp' onClick={this.newPage}>Services</Link></li>
        //     <li><Link to='/contact' onClick={this.newPage}>Contact Us</Link></li>
        //     {/* <li><a>About Us</a></li> */}
        //     </ul>)
        // } else  if(url.includes('contact')){
        //     navbarOptions=(                
        //     <ul><li><Link to='/services' onClick={this.newPage}>Services</Link></li>
        //     <li  className='navbar-selected'><Link to='/contact' onClick={this.newPage}>Contact Us</Link></li>
        //     {/* <li><a>About Us</a></li> */}
        //     </ul>)
        // }
        // else  if(url.includes('about-us')){
        //     navbarOptions=(                
        //     <ul><li><Link to='/services' onClick={this.newPage}>Services</Link></li>
        //     <li ><Link to='/contact' onClick={this.newPage}>Contact Us</Link></li>
        //     {/* <li  className='navbar-selected'><a>About Us</a></li> */}
        //     </ul>)
        // }else{
            navbarOptions=(                
                <ul>
                <li><Link to='/portfolio' onClick={this.newPage}>Portfolio</Link></li>
                <li><Link to='/services' onClick={this.newPage}>About Us</Link></li>
                <li ><Link to='/contact' onClick={this.newPage}>Contact Us</Link></li>
                {/* <li ><a>About Us</a></li> */}
                </ul>)
        // }
        return (
            <div className={this.state.navbarClass}> 
            <Link to='/' onClick={this.newPage} className='navbar-logo'>inkDown</Link>
            <div className="menu-icon" onClick={this.expandMenu} style={{color:'white'}}><div className={'navbar-icon-line'}/><div className={'navbar-icon-line'}/><div className={'navbar-icon-line'}/></div>
                {navbarOptions}
            </div>
        )
    }
}
