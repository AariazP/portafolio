import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrera-item',
  standalone: true,
  imports: [],
  templateUrl: './carrera-item.component.html',
  styleUrl: './carrera-item.component.css'
})
export class CarreraItemComponent {

  @Input() title!:string;
  @Input() parrafo!:string;
  @Input() fecha!:string;
  @Input() duracion!:string;
  @Input() img!:string;
  @Input() alt!:string;

}
