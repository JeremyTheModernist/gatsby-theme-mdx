const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jeremybarnes/Desktop/Sites/gatsby-themes/sample-2/site/.cache/dev-404-page.js"))),
  "component---packages-theme-src-pages-index-js": hot(preferDefault(require("/Users/jeremybarnes/Desktop/Sites/gatsby-themes/sample-2/packages/theme/src/pages/index.js")))
}

