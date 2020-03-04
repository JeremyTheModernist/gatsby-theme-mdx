const path = require("path");

module.exports = options => {
	const plugins = [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: "data",
				path: path.resolve("./src/data/")
			}
		}
	];
	plugins.push({
		resolve: "gatsby-plugin-mdx",
		options: {}
	});
	return { plugins };
};
