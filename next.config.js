const { experimental_useEffectEvent } = require('react')

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    serverActions: true,
}
}

module.exports = nextConfig

