import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {

  constructor(public translate:TranslateService) { }


  handleMouseOver(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    target.classList.add('active');
  }

  handleMouseOut(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    target.classList.remove('active');
  }
}
