import { Component } from '@angular/core';
import { CarreraItemComponent } from "../carrera-item/carrera-item.component";

@Component({
    selector: 'app-carrera',
    standalone: true,
    templateUrl: './carrera.component.html',
    styleUrl: './carrera.component.css',
    imports: [CarreraItemComponent]
})
export class CarreraComponent {

  
}
