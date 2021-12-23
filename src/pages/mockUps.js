import * as React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const pageStyles = {
  // color: "#232129",
  // padding: "5%",
  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
  // backgroundImage: `url(${Background})`,
  // backgroundRepeat: "no-repeat",
  // height: "100%",
}

export default function Index() {
  return (
      <div style={pageStyles}>
        <Header />
        <div>
          <h1>Mockups</h1>
        </div>
        <Footer />
      </div>
  )
}