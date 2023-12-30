import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private _router:Router) { }



  irWhatsApp(): void {
    const externalLink = 'https://w.app/jskdka'; 
    window.open(externalLink, '_blank');
    console.log('irWhatsApp');
  }

}
