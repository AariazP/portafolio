import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  correo = "alejo17ariazpzn@gmail.com";

  copiar() {
    navigator.clipboard.writeText(this.correo);
  }
}
