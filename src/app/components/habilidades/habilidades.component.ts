import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface SkillGroup { subtitle: string; items: { name: string; icon: string }[] }

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [TranslateModule, ScrollRevealDirective],
  templateUrl: './habilidades.component.html',
})
export class HabilidadesComponent {
  groups: SkillGroup[] = [
    {
      subtitle: 'HABILIDADES.SUBTITLE_1',
      items: [
        { name: 'Angular', icon: 'devicon-angularjs-plain' },
        { name: 'Java', icon: 'devicon-java-plain' },
        { name: 'Bash', icon: 'devicon-bash-plain' },
        { name: 'GitHub', icon: 'devicon-github-original-wordmark' },
        { name: 'Docker', icon: 'devicon-docker-plain' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
        { name: 'HTML', icon: 'devicon-html5-plain' },
        { name: 'CSS', icon: 'devicon-css3-plain' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
      ],
    },
    {
      subtitle: 'HABILIDADES.SUBTITLE_2',
      items: [
        { name: 'Python 3', icon: 'devicon-python-plain' },
        { name: 'Postgres', icon: 'devicon-postgresql-plain' },
        { name: 'Linux', icon: 'devicon-linux-plain' },
        { name: 'Node', icon: 'devicon-nodejs-plain' },
        { name: 'Gradle', icon: 'devicon-gradle-plain' },
        { name: 'Spring', icon: 'devicon-spring-plain-wordmark' },
        { name: 'AWS', icon: 'devicon-amazonwebservices-original' },
        { name: 'Figma', icon: 'devicon-figma-plain' },
      ],
    },
  ];
}
