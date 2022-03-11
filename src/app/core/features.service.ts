import { Injectable } from '@angular/core';
import { Info } from './info.model';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  info: Info[] = [
    {
      title: 'MUSICA',
      description:
        "Convida al CataBOT al teu canal de veu i posa la cançó que vulguis! Pots cercar la cançó, posar l'enllaç directament o afegir una llista de reproducció directament!",
      icon: 'music',
    },
    {
      title: 'MONEDES',
      description:
        'Cada persona del servidor amb el CataBOT té una quantitat de monedes per jugar!\n' +
        'Es poden executar comandes per aposar i retar als teus amics!\n' +
        'També es pot pujar de nivell i millorar el teu perfil!',
      icon: 'leader',
    },
    {
      title: 'ENTRETENIMENT',
      description:
        "Tot tipus d'entreteniment podras trobar al CataBOT! Desde traductors, memes, fotos de gats i gossos, una pokedex, fer que el bot digui el que vulguis, les estadistiques del covid, i molt més!",
      icon: 'pokedex',
    },
    {
      title: 'MODERACIÓ',
      description:
        "Si ets administrador del servidor, el CataBOT t'ofereix una gran diversitat de comandes de moderació! Es pot banejar a qui es necessiti, el mateix amb el kick. Inclús té una comanda per esborrar fins a 100 missatges!",
      icon: 'kick',
    },
    {
      title: 'SERVIDOR OFICIAL',
      description:
        "Entra ja al servidor oficial del CataBOT! Podràs parlar amb els devs, moderadors i gent espectacular que hi ha aqui dins! Prova el CataBOT en el servidor oficial o al teu servidor privat amb el link d'invitació!",
      icon: 'pokedex',
    },
  ];

  constructor() {}

  getInfo(): Info[] {
    return this.info;
  }
}
