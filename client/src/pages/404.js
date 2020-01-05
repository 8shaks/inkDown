import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Seems like you got the wrong url. Double check your url and try reloading the page.</p>
  </Layout>
)

export default NotFoundPage
