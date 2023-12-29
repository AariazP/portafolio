import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { SobremiComponent } from "./components/sobremi/sobremi.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavComponent, HomeComponent, SobremiComponent]
})
export class AppComponent {
}
