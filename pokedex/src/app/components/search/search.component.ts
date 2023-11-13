import { Component, EventEmitter, Output } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  //crear un @Output para enviar el id del pokemon al componente padre
  @Output() pokemonSelected = new EventEmitter<number>();

  constructor(private pokeapiService: PokeapiService) {}

  //crea la funcion "searchPokemon" el cual ejecute un emmiter con el id del pokemon en el output pokemonSelected al ser ejecuto por el input
  public searchPokemon(event: any): void {
    const pokemonId = Number(event.target.value);
    this.pokemonSelected.emit(pokemonId);
  }
}
  
  