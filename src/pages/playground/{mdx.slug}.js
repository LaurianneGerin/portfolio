import * as React from "react"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'


const codeSandboxesTemplate = ({data}) => {

  // const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {/* <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      /> */}
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}


export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
      }
    }
  }
`

export default codeSandboxesTemplate