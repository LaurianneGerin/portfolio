import * as React from "react"
import logo from "../images/LG.png"
import { Link } from "gatsby"

const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    minHeight: "50px",
    padding: "1% 0 1% 0",
    backgroundColor: "#9AA2FE",
}

const homePageLogo = {
    width: "50px",
    height: "50px"
}

const linkStyle = {
    fontSize: 12,
    verticalAlign: "5%",
    textDecoration: "none",
    margin: "0 3% 0 3%",
    color: "#ffffff",
    fontWeight: "400",
    textTransform: "uppercase"
}

const links = [
    {
      text: "Curriculum",
      url: "/curriculum",
    },
    {
      text: "Design",
      url: "/design",
    },
    {
      text: "Playground",
      url: "/playground",
    },
    // {
    //     text: "Can you see?",
    //     url: "/myInstagram",
    // },
    {
        text: "Contact",
        url: "https://www.linkedin.com/in/laurianne-gerin/",
    },
]

export default function Header() {
  return (
    <div style={headerStyle}>
            <Link to="/" style={linkStyle}>
                {/* <img alt="lgerin Logo" src={logo} style={homePageLogo} /> */}
                <p>Laurianne</p>
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