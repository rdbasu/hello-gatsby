import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>Go is NOT SO awesome</h1>
    <Header headerText={data.site.siteMetadata.java} />
  </Layout>
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