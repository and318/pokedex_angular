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
  pokemonId: number | undefined;

  ngOnInit() {
    this.getPokemonData(14);
  }

  getPokemonData(pokemonNumber: number) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then((response) => {
        this.pokemonName = response.data.name;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //crea la funcion setPokemonId el cual
  public setPokemonId(pokemonId: number): void {
    this.pokemonId = pokemonId;
    // this.getPokemonData(pokemonId);
  }
}
