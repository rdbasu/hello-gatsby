module.exports = {
    siteMetadata: {
        title: `Part of the { Hello } World Series`,
        java: `JAVA`,
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