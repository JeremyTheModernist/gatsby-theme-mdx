import React from "react";
import { graphql } from "gatsby";

export const data = graphql`
	query($postID: String!) {
		mdx(id: { eq: $postID }) {
			frontmatter {
				title
				description
			}
		}
	}
`;

const Post = props => {
	console.log("data!", props.data);
	var { mdx } = props.data;
	return (
		<div>
			<h1>{mdx.frontmatter.title}</h1>
			<p>{mdx.frontmatter.description}</p>
		</div>
	);
};

export default Post;
