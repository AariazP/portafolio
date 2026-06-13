import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sobremi',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sobremi.component.html',
  styleUrl: './sobremi.component.css'
})
export class SobremiComponent {
  cards = [
    { icon: 'bi bi-code-slash', title: 'SOBREMI.TITLE_1', subtitle: 'SOBREMI.SUBTITLE_1' },
    { icon: 'bi bi-bricks', title: 'SOBREMI.TITLE_2', subtitle: 'SOBREMI.SUBTITLE_2' },
    { icon: 'bi bi-diagram-3-fill', title: 'SOBREMI.TITLE_3', subtitle: 'SOBREMI.SUBTITLE_3' },
  ];
}
