import { Component, OnInit, Inject, INJECTOR, Injector, ReflectiveInjector } from '@angular/core';
import { HomeServiceService } from '../home-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  
 

  public name: string;

  constructor() { }


  ngOnInit() {
    var injector = ReflectiveInjector.resolveAndCreate([
      HomeServiceService
    ]);
    var _homeService = injector.get(HomeServiceService);
    this.name = _homeService.getName();
  };



}
