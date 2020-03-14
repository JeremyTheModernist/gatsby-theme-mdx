// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---packages-theme-src-templates-post-js": () => import("./../../packages/theme/src/templates/Post.js" /* webpackChunkName: "component---packages-theme-src-templates-post-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---packages-theme-src-pages-about-js": () => import("./../../packages/theme/src/pages/about.js" /* webpackChunkName: "component---packages-theme-src-pages-about-js" */),
  "component---packages-theme-src-pages-index-js": () => import("./../../packages/theme/src/pages/index.js" /* webpackChunkName: "component---packages-theme-src-pages-index-js" */)
}

