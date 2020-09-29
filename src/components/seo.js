import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import config from '../utils/config'

function SEO({ description, lang, meta, title }) {


  const metaDescription = description || config.description
  const metaTitle = title || config.siteTitle

  return (
    <Helmet>
    <meta name="description" content={metaDescription} />

    <meta property="og:title" content={metaTitle} />
    <meta property="og:description" content={metaDescription} />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={config.author} />
    <meta name="twitter:title" content={metaTitle} />
    <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO