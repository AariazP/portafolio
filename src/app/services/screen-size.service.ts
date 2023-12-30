import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  constructor() { }


  // Returns true if the screen is a mobile device
  isMobile(): boolean {
    return window.innerWidth < 768;
  }
}
