import * as React from "react"
import logo from "../images/LG.png"
import { Link } from "gatsby"


const headerStyle = {
    display: "flex",
    flexDirection: "row"
}

const homePageLogo = {
    width: "50px",
    height: "50px"
}

const listStyles = {
    paddingLeft: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
}

const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
}

const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
}

const docLinkStyle = {
    ...linkStyle,
    listStyleType: "none",
    marginBottom: 24,
}

const descriptionStyle = {
    color: "#232129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
}


const badgeStyle = {
    color: "#fff",
    backgroundColor: "#088413",
    border: "1px solid #088413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
}
const links = [
    {
      text: "Experiences",
      url: "/experience",
      color: "#E95800",
    },
    {
      text: "Instagram",
      url: "/instagram",
      color: "#E95800",
    },
    {
      text: "Mockups",
      url: "/mockUps",
      color: "#E95800",
    },
    {
      text: "Visual Code",
      url: "/visualCode",
      color: "#E95800",
    },
]

export default function Header() {
  return (
    <div style={headerStyle}>
        <Link to="/">
            <img alt="lgerin Logo" src={logo} style={homePageLogo} />
        </Link>
        <ul style={listStyles}>
            {links.map(link => (
                <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
                <span>
                    <Link
                    style={linkStyle}
                    to={`${link.url}`}
                    >
                    {link.text}
                    </Link>
                    {link.badge && (
                    <span style={badgeStyle} aria-label="New Badge">
                        NEW!
                    </span>
                    )}
                    <p style={descriptionStyle}>{link.description}</p>
                </span>
                </li>
            ))}
        </ul>
    </div>
  )}