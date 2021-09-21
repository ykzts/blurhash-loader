const withNextra = require('nextra')('nextra-theme-docs', './theme.config.tsx')

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  reactStrictMode: true
})
