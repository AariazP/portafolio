import { Component, OnInit, signal } from '@angular/core';
import {CommonModule, NgFor, NgIf} from '@angular/common';
import { RouterModule } from '@angular/router';
import { IdiomaService } from '../../services/idioma.service';

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
  
  private idioma: string;
  items!:string[];


  constructor(private _idioma:IdiomaService) {
    this.idioma = _idioma.getIdioma();
  }






  ngOnInit(): void {
    
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());

    //Inicializamos el texto del nav
    if(this.idioma === "ES")this.items = ["Inicio", "Sobre mi", "Portafolio", "Habilidades", "Carrera", "Contacto"];
    else this.items = ["Home", "About me", "Portfolio", "Skills", "Career", "Contact"];
    
  
  
  
  
  
  

  }

  private checkScreenSize() {
    this.isMediumScreen = window.innerWidth < 1107;
    this.isSmallScreen = window.innerWidth < 1033;
    this.isExtraSmallScreen = window.innerWidth < 915;
  }

  public getSize():number{
    return window.innerWidth;
  }

  getIdiomaLabel():string{
    return this.idioma === "ES" ? "Idioma" : "Language";
  }
}
