const path = require("path");

module.exports = options => {
	const plugins = [
		{
			resolve: "gatsby-plugin-layout",
			options: {
				component: path.resolve(__dirname, "./src/layouts/index.js")
			}
		},
		`gatsby-plugin-theme-ui`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: "data",
				path: path.resolve("./src/data/")
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: "data",
				path: path.resolve("./src/data/images/")
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: "sitePages",
				path: path.resolve("./src/sitePages/")
			}
		}
	];
	plugins.push({
		resolve: "gatsby-plugin-mdx",
		options: {}
	});
	return { plugins };
};
