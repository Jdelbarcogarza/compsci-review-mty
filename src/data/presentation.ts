type Social = {
	label: string;
	link: string;
};

type Presentation = {
	mail: string;
	title: string;
	descriptionOne: string;
	descriptionTwo: string;
	socials: Social[];
	profile?: string;
};

const presentation: Presentation = {
	mail: "Compsci review",
	title: "Estudiar una carrera en software 💻",
	descriptionOne: `Cuando estaba investigando en internet sobre lo que sería estudiar
					*Ciencias Computacionales* (<span class="italic">la carrera del futuro</span>) una de las mejores
					universidades de México, antes de tomar la decisión más
					importante de mi vida me hubiera gustado poder escuchar o leer sobre
					lo que realmente es la carrera con testimonios de sus estudiantes.
					Todo con el objetivo de saber si realmente este es mi camino a seguir
					profesionalmente (ya graduado puedo decir que sí lo fue).
					<br>
					<br>
					
					Esta página contiene relatos de estudiantes egresados de la carrera de
					Ing. en Tecnologías Computacionales y afines. *El objetivo es que TU*, la
					persona visitando esta página, llegues a tus *propias conclusiones* sobre
					lo que es estudiar una carrera en software (o relacionada a la <a
						class="underline underline-offset-2"
						href="https://www.investopedia.com/terms/t/technology_sector.asp"
						>*"tech industry"*</a
					>) aquí en México y conozcas la historia de personas que ya han
					recorrido un camino que tu estás por recorrer.`,

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
