import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  isMenuOpen = false;
  isScrolled = false;

  navItems = [
    { id: 'inicio', label: 'NAV.ITEM_0' },
    { id: 'sobremi', label: 'NAV.ITEM_1' },
    { id: 'portafolio', label: 'NAV.ITEM_2' },
    { id: 'habilidades', label: 'NAV.ITEM_3' },
    { id: 'carrera', label: 'NAV.ITEM_4' },
    { id: 'contact', label: 'NAV.ITEM_5' },
  ];

  languages = [
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'es', flag: '🇨🇴', name: 'Español' },
    { code: 'zh', flag: '🇨🇳', name: '中文' },
  ];

  constructor(public translate: TranslateService) {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 1024) this.isMenuOpen = false;
  }

  toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.isMenuOpen = false;
  }
}
