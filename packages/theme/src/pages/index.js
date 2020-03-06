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
			{edges.map(({ node }, i) => {
				return (
					<div key={i}>
						<h1>{node.frontmatter.title}</h1>
						<p>{node.frontmatter.description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Index;
