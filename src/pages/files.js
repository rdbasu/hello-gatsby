import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    console.log(data);
    return (
        <Layout>
            <div>
                <h3>FILES in this SITE</h3>
                <table>
                    <thead>
                        <th>Relative Path</th>
                        <th>Size</th>
                        <th>Extension</th>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({ node }, index) => (
                            <tr key={index}>
                                <td>{node.relativePath}</td>
                                <td>{node.size}</td>
                                <td>{node.extension}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            edges {
              node {
                relativePath,
                size,
                extension
              }
            }
          }
    }
`