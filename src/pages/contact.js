import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2> Contact </h2>
      <p>
        You can find me github &nbsp;
        <a
          href="https://github.com/saurabhkatkar"
          target="_blank"
          rel="noreferrer"
        >
          @saurabhkatkar
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
