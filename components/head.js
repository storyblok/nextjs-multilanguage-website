import React from 'react'
import NextHead from 'next/head'

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <meta name="description" content={description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,700" />
  </NextHead>
)

export default Head