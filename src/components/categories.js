import React from "react"
import { Link, useStaticQuery } from "gatsby"


const Categories = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark {
          distinct(field: frontmatter___category)
        }
      }
  `)
    const categories = data.allMarkdownRemark.distinct.sort().reverse()

    console.log(categories)
    return (<div>
        <h6 className="category-title">Categories</h6>
        <ol className="categories" style={{ listStyle:"none" }}>
            {categories.map(category => {
                var link = "#"+category
                return (
                    <Link to={link} itemProp="url">
                        <li>
                            <h6 itemProp="category">{category}</h6>
                        </li>
                    </Link>
                )
            })}
        </ol>
    </div>)
}

export default Categories