import * as React from "react"
import Layout from "../components/layout"
import InstaFeeds from '../components/instaFeeds'

export default function Instagram() {
  return (
    <Layout>
      <h1>Instagram</h1>
      <InstaFeeds token={process.env.GATSBY_INS_TOKEN} limit={12}/>
    </Layout>
)
}