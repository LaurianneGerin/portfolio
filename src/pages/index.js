import * as React from "react"
// import logo from "../images/LG.png"
// import Background from "../images/home-background.png"
import layouts from "../style/layouts.scss"
import Footer from "../components/footer"
import Header from "../components/header"

////////////////////////////////////////////////////////////////////// styles
const pageStyles = {
  // color: "#232129",
  // padding: "5%",
  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
  // backgroundImage: `url(${Background})`,
  // backgroundRepeat: "no-repeat",
  // height: "100%",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const introStyle = {
  marginBottom: "5%"  
}
const homePageContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}
const headingAccentStyles = {
  color: "#663399",
}

////////////////////////////////////////////////////////////////// data
const docLink = {
  text: "Documentation",
  url: "/experience",
  color: "#8954A8",
}

///////////////////////////////////////////////////////////////// markup
const IndexPage = () => {
  return (
      <div style={pageStyles}>
        <Header />
        <div style={homePageContent}>
          <h1 style={headingStyles}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            <span style={headingAccentStyles}>— Sed fringilla velit sit amet ante mollis consequat. </span>
            {/* <span role="img" aria-label="Party popper emojis">
              🎉🎉🎉
            </span> */}
          </h1>
          <p style={introStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla velit sit amet ante mollis consequat. Suspendisse at dolor a nibh luctus venenatis. Vestibulum vitae condimentum dolor, quis ullamcorper enim. In dapibus elit ac elit posuere suscipit. Duis ut augue consectetur, lobortis nisi ac, varius mauris. Duis sagittis, neque sit amet sollicitudin imperdiet, lorem turpis gravida lectus, non eleifend ipsum tellus nec lacus. Mauris dapibus, diam non eleifend tristique, velit arcu ullamcorper neque, efficitur ornare leo eros a est. Mauris ullamcorper tristique lorem sit amet congue. Integer sed turpis nec nibh eleifend tincidunt. Nunc non urna quis nibh ultrices condimentum. Vivamus congue, quam nec malesuada imperdiet, leo quam porta ligula, at volutpat ipsum libero ac justo. Maecenas nisi arcu, commodo a risus id, semper gravida massa. Nullam eros nunc, commodo vitae ullamcorper id, sollicitudin id diam. Cras luctus eget eros nec accumsan.
          </p>
        </div>
        <Footer/>
      </div>
  )
}

export default IndexPage
