import { Component } from '@angular/core';
import { CarreraItemComponent } from "../carrera-item/carrera-item.component";
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-carrera',
  standalone: true,
  templateUrl: './carrera.component.html',
  styleUrl: './carrera.component.css',
  imports: [CarreraItemComponent, TranslateModule, ScrollRevealDirective]
})
export class CarreraComponent { }
