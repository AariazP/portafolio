import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private sanitizer: DomSanitizer) { }



  irWhatsApp(): void {
    const externalLink = 'https://w.app/jskdka'; 
    window.open(externalLink, '_blank');
    console.log('irWhatsApp');
  }

  descargarCV(): void {

    const pdfFilePath = 'assets/cv/cv_spanish.pdf'; 
    const link = document.createElement('a');
    link.href = this.sanitizer.bypassSecurityTrustResourceUrl(pdfFilePath) as string;
    link.target = '_blank';
    link.download = 'alejandroCV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('descargarCV');

  }

}
