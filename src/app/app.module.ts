import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router'
import { HomeServiceService } from './home-service.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import {
  HeroGuardGuard as HeroGuard
} from '../service/hero-guard.guard'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    canActivate: [HeroGuard]
  },{
    path: '404',
    component: NotFoundComponent
  }
  ,{
    path: '**',
    redirectTo: '/404'
  },
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    DetailComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {enableTracing : true} //debugging purposes only
    )
  ],
  providers: [HomeServiceService, HeroGuard],
  bootstrap: [AppComponent]
})



export class AppModule { }
