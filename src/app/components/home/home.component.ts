import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(public translate: TranslateService) { }



  irWhatsApp(): void {
    const externalLink = 'https://wa.link/c3ev4p'; 
    window.open(externalLink, '_blank');
    console.log('irWhatsApp');
  }

  descargarCV(): void {
    const pdfPath = 'assets/cv/cv_english.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'cv.pdf';  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

  

}
