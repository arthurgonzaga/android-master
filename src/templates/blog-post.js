import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const { previous, next } = data

  const title = post.frontmatter.title
  const category = post.frontmatter.category

  return (
    <Layout location={location} title="Back">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{title}</h1>
          <h5 className="category">{category}</h5>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <footer>
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && previous.frontmatter.title !== "Arthur Gonzaga" && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next 
                && next.frontmatter.title !== "Arthur Gonzaga" 
                && next.frontmatter.title !== "Conceitos básicos" 
                &&(
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          <hr />
          <br/>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: Int!
    $previousPostId: Int
    $nextPostId: Int
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: {id: {eq: $id}}) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
        id
      }
    }
    previous: markdownRemark(frontmatter: {id: { eq: $previousPostId }}) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(frontmatter: {id: { eq: $nextPostId }}) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
