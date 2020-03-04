import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
	query MyQuery {
		allMdx {
			edges {
				node {
					frontmatter {
						title
						description
					}
				}
			}
		}
	}
`;

const Index = props => {
	var data = useStaticQuery(query);
	console.log(data);
	var {
		allMdx: { edges }
	} = data;
	return (
		<div>
			{edges.map(({ node }) => {
				return (
					<>
						<h1>{node.frontmatter.title}</h1>
						<p>{node.frontmatter.description}</p>
					</>
				);
			})}
		</div>
	);
};

export default Index;
