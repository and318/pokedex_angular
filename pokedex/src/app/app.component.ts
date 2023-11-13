import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
searchPokemon() {
throw new Error('Method not implemented.');
}
  title = 'pokedex';
  pokemonName: string | undefined;
  pokeImage: string | undefined;
  pokemonNumber: number | undefined;
  pokemonId: number = 0;

  ngOnInit() {
  }

  //crea la funcion setPokemonId el cual
  public setPokemonId(pokemonId: number): void {
    this.pokemonId = pokemonId;
    // this.getPokemonData(pokemonId);
  }
}
