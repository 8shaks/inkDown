import React, { Component } from 'react'
import footerStyles from './footer.module.css'
import {  Link } from "gatsby";

export default class index extends Component {
    render() {
        let date =  new Date();
        let year = date.getFullYear();
        return (
            <footer>
                All Rights Reserved | inkDown &copy;{year}
            </footer>
        )
    }
}
