import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (

  <Layout> 
    <h1>Software Engineering</h1>
    <h4>
      {data.allMarkdownRemark.totalCount} markdown files
    </h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        {node.frontmatter.title}
      </div>
    ))
    }
    {/* <h1>{data.site.siteMetadata.title}</h1> */}
    {/* <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p> */}
    {/* <div style={{ margin: `3rem auto`, maxWidth: 800 }}>
      <h1>Merchant Integrations RDB Platform</h1>
      <div>
        <p>
          From Richard Hamming’s classic and must-read talk, “
          <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            You and Your Research
          </a>
          ”.
        </p>
        <blockquote>
          <p>
            There is indeed an element of luck, and no, there isn’t. The prepared
            mind sooner or later finds something important and does it. So yes, it
            is luck.{" "}
            <em>
              The particular thing you do is luck, but that you do something is
              not.
            </em>
          </p>
        </blockquote>
      </div>
      <p>Posted April 09, 2011</p>
    </div> */}
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