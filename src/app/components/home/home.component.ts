import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jos%C3%A9-alejandro-arias-pinz%C3%B3n-20253a24a/', icon: 'bi bi-linkedin' },
    { name: 'GitHub', url: 'https://github.com/AariazP', icon: 'bi bi-github' },
    { name: 'YouTube', url: 'https://www.youtube.com/@Ariaz_/videos', icon: 'bi bi-youtube' },
  ];

  irWhatsApp() { window.open('https://wa.link/o5jpae', '_blank'); }

  descargarCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv/cv_english.pdf';
    link.download = 'cv.pdf';
    link.click();
  }
}
