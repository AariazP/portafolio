import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  irWhatsApp(): void {
    window.open('https://wa.link/c3ev4p', '_blank');
  }

  descargarCV(): void {
    const link = document.createElement('a');
    link.href = 'assets/cv/cv_english.pdf';
    link.download = 'cv.pdf';
    link.click();
  }
}
