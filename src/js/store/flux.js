const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			scaryPlaces: [
				{
					id: 1,
					name: "Belchite",
					country: "España",
					city: "Belchite",
					description:
						"Belchite es aterrador por una razón que salta muy a la vista: la destrucción ocasionada por las guerras. Este pueblo aragonés fue devastado por completo en una de las encarnizadas batallas que tuvieron lugar en la región durante la Guerra Civil. Tras la contienda, se decidió dejar Belchite en ruinas a modo de memorial y construir en sus proximidades Belchite Nuevo. Visitar estas ruinas es siempre una experiencia sobrecogedora, sobre todo porque podemos transitar calles de edificios derruidos, atravesar iglesias de bóvedas derrumbadas y, si ponemos atención, incluso oír psicofonías. Palabra de Iker Jiménez.",
					category: "Pueblos"
				},
				{
					id: 2,
					name: "Capilla de los huesos",
					country: "Portugal",
					city: "Evora",
					description:
						"¡Vanidad de vanidades, todo es vanidad! Un lema muy de moda en el siglo XVI cuya concreción arquitectónica más bestia fue esta pequeña capilla anexa a la Iglesia de San Francisco, en la localidad portuguesa de Évora. El visitante puede sospecharlo nada más aproximarse a la entrada, la cual luce la inscripción «Nosotros, los huesos que aquí estamos, por vosotros esperamos». Y no son pocos, por cierto, los huesos que dan la bienvenida: se estima que hasta 5.000 esqueletos fueron necesarios para revestir los muros y las 8 columnas de esta pequeña, pero matona, capilla.",
					category: "Edificios"
				},
				{
					id: 3,
					name: "Caras de Bélmez",
					country: "España",
					city: "Jaén",
					description:
						"En 1971 afloraron del suelo de la cocina de la casa del número 5 de la calle Real unas manchas con forma de rostro. Desde ese momento, caras de personas que ya no existen o “teleplastias” no dejaron de aparecer y desaparecer por toda la casa y se dice que muchas veces esto dependía del estado de ánimo de sus habitantes. Pruebas químicas han demostrado que algunas de ellas fueron provocadas intencionalmente pero muchos científicos y parapsicólogos no han sabido dar respuesta a las que surgieron de forma natural.",
					category: "Edificios"
				},
				{
					id: 4,
					name: "Bomarzo",
					country: "Italia",
					city: "Bomarzo",
					description:
						"Bomarzo es una pequeña localidad de apenas 2.000 habitantes que cuenta con uno de los espacios más desconcertantes de toda Italia. Se trata del Parque de los Monstruos, un área en la que menudean esculturas grotescas de oscuro significado. Su promotor fue el aristócrata Pierfrancesco Orsini, figura maldita del Renacimiento donde las haya. Se cuenta que era un hombre deforme y jorobado que dedicó su vida a elucubraciones esotéricas y a la magia. La encontrarás a media hora en coche de Roma, por lo que siempre es una buena excusa para revisitar la capital italiana.",
					category: "Pueblos"
				},
				{
					id: 5,
					name: "Castillo de Moosham",
					country: "Austria",
					city: "Uternberg",
					description:
						"Como en una lista de estas características no puede faltar una construcción terrorífica, te traemos el Castillo de Moosham, en Uternberg. Por lo visto, entre sus paredes se llevaron a cabo ejecuciones de brujas y hay quien además asegura que en él residió un hombre lobo. El Castillo de Moosham es, por tanto, todo un museo de los horrores que, por si fuera poco, también tiene fantasmas. ¿Se puede pedir más?",
					category: "Edificios"
				},
				{
					id: 6,
					name: "Casa maldita de Amityville",
					country: "EEUU",
					city: "New York",
					description:
						"The Amityville Horror (La morada del miedo en España, Terror en Amityville en Argentina, México y Perú, y El terror en Amityville en Venezuela), es una película de terror de la compañía MGM realizada en el año 2005. Es una versión de la película de 1979 Terror en Amityville, basada en la novela Horror en Amityville de Jay Anson y en los hechos ocurridos en Amityville en la calle Ocean Avenue 112.",
					category: "Edificios"
				},
				{
					id: 7,
					name: "Isla de las muñecas",
					country: "Mejico",
					city: "Isla de las muñecas",
					description:
						"La leyenda cuenta que un hombre llamado Don Julián Santana abandonó un día a su familia y se fue a vivir una vida solitaria a esta isla. Sin embargo, a la llegada se encontró con el cadáver de una niña que se había ahogado en el canal y a una muñeca justo a su lado. Lo que comenzó como un memorial, pronto se convirtió en una obsesión (o en una exigencia del fantasma de la niña, como dicen algunos). Julián recopilaba muñecas y las colgaba de los árboles de la isla hasta que murió en 2001. Su sobrina encontró su cuerpo flotando en el mismo lugar donde Don Julián Santana encontró el cuerpo de la niña décadas antes. La Isla de las Muñecas se encuentra a 28 km del centro de Ciudad de México. Los visitantes pueden tomar un ferry hasta la isla desde el embarcadero Cuemanco o el embarcadero Fernando Celada.",
					category: "Pueblos"
				},
				{
					id: 8,
					name: "Bosque de los suicidas",
					country: "Japón",
					city: "Aokigahara",
					description:
						"Más conocido como el “bosque de los suicidas“, en Aokigahara se han quitado la vida más de 500 personas. Este bosque es más silencioso de lo normal y la disposición de los árboles desorientadora. Además de los fantasmas o la “energía“ que ha quedado infundida en el bosque debido a los ciento de suicidios; en tiempos antiguos, los miembros más débiles o viejos de las familias eran abandonados aquí durante las épocas de hambruna. Aviso: según se dice, es el bosque el que decide si quedarse con los senderistas y no dejarles encontrar el camino de vuelta.",
					category: "Pueblos"
				}
			]
		},
		actions: {
			placesInfoGatherer: async () => {
				let scaryPlacesContent = [];
				let response = await fetch("http://35.176.81.233/places");
				console.log(response);
				let responseAsJason = await response.json();
				scaryPlacesContent = responseAsJason;
				console.log(scaryPlacesContent);
				getActions().setStore(scaryPlacesContent);
			},
			getScaryPlaces: () => {
				return getStore().scaryPlaces;
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
