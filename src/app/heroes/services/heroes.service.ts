import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Heroe[]> {

    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeById(id: string):Observable<Heroe> {

    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {

    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);

  }

  agregarHeroe(heroe: Heroe): Observable<Heroe>{

    return this.http.post<Heroe>(`${this.baseUrl}/heroes`,heroe);
  }

  actualizarHeroe(heroe: Heroe): Observable<Heroe>{

    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`,heroe);
  }

  borrarHeroe(id: string): Observable<any>{

    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }
}
