import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class HeroGuardGuard implements CanActivate {

  constructor(private _heroService: HeroService, private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let id = next.url[1].path;
    console.log(id);
    var hero = this._heroService.gotoHero(id);
    console.log("===============", hero)
    if (hero) { console.log('existing hero'); return true; } else {
      console.log('no existing hero');
      this._router.navigate(['/404'])
      return false;
    }
  }
}
