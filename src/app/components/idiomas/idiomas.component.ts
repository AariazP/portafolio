import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Idioma {
  name: string;
  level: string;
  flag: string;
  width: string;
}

@Component({
  selector: 'app-idiomas',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './idiomas.component.html',
})
export class IdiomasComponent {
  idiomas: Idioma[] = [
    { name: 'IDIOMAS.ESPANOL', level: 'IDIOMAS.NATIVO', flag: 'ES', width: 'w-full' },
    { name: 'IDIOMAS.INGLES', level: 'IDIOMAS.CONVERSACIONAL', flag: 'EN', width: 'w-3/5' },
  ];
}
