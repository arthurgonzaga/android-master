/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import SocialMediaButtons  from 'react-social-media-buttons';

const Bio = ({location}) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "../../content/assets/pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedIn
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <p>
          <strong>{author.name}</strong>
          <br/>
          <small>
            <Link to="/about-me/" >
              <span itemProp="bio">Sobre mim</span>
            </Link>
          </small>
        </p>
      )}
      <SocialMediaButtons className="social-media"
        style={{position: 'absolute', right: '0'}}
        links={['https://www.linkedin.com/in/arthurgonzaga20/','https://github.com/arthurgonzaga','mailto:arthurgonzagaxyz@gmail.com']}
        buttonStyle={{width: '32px', height: '32px', margin: '0px 14px', backgroundColor: 'transparent', margin: '0px 28px 0 -8px'}}
        iconStyle={style}
        openNewTab={true}
      />
    </div>
  )
}



var style = {
    color: '#7c7c7c', 
    "&:hover": {
      color: "#4385F4"
  }
}

export default Bio
