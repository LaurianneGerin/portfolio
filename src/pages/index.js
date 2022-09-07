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
  lineHeight: 2,
  width: "60%",
}
const homePageContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5% 10% 5% 10%",
  marginTop: "5%",
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
          <span style={headingAccentStyles}>— Junior product designer and Front-end engineer</span>
          {/* <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span> */}
        </h1>
        {/* <p style={introStyle}>
          I’m a creative mind with a background in marine biology, passionate about building interfaces and solving customer experience problems.<br/>After graduating I spent a year figuring out what to do with my professional life. My dream has always been to work at Pixar. I'm constantly fascinated by the level of detail and caring this company puts into creating animated movies. My search lead me to pivot and start a career as a front-end engineer. For 3 years this experience brought me closer to the tech industry and incrementally brought me closer to what I was passionate about: Building visuals to trigger an emotional response.
          <br/>Teaching and sharing are two values I’ve always cared about. Hence I joined Algolia as a sales engineer for a year and as a developer educator for another year. Finally I was given the chance to move to product design in March 2022.
          <br/>This website aggregates a few of my contributions over the past years both as a CSS passionate and a junior designer. Hope you will enjoy it as much as I did creating it.
        </p> */}
        <p style={introStyle}>I’m a creative mind with a background in marine biology, passionate about building interfaces and solving customer experience problems. </p>
        <p style={introStyle}>
          After graduating I spent a year figuring out what to do with my professional life. My dream has always been to work at Pixar. I'm constantly fascinated by the level of detail and caring this company puts into creating animated movies. My search lead me to pivot and start a career as a front-end engineer. For 3 years this experience brought me closer to the tech industry and incrementally brought me closer to what I was passionate about: Building visuals to trigger an emotional response.
        </p>
        <p style={introStyle}>Teaching and learning are two practices I’ve always cared about. Hence I joined Algolia as a sales engineer for a year and a developer educator for another year. Finally I was given the chance to move to product design in March 2022.</p>
        <p style={introStyle}>This website aggregates a few of my contributions over the past years as a junior designer but also some of the visual challenges I like to replicate with code. Hope you will enjoy it as much as I did creating it.</p>
      </div>
    </div>
  )
}

export default IndexPage
