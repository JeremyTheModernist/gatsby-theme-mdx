/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui";

import { graphql, useStaticQuery } from "gatsby";

var linkStyle = {
	textDecoration: "none",
	fontSize: 1,
	marginLeft: 2,
	fontWeight: "medium",
	color: "primary",
	transition: props => `${props.transitions[1]}s`,
	":hover": {
		color: "text",
		transition: props => `${props.transitions[1]}s`
	}
};

var query = graphql`
	query {
		site {
			siteMetadata {
				description
				twitter
				github
			}
		}
	}
`;

const Footer = () => {
	var data = useStaticQuery(query);
	console.log("footer data", data);
	var {
		site: { siteMetadata }
	} = data;
	return (
		<Flex
			sx={{
				paddingTop: 2,
				marginTop: 2,
				alignItems: "baseline",
				borderTop: props => `1px solid ${props.colors.grays[1]}`
			}}
		>
			<Styled.p
				sx={{
					padding: props => `0 ${props.space[5]}px 0 0`,
					marginRight: "auto",
					color: `grays.3`
				}}
			>
				{siteMetadata.description}
			</Styled.p>
			<a
				href={siteMetadata.github}
				target="_blank"
				sx={linkStyle}
				rel="noopener noreferrer"
			>
				Github
			</a>
			<a
				href={siteMetadata.twitter}
				target="_blank"
				sx={linkStyle}
				rel="noopener noreferrer"
			>
				Twitter
			</a>
		</Flex>
	);
};

export default Footer;
