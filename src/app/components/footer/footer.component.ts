import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  correo = "alejo17ariazpzn@gmail.com";

  socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jos%C3%A9-alejandro-arias-pinz%C3%B3n-20253a24a/', icon: 'bi bi-linkedin' },
    { name: 'GitHub', url: 'https://github.com/AariazP', icon: 'bi bi-github' },
    { name: 'YouTube', url: 'https://www.youtube.com/@Ariaz_/videos', icon: 'bi bi-youtube' },
  ];

  copiar() { navigator.clipboard.writeText(this.correo); }
}
