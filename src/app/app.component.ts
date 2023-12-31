import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { SobremiComponent } from "./components/sobremi/sobremi.component";
import { DescComponent } from "./components/desc/desc.component";
import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { HabilidadesComponent } from "./components/habilidades/habilidades.component";
import { CarreraComponent } from "./components/carrera/carrera.component";
import { RecomendacionesComponent } from "./components/recomendaciones/recomendaciones.component";
import { FooterComponent } from './components/footer/footer.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavComponent, HomeComponent, SobremiComponent, 
        DescComponent, ProyectosComponent, HabilidadesComponent, CarreraComponent, 
        RecomendacionesComponent, FooterComponent]
})
export class AppComponent implements OnInit{

    constructor(){
        
    }



    ngOnInit(){
    
    }

}
