/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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
          <small>{author?.summary || null}</small>
          <br/> 

          <small>
            <Link to="/" itemProp="url">
              <span itemProp="home">Tutoriais</span>
            </Link>
          </small>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <small>
            <Link to="/about-me/" >
              <span itemProp="bio">Sobre mim</span>
            </Link>
          </small>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <small>
            <Link to="/contact-me/" >
              <span itemProp="bio">Contato</span>
            </Link>
          </small>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <small>
            <a href={`https://www.linkedin.com/in/${social?.linkedIn || ``}`}>
              LinkedIn
            </a>
          </small>
        </p>
      )}
    </div>
  )
}

export default Bio
