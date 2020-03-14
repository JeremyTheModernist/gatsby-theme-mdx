/** @jsx jsx */
import { jsx } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";

import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Styled } from "theme-ui";

const query = graphql`
	query {
		mdx(frontmatter: { slug: { eq: "about" } }) {
			frontmatter {
				title
				description
			}
			body
		}
	}
`;

const components = {
	h1: props => <Styled.h1 {...props}></Styled.h1>,
	h3: props => <Styled.h3 {...props}></Styled.h3>,
	p: props => <Styled.p {...props}></Styled.p>
};

const About = () => {
	var data = useStaticQuery(query);
	console.log(data);
	var { mdx } = data;
	return (
		<div>
			<Styled.h1>{mdx.frontmatter.title}</Styled.h1>
			<Styled.p sx={{ fontStyle: "italic", color: "grays.3" }}>
				{mdx.frontmatter.description}
			</Styled.p>
			<MDXProvider components={components}>
				<MDXRenderer>{mdx.body}</MDXRenderer>
			</MDXProvider>
		</div>
	);
};

export default About;
