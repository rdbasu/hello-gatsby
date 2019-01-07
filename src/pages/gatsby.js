import React from "react"
// import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <h1>GATSBYJS</h1>
    <h4>Gatsby data layer, which is a powerful feature of Gatsby that lets you easily build sites from Markdown, WordPress, headless CMSs, and other data sources of all flavors.</h4>
    <ul>
      <li>Use a page query</li>
      <li>Use a StaticQuery</li>
    </ul>
    <blockquote>changes you make will immediately take effect</blockquote>
  <h4>GraphiQL is the GraphQL integrated development environment (IDE). It’s a powerful (and all-around awesome) tool you’ll use often while building Gatsby websites.</h4>
  <a href="http://localhost:8000/___graphql">GraphiQL</a>
  <h4>Source plugins</h4>
  <blockquote>Source plugins fetch data from their source. E.g. the filesystem source plugin knows how to fetch data from the file system. The WordPress plugin knows how to fetch data from the WordPress API.</blockquote>
  <br />
  <code>npm install --save gatsby-source-filesystem</code>
  <br />
  <h4>Build a page with a GraphQL query</h4>
  <hr />
  <h4>Transformer plugins</h4>
  <blockquote>Gatsby supports transformer plugins which take raw content from source plugins and transform it into something more usable.</blockquote>
  <code>npm install --save gatsby-transformer-remark</code>
  <hr />
  <h3>Programmatically create pages from data</h3>
  <blockquote>Gatsby is not limited to making pages from files like many static site generators. Gatsby lets you use GraphQL to query your data and map the query results to pages—all at build time.</blockquote>
  <ul>
    <li>Generate the “path” or “slug” for the page.</li>
    <li>Create the page.</li>
    <li>Gatsby APIs</li>
    <ol><b>onCreateNode</b>: Called when a new node is created.</ol>
    <ol><b>createPages</b>: Tell plugins to add pages.</ol>
  </ul>

  </Layout>
)