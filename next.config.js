/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd2ofpir5gh0cbr.cloudfront.net',
                port: '',
                pathname: '/**/**',
            },
        ],
    },
}

module.exports = nextConfig
