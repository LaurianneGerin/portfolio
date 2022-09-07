import * as React from "react"
import Layout from "../components/layout"
import { FaMapPin, FaCalendarAlt } from "react-icons/fa";
import {
  experienceLayout,
  experienceStyle,
  roleStyle,
  companyStyle,
  detailsStyle,
  detailItemStyle,
  snippetStyle,
  listStyle,
  itemStyle,
} from "../styles/experience.module.css"

const experiences = [
  {
    id: 1,
    role: "Partner Engineer / Developer Educator / Junior Product Designer",
    company: "Algolia",
    snippet: "Algolia is a search as a service product. I discovered the targets of the Sales org as a partner engineer and those of the Customer org as a developer educator. Eventually I took the leap into product design.",
    city: "London, UK",
    dateRange: "01/2020-ongoing",
    description: ["Educated partners on Search API and Search user experience",
    "Built POCs to demonstrate the value of partnering with Algolia",
    "Created content to guide customers through search integration",
    "Designed components for the Algolia Recommend product"
    ],
  },
  {
    id: 2,
    role: "Teacher Assistant",
    company: "Le Wagon",
    snippet: "Coding bootcamp. I discovered a passion for teaching and sharing my knowledge to students.",
    city: "Bordeaux, FR",
    dateRange: "year 2019", 
    description: ["Advised on product design for groups of students",
      "Worked as principal teacher assistant",
      "Described as “Great teacher, determined and problem solver”",
    ],
  },
  {
    id: 3,
    role: "Front-end Developer",
    company: "Norauto",
    snippet: "Norauto is an international vehicle repair service company that needed an update of their internal tooling system. I was the only front-end engineer pushing for UI/UX design.",
    city: "Lille, FR",
    dateRange: "01/2018-01/2019", 
    description: ["Developed with Material UI and Polymer components",
      "Gathered requirements and guided design implementation",
      "Applied Behavior Driven Development testing to align with design",
    ],
  },
  {
    id: 4,
    role: "Front-end Developer",
    company: "Fibeez",
    snippet: "Fintech company focused on the SMB market. This was my first experience for a start-up. Company failed fast but it did confirm my appetite for front-end development and UI/UX.",
    city: "Bordeaux, FR",
    dateRange: "09/2017-01/2018", 
    description: ["Designed the POC sketches of the desktop application",
      "Built a responsive website and desktop application",
    ],
  },
  {
    id: 5,
    role: "Front-end Developer",
    company: "Azendoo",
    snippet: "Azendoo is like Slack + Trello made in France. This was my first experience as a self-taught developer and reconverted marine biologist.",
    city: "Bordeaux, FR",
    dateRange: "10/2016-08/2017", 
    description: ["Learned JS and React in less than 3 months",
      "Integrated webpages and app features according to design team specs",
    ],
  }
]



export default function Experience() {
  return (
      <Layout>
        <div className={experienceLayout}>
          {experiences.map(experience => (
            <div className={experienceStyle}>
              <h2 className={roleStyle}>{experience.role}</h2>
              <h3 className={companyStyle}>{experience.company}</h3>
              <div className={detailsStyle}>
                <p className={detailItemStyle}>
                  <FaCalendarAlt/>
                  {experience.dateRange}</p>
                <p>
                  <FaMapPin/>
                  {experience.city}</p>
              </div>
              <p className={snippetStyle}>{experience.snippet}</p>
              <ul className={listStyle}>
              {experience.description.map(item => (
                  <li className={itemStyle} key="item">
                    {item}
                  </li>
              ))}
              </ul>
            </div>
          ))}
        </div>
      </Layout>
  )
}