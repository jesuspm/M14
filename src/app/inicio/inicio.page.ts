import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  //EL CODIGO DE ABAJO ESTA EN SERIES.PAGE.TS
  series =  [{"name": "Stranger Things",
  "sinopsis": "La historia arranca durante la década de los 80, en el pueblo ficticio de Hawkins, Indiana, cuando un niño llamado Will Byers desaparece misteriosamente, hecho que destapa los extraños sucesos que tienen lugar en la zona, producto de una serie de experimentos que realiza el gobierno en un laboratorio científico cercano. Además, en la ciudad aparecen fuerzas sobrenaturales inquietantes y una niña muy extraña. Ella, junto con los amigos de Will, se encargará de buscarlo, sin imaginar lo que tendrán que enfrentar para encontrarlo. Inadvertidamente, crearon un portal a una dimensión alternativa llamada Upside Down 'El Otro Lado La influencia del Otro Lado comienza a afectar a los desconocidos residentes de Hawkins de manera calamitosa.",
  "pegi": "+14",
  "temporadas": "4",
  "birth_year": "2011",
  "img": "strangerthings.png",
  "fav": 0
  },{"name": "La casa de papel",
   "sinopsis":"La casa de papel es una serie de televisión española creada por Álex Pina, producida por Atresmedia en sus inicios, aunque posteriormente por Netflix. Protagonizada por Úrsula Corberó, Itziar Ituño y Álvaro Morte, se presentó en el III Festival de Televisión de Primavera en Burgos en marzo de 20171​ y el 2 de mayo de ese mismo año se estrenó en la cadena española Antena 3. Esta cadena distribuyó las dos primeras partes de la serie en España antes de que Netflix la adquiriera a finales de 2017 y la editase, reeditase y distribuyese las dos partes por todo el mundo. La serie está inspirada en el protocolo del atracador de bancos Willie Sutton,2​3​4​ que concibió más de 100 golpes mediante disfraces y engaños y sin necesidad de disparar a nadie. Eso le reportó dos millones de dólares en las décadas de 1920-1950.",
   "pegi": "+18",
   "temporadas":"5",
   "desc": "prueba2",
   "birth_year": "2012",
   "img": "lacasadepapel.jpg",
   "fav": 0
  },{"name": "Dark",
  "sinopsis": "En Winden (2019), un pequeño pueblo ficticio situado en Alemania, la desaparición de un niño pone en alerta a todos los vecinos. El cuerpo de policía trata de investigar el caso sin hallar ninguna explicación. En el municipio viven cuatro familias: los Kahnwald, los Nielsen, los Doppler y los Tiedemann. Todas permanecen unidas ante los misteriosos acontecimientos. Sin embargo, todo cambia el día que Mikkel, el hijo menor de la familia Nielsen, desaparece sin dejar rastro.",
  "pegi": "+16",
  "temporadas": "3",
  "birth_year": "2015",
  "img": "dark.jpg",
  "fav": 0
  },{"name": "Vikingos",
  "sinopsis": "Vikings es una serie de televisión de drama histórico creada y escrita por Michael Hirst para el canal History. Filmada en Irlanda, se estrenó el 3 de marzo de 2013 y concluyó el 30 de diciembre de 2020 tras seis temporadas y un total de 89 episodios. Vikingos está inspirada en las sagas del vikingo Ragnar Lodbrok, uno de los héroes nórdicos legendarios más conocidos y notorio como el flagelo de Inglaterra y Francia. El programa retrata a Ragnar como un granjero que alcanza la fama con exitosas incursiones en Inglaterra que se convierte en un rey escandinavo, con la ayuda de su familia y sus guerreros. En las últimas temporadas, la serie sigue la fortuna de sus hijos y sus aventuras en Inglaterra, Escandinavia y el Mediterráneo. ",
  "pegi": "+16",
  "temporadas": "6",
  "birth_year": "2010",
  "img": "vikingos.jpg",
  "fav": 0
  },{"name": "El juego del calamar",
  "sinopsis": "Cientos de jugadores con problemas de dinero aceptan una invitación rarísima para competir en juegos infantiles. Dentro les esperan un tentador premio y desafíos letales. Con esta declaración de intenciones arranca 'El juego del calamar ' (Squid Game), la ficción de Netflix que está revolucionando el panorama nacional y que se ha convertido en la serie de la que todo el mundo habla.",
  "pegi": "+16",
  "temporadas": "1",
  "birth_year": "2021",
  "img": "eljuegodelcalamar.jpg",
  "fav": 0
  },{"name": "Los Simpsons",
  "sinopsis": "La serie es una sátira hacia la sociedad estadounidense que narra la vida y el día a día de una familia de clase media de ese país (cuyos miembros son Homer, Marge, Bart, Lisa y Maggie Simpson) que vive en un pueblo ficticio llamado Springfield.",
  "pegi": "+16",
  "temporadas": "33",
  "birth_year": "1998",
  "img": "lossimpson.jpg",
  "fav": 0
  },{"name": "Peaky Blinders",
  "sinopsis":"Peaky Blinders es un drama de BBC que narra la historia de la familia gitana Shelby y su banda de gángsters, un grupo de personas características por sus boinas con cuchillas y dueñas de los asuntos ilegales, que dominan las apuestas clandestinas y se rigen mediante extorsiones",
  "pegi": "+18",
  "temporadas": "5",
  "birth_year": "2020",
  "img": "peakyblinders.jpg",
  "fav": 0
  }];
  
}
