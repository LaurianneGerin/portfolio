import * as React from "react"
import logo from "../images/LG.png"
import { Link } from "gatsby"

const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    height: "50px",
    padding: "1% 0 1% 0",
    backgroundColor: "#FFDDAD",
}

const homePageLogo = {
    width: "50px",
    height: "50px"
}

const linkStyle = {
    fontSize: 18,
    verticalAlign: "5%",
    textDecoration: "none",
    margin: "0 3% 0 3%",
    color: "#707070",
    fontWeight: "lighter",
}

const links = [
    {
      text: "Experiences",
      url: "/experience",
    },
    {
      text: "Design",
      url: "/design",
    },
    {
      text: "Playground",
      url: "/playground",
    },
    {
        text: "Instagram",
        url: "/myInstagram",
    },
    {
        text: "Contact",
        url: "https://www.linkedin.com/in/laurianne-gerin/",
    },
]

export default function Header() {
  return (
    <div style={headerStyle}>
            <Link to="/" style={linkStyle}>
                <img alt="lgerin Logo" src={logo} style={homePageLogo} />
            </Link>
        {links.map(link => (
                <Link
                style={linkStyle}
                to={`${link.url}`}
                >
                {link.text}
                </Link>
        ))}
    </div>
  )}