/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Mohamed Afify Frontend Developer",
    description:
      "A personal website and portfolio for a frontend developer skilled in both development and designing aspects",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-194075377-1",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-react-helmet",

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mohamed Afify",
        short_name: "Mohamed_Afify",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/assets/icons/m.svg",
      },
    },
  ],
}
