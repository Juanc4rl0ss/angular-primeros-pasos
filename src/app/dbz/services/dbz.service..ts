import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [

    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  ngOnInit(): void {}

  addCharacter({name, power}: Character): void {
      debugger;
      const newCharacter: Character = {
      id: uuid(),
      name: name,
      power: power
    }

    this.characters.unshift(newCharacter);
  }

  // Filtramos el personaje por su id,y si es igual al id que le pasamos por parametro, lo eliminamos
  deleteCharacterById(id:string) {
    debugger;
    this.characters = this.characters.filter( character => character.id !== id );
  }
}
