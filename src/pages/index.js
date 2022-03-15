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
  color: "#FF99D1",
}

const IndexPage = () => {
  return (
    <div>
      <Header/>
      <div style={homePageContent}>
        <h1 style={headingStyles}>
          Laurianne Gerin
          <br />
          <span style={headingAccentStyles}>— Front-end developer passionate about product design</span>
          {/* <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span> */}
        </h1>
        <p style={introStyle}>
          <b>I thought I would become an Oceanographer.</b> At 18, the only thing I loved studying was any topics related to the ocean. I learned every different aspect of the ocean possible: chemistry of the ocean water, geology, physical movements of the water and any marine life form.
          I had a blast for 5 years and graduated the University of Pierre and Marie Curie (UPMC Paris Sorbonne) with a master’s degree. But quickly I had to think about how to make a living with all that knowledge. The obvious next step was to go for a thesis but that’s not what I wanted.
        </p>
        <p style={introStyle}>
          At the end of 2015, I took a year off to travel. I did not go too far, taking advantage of my dual citizenship (French/American), I joined a friend who was studying an entrepreneurial program at Berkeley, California. That’s when I discovered the tech world, joining meet-ups, meeting developers, designers. I had so many questions!
          I found myself helping my friend on a very basic website for their semester’s pitch contest. How hard could it be compared to oceanography modelling (Matlab) or biology stats (R)? I learned HTML, JS and CSS as well as softwares such as Photoshop and Sketch. I had so much fun, I couldn’t stop learning.
        </p>
        <p style={introStyle}>
          When I came back to France, I knew selling a self-taught experience would be difficult. Nonetheless, under a year, I managed to reorient my path and start as a junior web developer in 2016.
          Eversince, I learned a lot as a Front-end developer and I am now looking to expend my skills in product design.
        </p>
      </div>
    </div>
  )
}

export default IndexPage
