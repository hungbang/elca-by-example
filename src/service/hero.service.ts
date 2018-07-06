import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Hero, GENDER} from '../model/hero'

const HEROES = [
  new Hero(11, 'Mr. Nice', Date.now().toString(), GENDER.MALE),
  new Hero(12, 'Narco',new Date().toString(), GENDER.MALE),
  new Hero(13, 'Bombasto', new Date().toString(), GENDER.MALE),
  new Hero(14, 'Celeritas', new Date().toString(), GENDER.MALE),
  new Hero(15, 'Magneta', new Date().toString(), GENDER.MALE),
  new Hero(16, 'RubberMan', new Date().toString(), GENDER.MALE)
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

  // deleteHero(hero: Hero): <Hero>{

  //   const id = typeof hero === 'number' ? hero: hero.id;

  // }
}
