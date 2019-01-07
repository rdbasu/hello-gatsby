import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link style={{ textDecoration: `none` }} to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (

  <StaticQuery 
    query = {graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    }
    render = { data => (
      <div style={{ margin: `0 auto`, maxWidth: 950, padding: `1.25rem 1rem` }}>
      <header style={{ marginBottom: `1.5rem`, backgroundColor: `#f0f0f5` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none` }}>
          {/* <h3 style={{ display: `inline` }}>Software Engineering</h3> */}
          <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/java/">JAVA</ListLink>
          <ListLink to="/javascript/">JAVASCRIPT</ListLink>
          <ListLink to="/nodejs/">NODEJS</ListLink>
          <ListLink to="/gatsby/">GATSBY</ListLink>
          <ListLink to="/go/">GO</ListLink>
        </ul>
      </header>
      {children}
      <footer style={{ marginBottom: `1.5rem`, backgroundColor: `#f0f0f5` }}>
      <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/files/">Files</ListLink>
          <ListLink to="/go/">GO</ListLink>
        </ul>
      </footer>
    </div>
    )
    }></StaticQuery>

  // <div style={{ margin: `0 auto`, maxWidth: 850, padding: `1.25rem 1rem` }}>
  //   <header style={{ marginBottom: `1.5rem`, backgroundColor: `#f0f0f5` }}>
  //     <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, textDecoration: `none` }}>
  //       <h3 style={{ display: `inline` }}>Software Engineering</h3>
  //     </Link>
  //     <ul style={{ listStyle: `none`, float: `right` }}>
  //       <ListLink to="/">Home</ListLink>
  //       <ListLink to="/java/">JAVA</ListLink>
  //       <ListLink to="/javascript/">JAVASCRIPT</ListLink>
  //       <ListLink to="/nodejs/">NODEJS</ListLink>
  //       <ListLink to="/gatsby/">GATSBY</ListLink>
  //     </ul>
  //   </header>
  //   {children}
  // </div>
)