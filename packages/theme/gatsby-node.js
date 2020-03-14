const fs = require("fs");
const path = require("path");

//  this is integral to call, b/c it allows your theme to pull in any data from your data folder for your source nodes
exports.onPreBootstrap = () => {
	const contentPath = ["src", "src/data", "src/data/images", "src/sitePages"];
	if (!fs.existsSync(contentPath[0])) {
		console.log(`creating the CONTENT PATH ${contentPath} directory`);
		fs.mkdirSync(`${contentPath[0]}`);
	}
	if (!fs.existsSync(contentPath[1])) {
		console.log(`creating the CONTENT PATH ${contentPath} directory`);
		fs.mkdirSync(`${contentPath[1]}`);
	}
	if (!fs.existsSync(contentPath[2])) {
		console.log(`creating the CONTENT PATH ${contentPath} directory`);
		fs.mkdirSync(`${contentPath[2]}`);
	}
	if (!fs.existsSync(contentPath[3])) {
		console.log(`creating the CONTENT PATH ${contentPath} directory`);
		fs.mkdirSync(`${contentPath[3]}`);
	}
};

exports.createPages = async ({ actions, graphql }) => {
	const result = await graphql(`
		query {
			allMdx(filter: { fileAbsolutePath: { regex: "/data/" } }) {
				edges {
					node {
						id
						frontmatter {
							slug
							title
						}
					}
				}
			}
		}
	`);

	const { edges } = result.data.allMdx;
	console.log("RESULT", JSON.stringify(result, undefined, 2));

	edges.forEach(({ node }) => {
		actions.createPage({
			path: `${node.frontmatter.slug}`,
			component: path.resolve(__dirname, `./src/templates/Post.js`),
			context: {
				postID: node.id
			}
		});
	});
};
