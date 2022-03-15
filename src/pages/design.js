import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql } from "gatsby"


const listStyle = {
  padding: "5% 10%",
}

const titleStyle = {
  textAlign: "center",
  marginTop: "5%",
  color: "#3B3B3B",
}

const linkStyle = {
    display: "flex",
    flexDirection: "row",
    padding: "3% 0 3% 0",
    backgroundColor: "#ffffff",
    marginBottom: "5%",
    color: "#3B3B3B",
    textDecoration: "none",
}

const imageStyle = {
  width: "50%"
}

const projectStyle = {
  marginLeft: "3%",
  listStyleType: "none",
}

const design = ({data}) => {
  return (
    <Layout>
      {/* <h2 style={titleStyle}>A selection of UI/UX design I worked on</h2> */}
      <ul style={listStyle}>
        <Link style={linkStyle} to="/design/searchWithImage">
          <Img style={imageStyle} fluid={data.imageOne.childImageSharp.fluid} />
          <li style= {projectStyle} key="1">
              <h1>Search with an Image</h1>
              <p>Ikea idea to search either with a query or a picture</p>
          </li>
        </Link>
        <Link style={linkStyle} to="/design/searchWithImage">
          <Img style={imageStyle} fluid={data.imageTwo.childImageSharp.fluid} />
          <li style= {projectStyle} key="2">
              <h1>Search with an Image two</h1>
              <p>Ikea idea to search either with a query or a picture</p>
          </li>
        </Link>
      </ul>
    </Layout>
  )
}

export default design


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