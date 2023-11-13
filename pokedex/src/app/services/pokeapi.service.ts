import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokeapiService {
  //añadir metodo para obtener los datos de la pokeapi usando HTTPClient
  
  private readonly apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemon(id: number) {
    return this.http.get(`${this.apiUrl}/pokemon/${id}`);
  }
}
