/** @jsx jsx */
import { jsx, Flex, useThemeUI } from "theme-ui";
import { IoMdContrast } from "react-icons/io";

import { Link } from "gatsby";

var linkStyle = {
	marginRight: 2,
	textDecoration: "none",
	fontSize: 1,
	fontWeight: "medium",
	color: "text",
	transition: props => `${props.transitions[1]}s`,
	":hover": {
		color: "primary",
		transition: props => `${props.transitions[1]}s`
	}
};

var modeStyle = {
	marginLeft: "auto",
	fontSize: 3,
	fontWeight: "medium",
	color: "primary",
	cursor: "pointer",
	transition: props => `${props.transitions[1]}s`,
	":hover": {
		color: "text",
		transition: props => `${props.transitions[1]}s`
	}
};

const Navigation = () => {
	const { colorMode, setColorMode } = useThemeUI();
	const changeColorMode = () => {
		setColorMode(() => (colorMode === "default" ? "dark" : "default"));
	};
	return (
		<Flex sx={{ marginTop: 2, alignItems: "center" }}>
			<Link to="/" sx={linkStyle}>
				Home
			</Link>
			<Link to="/about" sx={linkStyle}>
				About
			</Link>
			<span onClick={changeColorMode} sx={modeStyle}>
				<IoMdContrast />
			</span>
		</Flex>
	);
};

export default Navigation;
