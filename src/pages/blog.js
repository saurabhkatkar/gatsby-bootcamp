import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  const edges = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <Head title="Blog" />

      <h1> Blog </h1>
      <ol className={blogStyles.posts}>
        {edges.map((e, index) => (
          <li key={index + 1} className={blogStyles.post}>
            <Link to={`/blog/${e.node.slug}`}>
              <h2>{e.node.title}</h2>
              <p>{e.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
