import { Component,Renderer2 } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ClipboardModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private clipboardService: ClipboardService) { }

  correo: string = "alejo17ariazpzn@gmail.com";

  copiar(){
    this.clipboardService.copyFromContent(this.correo);
  }


  irInicio(){
    console.log("Inicio");
  }

}
