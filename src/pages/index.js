import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Categories from "../components/categories"
import Accordion from "react-bootstrap/Accordion"

var initialized = false

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.posts.nodes
  const categories = data.categories.nodes
  const subcategories = data.subcategories.nodes


  var category, subcategory
  
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Tutoriais"/>
        <Bio />
        <p>
          No blog posts found.
        </p>
      </Layout>
    )
  }
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Tutoriais"/>
      <Bio location={location} />
      <Categories/>
      {console.log(posts)}
      <Accordion defaultActiveKey="0">
          {

          categories.map(category =>{
            const categoryTitle = category.frontmatter.category
            
            subcategories.map(subcategory =>{
              const subcategoryTitle = subcategory.frontmatter.subcategory

              
            })
          })
          /*posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const id = post.frontmatter.id + ". "|| ""
            console.log(id)

            if(post.frontmatter.category === "Sobre mim") return 
            if(post.frontmatter.category === "Contato") return 

            if(category === null && subcategory){
              category = post.frontmatter.category
              category = post.frontmatter.category
              return (
                <div key={post.fields.slug}>
                  <h2 id={category}>{category}</h2>
                  <Accordion.Toggle>
                    <h6>{post.frontmatter.subcatedory}</h6>
                  </Accordion.Toggle>
                  <Accordion.Collapse>
                      <div key={post.frontmatter.subcatedory}>
                        <h3>{post.frontmatter.subcategory}</h3>
                        {
                          console.log(posts.filter(_post => post.subcatedory === post.frontmatter.subcategory))
                        }
                      </div>
                    </Accordion.Collapse>
                </div>
              )
            }
          })*/
          }
      </Accordion>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
query myQuery{
  
  categories: allMarkdownRemark(
    sort: { 
      fields: [frontmatter___id],
       order: ASC 
      }
    filter: { frontmatter: { category: {  ne: null }}}
    ) {
    nodes {
      frontmatter {
        category
      }
    }
}



subcategories: allMarkdownRemark(
    sort: { 
      fields: [frontmatter___id],
       order: ASC 
      }
    filter: { frontmatter: { subcategory: {  ne: null }}}
    ) {
    nodes {
      frontmatter {
        subcategory
      }
    }
  }



posts: allMarkdownRemark(
    sort: { 
      fields: frontmatter___id,
       order: ASC 
      }
    filter: { frontmatter: {id: {ne: -1}}}
    ){
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        description
        date
        id
      }
    }
}



bio: allMarkdownRemark(
    filter: { frontmatter: {id: {eq: -1} title:{ne: ""}}}
    ){
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        description
        date
        id
      }
    }
}
}

`