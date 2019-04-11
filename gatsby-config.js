module.exports = {
    siteMetadata: {
        title: `Next Generation Developer Portal`,
        java: `Docs`,
        sdks: `SDKs`,
        header: `Software Engineering YES` 
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
  }