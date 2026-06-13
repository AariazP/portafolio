import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Proyecto {
  title: string; desc: string; link: string;
  icon: string; bg: string;
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
    {
      title: 'PROYECTOS.TITLE_1', desc: 'PROYECTOS.DESCRIPCION_1',
      link: 'https://github.com/AariazP/s3-web',
      icon: 'devicon-amazonwebservices-plain-wordmark', bg: 'linear-gradient(135deg, #ff9900 0%, #232f3e 100%)',
      tags: [{ label: 'Terraform', color: '#7b42bc' }, { label: 'AWS S3', color: '#ff9900' }]
    },
    {
      title: 'PROYECTOS.TITLE_2', desc: 'PROYECTOS.DESCRIPCION_2',
      link: 'https://github.com/AariazP/ec2-project',
      icon: 'devicon-amazonwebservices-plain-wordmark', bg: 'linear-gradient(135deg, #232f3e 0%, #ff9900 100%)',
      tags: [{ label: 'Terraform', color: '#7b42bc' }, { label: 'AWS EC2', color: '#ff9900' }]
    },
    {
      title: 'PROYECTOS.TITLE_3', desc: 'PROYECTOS.DESCRIPCION_3',
      link: 'https://github.com/AariazP/TG-VBC',
      icon: 'devicon-terraform-plain', bg: 'linear-gradient(135deg, #1e1e2e 0%, #7b42bc 100%)',
      tags: [{ label: 'Terraform', color: '#7b42bc' }, { label: 'Terragrunt', color: '#1e6f9f' }]
    },
    {
      title: 'PROYECTOS.TITLE_4', desc: 'PROYECTOS.DESCRIPCION_4',
      link: 'https://github.com/AariazP/CI-CD',
      icon: 'devicon-python-plain', bg: 'linear-gradient(135deg, #2b5b84 0%, #3776ab 100%)',
      tags: [{ label: 'Python', color: '#3776ab' }, { label: 'CI/CD', color: '#2396ed' }]
    },
    {
      title: 'PROYECTOS.TITLE_5', desc: 'PROYECTOS.DESCRIPCION_5',
      link: 'https://github.com/AariazP/compose-project',
      icon: 'devicon-docker-plain', bg: 'linear-gradient(135deg, #0db7ed 0%, #384d54 100%)',
      tags: [{ label: 'Docker', color: '#0db7ed' }, { label: 'PHP', color: '#8892be' }]
    },
    {
      title: 'PROYECTOS.TITLE_6', desc: 'PROYECTOS.DESCRIPCION_6',
      link: 'https://github.com/AariazP/front-IA',
      icon: 'devicon-typescript-plain', bg: 'linear-gradient(135deg, #3178c6 0%, #1a1a2e 100%)',
      tags: [{ label: 'TypeScript', color: '#3178c6' }, { label: 'AI', color: '#10a37f' }]
    },
  ];
}
