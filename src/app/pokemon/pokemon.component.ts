import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonNames: string[] = [];

  constructor(
    private http: HttpClient
  ) {
    let url = this.getPokemonApiUrl(true);

    this.getPokemonByName(url, 'ditto');
  }

  ngOnInit(): void {
  }

  getPokemonApiUrl( useLastVersion: boolean = false ): string {
    let url = 'https://pokeapi.co/api/';

    url += ( useLastVersion ) ? 'v2/' : 'v1/';

    return url += 'pokemon/';
  }

  getPokemonByName(url: string, pokemonName: string): void {
    this.pokemonNames = [];

    this.http.get(url + pokemonName).subscribe( (data: any) => {
      data.types.forEach( (x: any) => {
        this.getPokemonsByType( x.type.url );
      });
    });

  }

  getPokemonsByType( url: string ): void {
    this.http.get( url ).subscribe( (data: any ) => {
      data.pokemon.forEach( (x: any) => {
        this.addPokemonName( x.pokemon.name );
      });
    });
  }

  addPokemonName( name: string ): void {
    if ( !this.pokemonNames.find( x => x === name) ) {
      this.pokemonNames.push(name);
    }
  }
}
