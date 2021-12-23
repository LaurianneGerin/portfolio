import * as React from "react"

const footerStyle = {
    position: "fixed",
    bottom: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width:"100%"
}

export default function Footer() {
  return (
  <div style={footerStyle}>
    <p>This is the footer</p>
  </div>
  )}