const theme = {
	fonts: {
		body:
			'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
	},
	space: [0, 15, 30, 45, 60, 90],
	fontSizes: [13, 16, 21, 26, 34, 48, 54],
	fontWeight: {
		light: 200,
		body: 400,
		medium: 600,
		heading: 700,
		bold: 700
	},
	letterSpacings: [-0.25, 0.25, 0.5],
	lineHeights: {
		body: 1.5,
		quote: 1.25,
		heading: 1
	},
	borders: {
		borderTop: props => `1px solid ${props.colors.grays[1]}`
	},
	colors: {
		text: "#1A1A1A",
		background: "#F2F2F7",
		primary: "#1818F2",
		grays: ["white", "#C8C8CC", "#969699", "#646466", "#323233"],
		modes: {
			dark: {
				text: "#fff",
				background: "#000",
				primary: "#A066FF",
				grays: ["#262626", "#19191A", "#646466", "#969699", "#969699"]
			}
		}
	},
	sizes: [200, 400, 600, 800, 1000],
	layout: {
		large: {
			backgroundColor: "grays.0",
			maxWidth: 3,
			minHeight: `100vh`,
			padding: 4,
			paddingTop: 1,
			margin: "auto",
			boxShadow: props => `2px 2px 12px ${props.colors.grays[1]}`
		}
	},
	buttons: {
		primary: {
			background: "green"
		},
		secondary: {
			background: "purple"
		}
	},
	styles: {
		root: {
			fontFamily: "body",
			margin: "auto"
		},
		h1: {
			color: "text",
			fontSize: 6,
			letterSpacing: 0,
			lineHeight: "heading",
			paddingTop: 4,
			paddingBottom: 1,
			margin: 0
		},
		h2: {
			color: "text",
			fontSize: 5,
			letterSpacing: 0,
			lineHeight: "heading",
			paddingTop: 2,
			paddingBottom: 1,
			margin: 0
		},
		h3: {
			color: "text",
			fontSize: 3,
			letterSpacing: 0,
			lineHeight: "heading",
			paddingTop: 2,
			paddingBottom: 1,
			margin: 0
		},
		p: {
			color: "text",
			fontSize: 1,
			lineHeight: "body",
			paddingTop: 1,
			paddingBottom: 1,
			margin: 0
		},
		blockquote: {
			p: {
				color: "text",
				fontSize: 3,
				fontWeight: "light",
				lineHeight: "quote",
				paddingLeft: 2,
				borderLeft: props => `1px solid ${props.colors.grays[2]}`
			},
			paddingTop: 1,
			paddingBottom: 1,
			margin: 0
		}
	},
	transitions: [0.25, 0.5]
};

export default theme;
