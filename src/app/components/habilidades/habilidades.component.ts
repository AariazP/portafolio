import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {


  handleMouseOver(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    target.classList.add('active');
  }

  handleMouseOut(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    target.classList.remove('active');
  }
}
