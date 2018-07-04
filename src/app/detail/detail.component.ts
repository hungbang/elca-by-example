import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../../service/hero.service';
import {Hero} from '../../model/hero'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private _router: Router, private _route: ActivatedRoute, private _heroService: HeroService) { }
  public hero: Hero;
  
  ngOnInit() {
    this._route.paramMap.subscribe(
      param => {
        console.log("this._heroService.gotoHero(param.get('id'))", this._heroService.gotoHero(param.get('id')))
        this.hero = this._heroService.gotoHero(param.get('id'));
      }
    )
  }
}
