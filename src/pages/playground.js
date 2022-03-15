import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const listStyle = {
  padding: "0",
  flexDirection: "column",
  justifyContent: "space-between",
}

const linkStyle = {
    display: "flex",
    flexDirection: "row",
    padding: "3% 0 3% 0",
    boxShadow: "0px 4px violet",
    backgroundColor: "#ffffff",
    marginBottom: "5%",
}

const imageStyle = {
  width: "30%"
}

const projectStyle = {
  marginLeft: "3%",
  listStyleType: "none",
}


export default function playground({ data }) {
  return (
    <div>
      <Layout>
        <h1>Playground</h1>
        <ul style={listStyle}>
          <Link style={linkStyle} to="/trucmuche">
            <Img style={imageStyle} fluid={data.imageOne.childImageSharp.fluid} />
            <li style= {projectStyle} key="1">
                <h3>Search with an Image</h3>
                <p>Ikea idea to search either with a query or a picture</p>
            </li>
          </Link>
        </ul>
      </Layout>
    </div>
  )}

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "searchWithImage.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "searchWithImage2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;