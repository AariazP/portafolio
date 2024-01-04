import { Component,Renderer2 } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { ClipboardService } from 'ngx-clipboard';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ClipboardModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private clipboardService: ClipboardService, public translate:TranslateService) { }

  correo: string = "alejo17ariazpzn@gmail.com";

  copiar(){
    this.clipboardService.copyFromContent(this.correo);
  }


  irInicio(){
    console.log("Inicio");
  }

}
