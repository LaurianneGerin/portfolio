import * as React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"


const listStyle = {
  padding: "5% 10%",
}

const linkStyle = {
    display: "flex",
    flexDirection: "row",
    padding: "3% 0 3% 0",
    backgroundColor: "#ffffff",
    marginBottom: "5%",
    color: "#9BA2FF",
    textDecoration: "none",
}

const imageStyle = {
  width: "50%"
}

const projectStyle = {
  marginLeft: "3%",
  listStyleType: "none",
}

const subtitleStyle = {
  color: "#3B3B3B",
}

const design = ({data}) => {

  return (
    <Layout>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/playground/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
          </article>
        ))
      }
    </Layout>
  )
}

export default design

export const query = graphql`
  {
    allMdx(
      sort: {fields: frontmatter___projectNumber, order: ASC}
      filter: {fileAbsolutePath: {regex: "/codeSandboxes/"}}
    ) {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`