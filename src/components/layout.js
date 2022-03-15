import * as React from 'react'
import Header from './header'
// import Footer from './footer'

const layoutStyle = {
    height: "100%"
}

const mainStyle = {
    minHeight: "75vh",
}

const Layout = ({ children }) => {
  return (
    <div style={layoutStyle}>
      <Header/>
      <main style={mainStyle}>
        {children}
      </main>
      <Header/>
    </div>
  )
}
export default Layout