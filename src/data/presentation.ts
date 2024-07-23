type Social = {
	label: string;
	link: string;
};

type Presentation = {
	mail: string;
	title: string;
	description: string;
	socials: Social[];
	profile?: string;
};

const presentation: Presentation = {
	mail: "Compsci review",
	title: "Estudiar una carrera en software 💻",
	description: "",
	socials: [
		{
			label: "X",
			link: "https://x.com/Jorge_DBG",
		},
		{
			label: "Portfolio",
			link: "https://jdelbarco.pages.dev/",
		},
		{
			label: "Github",
			link: "https://github.com/Jdelbarcogarza",
		},
	],
};

export default presentation;
