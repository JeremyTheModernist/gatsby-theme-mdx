const fs = require("fs");
const path = require("path");

//  this is integral to call, b/c it allows your theme to pull in any data from your data folder for your source nodes
exports.onPreBootstrap = () => {
	const contentPath = "src/data";
	if (!fs.existsSync(contentPath)) {
		console.log(`creating the CONTENT PATH ${contentPath} directory`);
		fs.mkdirSync(`${contentPath}`);
	}
};

exports.createPages = async ({ actions, graphql }) => {
	const result = await graphql(`
		query {
			allMdx {
				edges {
					node {
						id
						frontmatter {
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
			path: `${node.frontmatter.title}`,
			component: path.resolve(__dirname, `./src/templates/Post.js`),
			context: {
				postID: node.id
			}
		});
	});
};
