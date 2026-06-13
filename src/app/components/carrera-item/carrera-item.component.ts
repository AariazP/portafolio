import { Component, Input } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-carrera-item',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './carrera-item.component.html',
})
export class CarreraItemComponent {
  @Input() title!: string;
  @Input() parrafo!: string;
  @Input() fecha!: string;
  @Input() duracion!: string;
  @Input() img!: string;
}
