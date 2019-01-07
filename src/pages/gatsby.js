import React from "react"
// import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <h1>GATSBYJS</h1>
    <h2>Gatsby blah blah is a blazing fast modern <i>site generator for React</i>.</h2>

    <h3>Gatsby.js is a modern site generator, which means there are no servers to setup or complicated databases to deploy. Instead, the Gatsby build command produces a directory of static HTML and JavaScript files which you can deploy to a static site hosting service.</h3>

    <h2>Create a new site.</h2>
    <code>gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
    </code>
    <hr />
    {/* <code>gatsby develop</code> */}
    <h2>Start development server.</h2>
    <br />
    <blockquote>Gatsby uses hot reloading to speed up your development process. Essentially, when you’re running a Gatsby development server, the Gatsby site files are being “watched” in the background — any time you save a file, your changes will be immediately reflected in the browser. You don’t need to hard refresh the page, or restart the development server — your changes just appear.</blockquote>
    <hr />

    <blockquote>Gatsby will start a hot-reloading development environment accessible by default at localhost:8000.</blockquote>
    <code>gatsby develop</code>
    <hr />

    <h2>Create a production build.</h2>
    <blockquote>Gatsby will perform an optimized production build for your site, generating static HTML and per-route JavaScript code bundles.</blockquote>
    <code>gatsby build</code>
    <hr />

    <h2>Installing your first Gatsby plugin</h2>
    <br />
    <code>npm install --save gatsby-plugin-typography react-typography typography</code>
    <br />
    <code>gatsby-config.js</code>
    <hr />

    <h2>Your first layout component</h2>
    <blockquote>Create a very basic layout component at src/components/layout.js</blockquote>
    <hr />

    <h2>Data in Gatsby</h2>
    <h4>Gatsby data layer, which is a powerful feature of Gatsby that lets you easily build sites from Markdown, WordPress, headless CMSs, and other data sources of all flavors.</h4>
    <ul>
      <li>Use a page query</li>
      <blockquote>Page queries live outside of the component definition — by convention at the end of a page component file — and are only available on page components.</blockquote>
      <li>Use a StaticQuery</li>
      <blockquote>StaticQuery is a new API introduced in Gatsby v2 that allows non-page components (like our layout.js component), to retrieve data via GraphQL queries.</blockquote>
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