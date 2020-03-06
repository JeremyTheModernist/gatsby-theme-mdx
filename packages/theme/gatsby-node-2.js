const fs = require("fs");

//  this is integral to call, b/c it allows your theme to pull in any data from your data folder for your source nodes
exports.onPreBootstrap = () => {
	const contentPath = "src/data";
	if (!fs.existsSync(contentPath)) {
		console.log(`creating the CONTENT PATH ${contentPath} directory`);
		fs.mkdirSync(`${contentPath}`);
	}
};

//  have to create a Post type during build process, so Gatsby has access to it.
//  https://www.gatsbyjs.org/docs/schema-customization/#creating-type-definitions
exports.sourceNodes = ({ actions }) => {
	console.log("source node", actions);
	const { createTypes } = actions;
	createTypes(`
        type mdx implements Node @dontInfer {
            frontmatter: FrontMatter
            slug: String!
        },
        type FrontMatter {
            title: String!
            description: String!
        }
    `);
};

// https://www.gatsbyjs.org/docs/node-apis/#createResolvers
//  if you create custom types, you can use them to generate values for the slug.
// here we are grabbing the title from the MDX post to create a slug path.
exports.createResolvers = ({ createResolvers }) => {
	const basePath = "/";
	createResolvers({
		mdx: {
			slug: {
				resolve: (parentSource, args, context, info) => {
					console.log("parent Source", parentSource);
					return `${basePath}/${parentSource.title}`;
				}
			}
		}
	});
};
