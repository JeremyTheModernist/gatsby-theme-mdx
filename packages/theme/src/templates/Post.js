/** @jsx jsx */
import { jsx } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import Img from "gatsby-image";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Styled } from "theme-ui";

export const data = graphql`
	query($postID: String!) {
		mdx(id: { eq: $postID }) {
			frontmatter {
				title
				coverImage {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			body
		}
	}
`;

const components = {
	h1: props => <Styled.h1 {...props}></Styled.h1>,
	h3: props => <Styled.h3 {...props}></Styled.h3>,
	p: props => <Styled.p {...props}></Styled.p>,
	blockquote: props => <Styled.blockquote {...props}></Styled.blockquote>
};

const Post = props => {
	console.log("data!", props.data);
	var { mdx } = props.data;
	return (
		<div>
			{/* do a data check to make sure this data exists */}
			{mdx.frontmatter.title && (
				<Styled.h1>{mdx.frontmatter.title}</Styled.h1>
			)}

			{mdx.frontmatter.coverImage && (
				<Img
					fluid={mdx.frontmatter.coverImage.childImageSharp.fluid}
					sx={{ marginTop: 3, marginBottom: 3 }}
				/>
			)}

			{mdx.body && (
				<MDXProvider components={components}>
					<MDXRenderer>{mdx.body}</MDXRenderer>
				</MDXProvider>
			)}
		</div>
	);
};

export default Post;
