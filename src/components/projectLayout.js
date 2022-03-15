import * as React from 'react'

const projectLayoutStyle = {
    marginBottom: "5%",
    textAlign: "center",
}

const ProjectLayout = ({ children }) => {
  return (
    <div style={projectLayoutStyle}>
        {children}
    </div>
  )
}
export default ProjectLayout