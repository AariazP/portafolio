import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-sobremi',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './sobremi.component.html',
})
export class SobremiComponent {
  cards = [
    { icon: 'bi bi-code-slash', title: 'SOBREMI.TITLE_1', subtitle: 'SOBREMI.SUBTITLE_1' },
    { icon: 'bi bi-bricks', title: 'SOBREMI.TITLE_2', subtitle: 'SOBREMI.SUBTITLE_2' },
    { icon: 'bi bi-diagram-3-fill', title: 'SOBREMI.TITLE_3', subtitle: 'SOBREMI.SUBTITLE_3' },
  ];
  stats = [
    { value: '3+', label: 'SOBREMI.TITLE_1' },
    { value: '4+', label: 'SOBREMI.TITLE_2' },
    { value: '1+', label: 'SOBREMI.TITLE_3' },
  ];
}
