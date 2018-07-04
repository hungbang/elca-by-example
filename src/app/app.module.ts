import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router'
import { HomeServiceService } from './home-service.service';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing : true} //debugging purposes only
    )
  ],
  providers: [HomeServiceService],
  bootstrap: [AppComponent]
})



export class AppModule { }
