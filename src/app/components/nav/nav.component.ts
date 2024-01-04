import { Component, OnInit} from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, RouterModule, TranslateModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {


  isMediumScreen!: boolean; // variables para el responsive
  isSmallScreen!: boolean;
  isExtraSmallScreen!: boolean;

  constructor(public translate: TranslateService) {

    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|es/) ? browserLang : 'en');

  }

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private checkScreenSize() {
    this.isMediumScreen = window.innerWidth < 1107;
    this.isSmallScreen = window.innerWidth < 1033;
    this.isExtraSmallScreen = window.innerWidth < 915;
  }

  public getSize(): number {
    return window.innerWidth;
  }

  cambiarIdioma(lang: string) {
    this.translate.use(lang);
  }
  
  

}
