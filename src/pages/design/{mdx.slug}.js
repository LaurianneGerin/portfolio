import * as React from "react"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'


// const listStyle = {
//   padding: "5% 10%",
// }

// const linkStyle = {
//     display: "flex",
//     flexDirection: "row",
//     padding: "3% 0 3% 0",
//     backgroundColor: "#ffffff",
//     marginBottom: "5%",
//     color: "#9BA2FF",
//     textDecoration: "none",
// }

// const imageStyle = {
//   width: "50%"
// }

// const projectStyle = {
//   marginLeft: "3%",
//   listStyleType: "none",
// }

// const subtitleStyle = {
//   color: "#3B3B3B",
// }

const designProjectTemplate = ({data}) => {

  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}


// export const query = graphql`
//   query($id: String) {
//     mdx(id: {eq: $id}) {
//       body
//       frontmatter {
//         title
//         hero_image_alt
//         hero_image {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `

export default designProjectTemplate