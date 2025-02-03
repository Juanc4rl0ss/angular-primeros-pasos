import { DbzService } from './../../services/dbz.service.';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Recibimos el listado de personales desde el padre
  // Cuando utilizamos Input debemos importar Input de @angular/core
  @Input()
  public characterList: Character[]= [
    {
      name:'Trunks',
      power: 10
    },]

  // Emitimos el id del personaje que queremos eliminar a la página principal que sería el padre
  // Cuando utilizamos Output debemos importar EventEmitter y Output de @angular/core
  @Output ()
  public onDelete: EventEmitter<string> = new EventEmitter();

  
    // onDelete = Index value : number

    constructor(private dbzService: DbzService) {
     }    

     deleteCharacterById(id:string):void {
      // Emitir el id del personaje
      this.onDelete.emit(id);

     }

     recibirDatos(): void {
      //TODO: falta por implementar
     }
}
