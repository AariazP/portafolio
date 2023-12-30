import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor() { }



  irWhatsApp(): void {
    const externalLink = 'https://w.app/jskdka'; 
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
