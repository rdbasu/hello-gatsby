import React from "react"
import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    {/* <h1>{data.site.siteMetadata.title}</h1> */}
    <Header headerText="REST APIs" />
  </Layout>
  // <div style={{ color: `teal` }}>
  //   <Link to="/">Home</Link>
  //   <Header headerText="Contact" />
  //   <p>Send us a message!</p>
  // </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title,
        java
      }
    }
  }
`