import * as React from "react"
import Layout from "../../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import ProjectLayout from "../../components/projectLayout"

const imageStyle = {
  width: "100%",
}

const descriptionStyle = {
  margin: "5% 0 5% 0",
}

export default function SearchWithAnImage({data}) {
  return (
    <Layout>
      <ProjectLayout>
        <h1>Search with an Image</h1>
        <Img style={imageStyle} fluid={data.imageOne.childImageSharp.fluid} />
        <p style={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla velit sit amet ante mollis consequat. Suspendisse at dolor a nibh luctus venenatis. Vestibulum vitae condimentum dolor, quis ullamcorper enim. In dapibus elit ac elit posuere suscipit. Duis ut augue consectetur, lobortis nisi ac, varius mauris. Duis sagittis, neque sit amet sollicitudin imperdiet, lorem turpis gravida lectus, non eleifend ipsum tellus nec lacus. Mauris dapibus, diam non eleifend tristique, velit arcu ullamcorper neque, efficitur ornare leo eros a est. Mauris ullamcorper tristique lorem sit amet congue. Integer sed turpis nec nibh eleifend tincidunt. Nunc non urna quis nibh ultrices condimentum. Vivamus congue, quam nec malesuada imperdiet, leo quam porta ligula, at volutpat ipsum libero ac justo. Maecenas nisi arcu, commodo a risus id, semper gravida massa. Nullam eros nunc, commodo vitae ullamcorper id, sollicitudin id diam. Cras luctus eget eros nec accumsan.</p>
        <Img style={imageStyle} fluid={data.imageTwo.childImageSharp.fluid} />
        <p style={descriptionStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla velit sit amet ante mollis consequat. Suspendisse at dolor a nibh luctus venenatis. Vestibulum vitae condimentum dolor, quis ullamcorper enim. In dapibus elit ac elit posuere suscipit. Duis ut augue consectetur, lobortis nisi ac, varius mauris. Duis sagittis, neque sit amet sollicitudin imperdiet, lorem turpis gravida lectus, non eleifend ipsum tellus nec lacus. Mauris dapibus, diam non eleifend tristique, velit arcu ullamcorper neque, efficitur ornare leo eros a est. Mauris ullamcorper tristique lorem sit amet congue. Integer sed turpis nec nibh eleifend tincidunt. Nunc non urna quis nibh ultrices condimentum. Vivamus congue, quam nec malesuada imperdiet, leo quam porta ligula, at volutpat ipsum libero ac justo. Maecenas nisi arcu, commodo a risus id, semper gravida massa. Nullam eros nunc, commodo vitae ullamcorper id, sollicitudin id diam. Cras luctus eget eros nec accumsan.</p>
      </ProjectLayout>
    </Layout>
)
}

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