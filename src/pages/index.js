import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Categories from "../components/categories"

var initialized = false
var index = 0

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.posts.nodes
  const categories = data.categories.nodes
  const subcategories = data.subcategories.nodes

  
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

      {

      categories.map(category =>{
        const categoryTitle = category.frontmatter.category
        
        return(
          <div key={categoryTitle}>
            <h2 id={categoryTitle}>{categoryTitle}</h2>
            {
              subcategories.map(subcategory =>{
                const subcategoryTitle = subcategory.frontmatter.subcategory
                const subcategorySize = subcategory.frontmatter.size - 1
                
                console.log(subcategoryTitle)
                console.log(subcategorySize)
                
                var sum = index + subcategorySize
                
                return(
                  <div key={subcategoryTitle}>
                  <h4 id={subcategoryTitle}>{subcategoryTitle}</h4>
                  <ol>
                      {
                        posts.slice(index, sum).map(post =>{
                          index++
                          return(
                            <li key={post.fields.slug}>
                              <article
                                className="post-list-item"
                                itemScope
                                itemType="http://schema.org/Article"
                                >
                                <header>
                                  <h2>
                                    <Link onClick={index=0} to={post.fields.slug} itemProp="url">
                                      <span itemProp="headline">{post.id}{post.frontmatter.title}</span>
                                    </Link>
                                  </h2>
                                </header>
                                <section>
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: post.frontmatter.description || post.excerpt,
                                    }}
                                    itemProp="description"
                                  />
                                </section>
                              </article>
                          </li>
                          )
                        })
                      }
                  </ol>
                  </div>
              )
              })
            }
          </div>
        )
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
        size
      }
    }
  }

site: site {
  siteMetadata {
    title
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