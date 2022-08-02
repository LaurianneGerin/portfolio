import * as React from "react"
import layouts from "../styles/layouts.scss"
import { indexStyle } from "../styles/index.module.css"
import Header from "../components/header"


const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: "40px"
}
const introStyle = {
  // marginBottom: "5%",
  lineHeight: 2,  
}
const homePageContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5% 10% 5% 10%",
  color: "#3B3B3B",
}
const headingAccentStyles = {
  color: "#B882FF",
}

const IndexPage = () => {
  return (
    <div>
      <Header/>
      <div style={homePageContent}>
        <h1 style={headingStyles}>
          Laurianne Gerin
          <br />
          <span style={headingAccentStyles}>— Front-end developer and junior product designer</span>
          {/* <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span> */}
        </h1>
        <p style={introStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default IndexPage
