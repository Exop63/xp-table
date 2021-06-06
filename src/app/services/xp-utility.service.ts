import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XpUtilityService {

  constructor() { }

  public static isNullOrUndefined(item: any): boolean {
    return item === null || item === undefined;
  }


  
}
