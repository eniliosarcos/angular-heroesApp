import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import {switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius: 5px
    }
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoutes: ActivatedRoute,
              private heroesService: HeroesService,
              private router:Router) { }

  ngOnInit(): void {

    this.activatedRoutes.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroeById(id))
      )
      .subscribe( heroe => this.heroe = heroe);
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
