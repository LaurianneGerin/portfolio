import * as React from "react"
import Layout from "../components/layout"
// import ArticleLayout from "../components/articleLayout"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link, graphql } from "gatsby"

const articleResumeStyle = {
  display: "flex",
  flexDirection: "column",
  paddingLeft: "5%",
  color: "#3B3B3B"
}

const articleLayoutStyle = {
  display: "flex",
  // width: "100%",
  marginTop: "2%",
  marginBottom: "5%",
}

const design = ({data}) => {
  return (
    <Layout>
      {
        data.allMdx.nodes.map((node) => (
          <div style={articleLayoutStyle} key={node.id}>
              <GatsbyImage
                image={getImage(node.frontmatter.hero_image)}
                alt={node.frontmatter.hero_image_alt}
              />
              <div style={articleResumeStyle}>
                <h2>
                  <Link to={`/design/${node.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>{node.frontmatter.abstract}</p>
              </div>
          </div>
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
      filter: {fileAbsolutePath: {regex: "/designProjects/"}}
    ) {
      nodes {
        frontmatter {
          title
          abstract
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 300
                placeholder: BLURRED
              )
            }
          }
        }
        id
        slug
      }
    }
  }
`