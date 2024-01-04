import { Component } from '@angular/core';
import { CarreraItemComponent } from "../carrera-item/carrera-item.component";
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-carrera',
    standalone: true,
    templateUrl: './carrera.component.html',
    styleUrl: './carrera.component.css',
    imports: [CarreraItemComponent, TranslateModule]
})
export class CarreraComponent {

    constructor(public translate:TranslateService) { }
  
}
