import { Component } from '@angular/core';
import { CarreraItemComponent } from "../carrera-item/carrera-item.component";
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface EduItem { title: string; subtitle: string; parrafo: string; skills: string; fecha: string }
interface CertItem { org: string; title: string; fecha: string; id: string }

@Component({
  selector: 'app-carrera',
  standalone: true,
  templateUrl: './carrera.component.html',
  imports: [CarreraItemComponent, TranslateModule, ScrollRevealDirective]
})
export class CarreraComponent {
  eduItems: EduItem[] = [
    { title: 'CARRERA-EDU.TITLE_1', subtitle: 'CARRERA-EDU.SUBTITLE_1', parrafo: 'CARRERA-EDU.ACTIVITY_1', skills: 'CARRERA-EDU.SKILLS_1', fecha: 'CARRERA-EDU.TIME_1' },
    { title: 'CARRERA-EDU.TITLE_2', subtitle: 'CARRERA-EDU.SUBTITLE_2', parrafo: '', skills: 'CARRERA-EDU.SKILLS_2', fecha: 'CARRERA-EDU.TIME_2' },
    { title: 'CARRERA-EDU.TITLE_3', subtitle: 'CARRERA-EDU.SUBTITLE_3', parrafo: '', skills: '', fecha: 'CARRERA-EDU.TIME_3' },
    { title: 'CARRERA-EDU.TITLE_4', subtitle: 'CARRERA-EDU.SUBTITLE_4', parrafo: '', skills: '', fecha: 'CARRERA-EDU.TIME_4' },
    { title: 'CARRERA-EDU.TITLE_5', subtitle: 'CARRERA-EDU.SUBTITLE_5', parrafo: '', skills: '', fecha: 'CARRERA-EDU.TIME_5' },
    { title: 'CARRERA-EDU.TITLE_6', subtitle: 'CARRERA-EDU.SUBTITLE_6', parrafo: '', skills: '', fecha: 'CARRERA-EDU.TIME_6' },
  ];

  certItems: CertItem[] = [
    { org: 'CARRERA-CERT.ORGANIZATION_1', title: 'CARRERA-CERT.TITLE_1', fecha: 'CARRERA-CERT.TIME_1', id: 'CARRERA-CERT.ID_1' },
    { org: 'CARRERA-CERT.ORGANIZATION_2', title: 'CARRERA-CERT.TITLE_2', fecha: 'CARRERA-CERT.TIME_2', id: 'CARRERA-CERT.ID_2' },
    { org: 'CARRERA-CERT.ORGANIZATION_3', title: 'CARRERA-CERT.TITLE_3', fecha: 'CARRERA-CERT.TIME_3', id: 'CARRERA-CERT.ID_3' },
    { org: 'CARRERA-CERT.ORGANIZATION_4', title: 'CARRERA-CERT.TITLE_4', fecha: 'CARRERA-CERT.TIME_4', id: 'CARRERA-CERT.ID_4' },
    { org: 'CARRERA-CERT.ORGANIZATION_5', title: 'CARRERA-CERT.TITLE_5', fecha: 'CARRERA-CERT.TIME_5', id: 'CARRERA-CERT.ID_5' },
    { org: 'CARRERA-CERT.ORGANIZATION_6', title: 'CARRERA-CERT.TITLE_6', fecha: 'CARRERA-CERT.TIME_6', id: 'CARRERA-CERT.ID_6' },
    { org: 'CARRERA-CERT.ORGANIZATION_7', title: 'CARRERA-CERT.TITLE_7', fecha: 'CARRERA-CERT.TIME_7', id: 'CARRERA-CERT.ID_7' },
    { org: 'CARRERA-CERT.ORGANIZATION_8', title: 'CARRERA-CERT.TITLE_8', fecha: 'CARRERA-CERT.TIME_8', id: 'CARRERA-CERT.ID_8' },
  ];
}
