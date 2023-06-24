/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        reactStrictMode: true,
        styledComponents:
            Boolean |
            {
                displayName: Boolean | undefined,
                ssr: Boolean | undefined
            }
    },

}
module.exports = nextConfig
