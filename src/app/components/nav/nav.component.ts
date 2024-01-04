import { Component, OnInit, signal } from '@angular/core';
import {CommonModule, NgFor, NgIf} from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ CommonModule, NgIf, NgFor, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  isMediumScreen!:boolean; // variables para el responsive
  isSmallScreen!:boolean;
  isExtraSmallScreen!:boolean;



  constructor() {
    
  }






  ngOnInit(): void {
    
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private checkScreenSize() {
    this.isMediumScreen = window.innerWidth < 1107;
    this.isSmallScreen = window.innerWidth < 1033;
    this.isExtraSmallScreen = window.innerWidth < 915;
  }

  public getSize():number{
    return window.innerWidth;
  }

}
