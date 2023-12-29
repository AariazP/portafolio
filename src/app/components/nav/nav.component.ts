import { Component, OnInit, signal } from '@angular/core';
import {CommonModule, NgFor, NgIf} from '@angular/common';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ CommonModule, NgIf, NgFor ],//importo ng if y ng for
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  isMediumScreen!:boolean;
  isSmallScreen!:boolean;
  isExtraSmallScreen!:boolean;
  referencePoints!: string[];

  constructor() {}

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
