import React, { Component } from 'react'
import portfolioStyles from '../styles/portfolio.module.css'
import Layout from '../components/layout'
import {Link} from 'gatsby'
import Img from "gatsby-image"
// MAKE DESCRIPTIONS LARGER
export default class Landing extends Component {
    render() {
        return (
            <Layout>
            <div className={portfolioStyles.portfolio}>
              <h1 className={portfolioStyles.header}>Check out our past work</h1>
                <div className={portfolioStyles.preview}>
                    <div className={portfolioStyles.preview_item}>
                      <h4>Clean Template</h4>
                      <Link to ='/portfolio/#template'><Img className={portfolioStyles.preview_item_img} fluid={this.props.data.previewBootstrap.childImageSharp.fluid} alt=""/></Link>
                      <span><Link to='/portfolio/#template'>See more</Link></span>
                    </div>
                    <div className={portfolioStyles.preview_item}>
                      <h4>Basketball Court Finder</h4>
                      <Link to='/portfolio/#ballRunner'><Img className={portfolioStyles.preview_item_img} fluid={this.props.data.previewBallRunner.childImageSharp.fluid} alt=""/></Link>
                      <span><Link to='/portfolio/#ballRunner'>See more</Link></span>
                    </div>
                    <div className={portfolioStyles.preview_item}>
                      <h4>Crypto Net</h4>
                      <Link to='/portfolio/#cryptoNet'><Img className={portfolioStyles.preview_item_img} fluid={this.props.data.previewCryptoNet.childImageSharp.fluid} alt=""/></Link>
                      <span><Link to='/portfolio/#cryptoNet'>See more</Link></span>
                    </div>
                    <div className={portfolioStyles.preview_item}>
                      <h4>Portfolio</h4>
                      <Link to='/portfolio/#portfolio'><Img className={portfolioStyles.preview_item_img} fluid={this.props.data.previewPortfolio.childImageSharp.fluid} alt=""/></Link>
                      <span><Link to='/portfolio/#portfolio'>See more</Link></span>
                    </div>
                </div>
                <div className={portfolioStyles.template_section}>
                  <h2 id='template'>Template for everyone</h2>
                  <p>A bootstrap template we made that incorporates a clean, uniform design that appeals to small businesses looking for a brochure website.</p><a target='_blank' rel="noopener noreferrer" href="https://8shaks.github.io/BootstrapLayout.github.io/"><Img className={portfolioStyles.template_img} fluid={this.props.data.previewBootstrap.childImageSharp.fluid} alt=""/></a>
                </div>
                <div className={portfolioStyles.ballRunner_section}>
                  <h2 id='ballRunner'>Find A Basketball Court</h2>
                  <p>Ever want to play basketball but don't know where to play? This website was desgined specifically to tackle that problem. Use the tool and find a basketball court near you! Stay fit</p><a target='_blank' rel="noopener noreferrer" href="https://ball-runner.herokuapp.com/"><Img className={portfolioStyles.ballRunner_img} fluid={this.props.data.previewBallRunner.childImageSharp.fluid} alt=""/></a>
                </div>
                <div id='cryptoNet'className={portfolioStyles.cryptoNet_section}>
                  <h2 >Crypto Currency</h2>
                  <p >Crypto currency may or may not be the future. Regardless it's a unique idea that could stand to change our economy and the way our society works. We created a social media platform for anybody to discuss crypto. Discuss trading ideas, new blockchains, and your opinion on crypto curreny and where it's headed.</p><a target='_blank' rel="noopener noreferrer" href="http://crypto-net.herokuapp.com/"><Img className={portfolioStyles.cryptoNet_img} fluid={this.props.data.previewCryptoNet.childImageSharp.fluid} alt=""/></a>
                </div>
                <div className={portfolioStyles.portfolio_section}>
                  <h2 id='portfolio'>Personal Portfolio</h2>
                  <p>Check out one of our developer's personal portfolio. A single page website keeps everything simple and easy to navigate for the user. No need to click links and get redirected over and over again. There's some more projects on there to check out if you're interested! </p><a target='_blank' rel="noopener noreferrer" href="https://ball-runner.herokuapp.com/"><Img className={portfolioStyles.portfolio_img} fluid={this.props.data.previewPortfolio.childImageSharp.fluid} alt=""/></a>
                </div>
            </div>
            </Layout>

        )
    }
}
export const query = graphql`
query {
  previewBootstrap: file(relativePath: { eq: "portfolio/bootstrap-preview.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  previewBallRunner: file(relativePath: { eq: "portfolio/ballRunner-preview.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  previewCryptoNet: file(relativePath: { eq: "portfolio/cryptoNet-preview.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  previewPortfolio: file(relativePath: { eq: "portfolio/portfolio-preview.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`