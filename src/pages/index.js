import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (

  <Layout> 
    <h1>Developer Portal</h1>
    <h4>
      {data.allMarkdownRemark.totalCount} markdown files
    </h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        {node.frontmatter.title}
      </div>
    ))
    }
  </Layout>
)
// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

export const query = graphql`
  query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
            }
            html,
            rawMarkdownBody
          }
        }
      }
  }
`