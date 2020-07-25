import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About Me" />
      <h2> About </h2>
      <p> I like to Code and Sleep </p>
      <p>
        Need a Developer ? <Link to="/contact"> Contact me. </Link>
      </p>
    </Layout>
  )
}

export default AboutPage
