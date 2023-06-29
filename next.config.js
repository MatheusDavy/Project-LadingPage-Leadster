/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents:true,
        getServerSideProps: false,
        productionBrowserSourceMaps: true,
    },
}
module.exports = nextConfig
