import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor() { }

  /**
   * getName
 : string  */
  public getName(): string {
    return 'hungbang';    
  }


}
