const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---packages-theme-src-templates-post-js": hot(preferDefault(require("/Users/jeremybarnes/Desktop/Sites/gatsby-themes/gatsby-theme-mdx/packages/theme/src/templates/Post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jeremybarnes/Desktop/Sites/gatsby-themes/gatsby-theme-mdx/site/.cache/dev-404-page.js"))),
  "component---packages-theme-src-pages-about-js": hot(preferDefault(require("/Users/jeremybarnes/Desktop/Sites/gatsby-themes/gatsby-theme-mdx/packages/theme/src/pages/about.js"))),
  "component---packages-theme-src-pages-index-js": hot(preferDefault(require("/Users/jeremybarnes/Desktop/Sites/gatsby-themes/gatsby-theme-mdx/packages/theme/src/pages/index.js")))
}

