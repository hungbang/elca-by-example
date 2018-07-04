import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Hero} from '../model/hero'

const HEROES = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan')
];

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  gotoHeroes(){
    return HEROES;
  }

  gotoHero(id: number|string): Hero{
    console.log(id)
    console.log(this.gotoHeroes())
    return this.gotoHeroes().find(hero => hero.id === +id);
  }

  isNullOrEmpty(id: number|string){
    return id?true:false;
  }
}
