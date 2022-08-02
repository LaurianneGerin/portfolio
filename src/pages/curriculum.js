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
    role: "Partner Engineer / Developer Educator",
    company: "Algolia",
    snippet: "Algolia is a search as a service product.",
    city: "London, UK",
    dateRange: "01/2020-ongoing", 
    description: ["Educated partners on search API and search user experience",
    "Built POCs to demonstrate the value of partnering with Algolia",
    "Created content to guide customers through search integration"
    ],
  },
  {
    id: 2,
    role: "Teacher Assistant",
    company: "Le Wagon",
    snippet: "Coding bootcamp that teaches students how to code products",
    city: "Bordeaux, FR",
    dateRange: "2012-2017", 
    description: ["Advised on product design for each student group",
      "Worked as principal teacher assistant",
      "“Great teacher, determined and problem solver” as described by students and staff",
    ],
  },
  {
    id: 3,
    role: "Front-end Developer",
    company: "Norauto",
    snippet: "Massive update of the Norauto’s administrative system.",
    city: "Lille, FR",
    dateRange: "03/2018-01/2019", 
    description: ["Developed with Material UI and Polymer components",
      "Gathered requirements and guided design implementation",
      "Applied Behavior Driven Development testing to align with design",
    ],
  },
  {
    id: 4,
    role: "Front-end Developer",
    company: "Fibeez",
    snippet: "Fintech company on the SMB segment.",
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
    snippet: "Azendoo is like Slack + Trello made in France",
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