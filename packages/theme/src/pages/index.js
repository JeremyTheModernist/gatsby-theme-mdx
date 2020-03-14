/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Styled } from "theme-ui";

const query = graphql`
	query MyQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMdx(
			filter: { fileAbsolutePath: { regex: "/data/" } }
			sort: { fields: fileAbsolutePath }
		) {
			edges {
				node {
					frontmatter {
						title
						description
						slug
						coverImage {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid
								}
							}
						}
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
		allMdx: { edges },
		site
	} = data;
	return (
		<div>
			<Styled.h1>{site.siteMetadata.title}</Styled.h1>
			{edges.map(({ node }, i) => {
				return (
					<div key={i}>
						<Img
							fluid={
								node.frontmatter.coverImage.childImageSharp
									.fluid
							}
							sx={{ marginTop: 2 }}
						/>
						<Link
							to={`/${node.frontmatter.slug}`}
							style={{ textDecoration: "none" }}
						>
							<Styled.h3
								sx={{
									paddingBottom: 0,
									transition: props =>
										`${props.transitions[1]}s`,
									":hover": { color: "primary" }
								}}
							>
								{node.frontmatter.title}
							</Styled.h3>
						</Link>
						<Styled.p sx={{ color: "grays.3" }}>
							{node.frontmatter.description}
						</Styled.p>
					</div>
				);
			})}
		</div>
	);
};

export default Index;
