import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-desc',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './desc.component.html',
})
export class DescComponent {
  paragraphs = ['DESC.DESCRIPCION_1', 'DESC.DESCRIPCION_2', 'DESC.DESCRIPCION_3', 'DESC.DESCRIPCION_4'];
}
