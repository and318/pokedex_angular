import { PokeapiService } from '../../services/pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
  //añadir onInit para que se ejecute la funcion getPokemonData al iniciar el componente y no elimines los comentarios
export class PokeCardComponent implements OnInit {
  //añadir el servicio pokeapi.service.ts al constructor y una funcion que obtenga los datos del pokemon
  public pokemonData: any;
pokemonName: any;

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    //asigna la funcion getPokemonData como public que retorna void
    this.getPokemonData(1);
  }

  //asigna la funcion getPokemonData como public que retorna void
  public getPokemonData(pokemonId: number): void {
      this.pokeapiService.getPokemon(pokemonId).subscribe((data) => {
        this.pokemonData = data;
      });
    }
}