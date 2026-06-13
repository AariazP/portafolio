import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Proyecto {
  title: string; desc: string; img: string; link: string;
  tags: { label: string; color: string }[];
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './proyectos.component.html',
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [
    { title: 'PROYECTOS.TITLE_1', desc: 'PROYECTOS.DESCRIPCION_1', img: 'assets/proyectos/Escuela.jpeg', link: 'https://github.com/AariazP/FrontBaseDatos.git', tags: [{ label: 'Angular', color: '#dd0031' }, { label: 'TypeScript', color: '#3178c6' }] },
    { title: 'PROYECTOS.TITLE_2', desc: 'PROYECTOS.DESCRIPCION_2', img: 'assets/proyectos/Clinica.png', link: 'https://github.com/AariazP/clinicaFront.git', tags: [{ label: 'Angular', color: '#dd0031' }, { label: 'TypeScript', color: '#3178c6' }] },
    { title: 'PROYECTOS.TITLE_3', desc: 'PROYECTOS.DESCRIPCION_3', img: 'assets/proyectos/spring.avif', link: 'https://github.com/Parritap/Clinica.git', tags: [{ label: 'Spring', color: '#6bbd5b' }, { label: 'MySql', color: '#00758f' }] },
    { title: 'PROYECTOS.TITLE_4', desc: 'PROYECTOS.DESCRIPCION_4', img: 'assets/proyectos/mercadolibre.jpg', link: 'https://github.com/AariazP/mercadoLibre-Scrapper.git', tags: [{ label: 'Python', color: '#3776ab' }, { label: 'Excel', color: '#217346' }] },
    { title: 'PROYECTOS.TITLE_5', desc: 'PROYECTOS.DESCRIPCION_5', img: 'assets/proyectos/force_brute.png', link: 'https://github.com/AariazP/wifiTest.git', tags: [{ label: 'Java', color: '#ed8b00' }] },
    { title: 'PROYECTOS.TITLE_6', desc: 'PROYECTOS.DESCRIPCION_6', img: 'assets/proyectos/patterns.png', link: 'https://github.com/AariazP/DesignPatterns.git', tags: [{ label: 'Java', color: '#ed8b00' }, { label: 'Design', color: '#888' }] },
  ];
}
