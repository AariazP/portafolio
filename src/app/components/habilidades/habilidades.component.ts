import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
  dailySkills: Skill[] = [
    { name: 'Angular', icon: 'devicon-angularjs-plain' },
    { name: 'Java', icon: 'devicon-java-plain' },
    { name: 'Bash', icon: 'devicon-bash-plain' },
    { name: 'GitHub', icon: 'devicon-github-original-wordmark' },
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'HTML', icon: 'devicon-html5-plain' },
    { name: 'CSS', icon: 'devicon-css3-plain' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
  ];

  workSkills: Skill[] = [
    { name: 'Python 3', icon: 'devicon-python-plain' },
    { name: 'Postgres', icon: 'devicon-postgresql-plain' },
    { name: 'Linux', icon: 'devicon-linux-plain' },
    { name: 'Node', icon: 'devicon-nodejs-plain' },
    { name: 'Gradle', icon: 'devicon-gradle-plain' },
    { name: 'Spring', icon: 'devicon-spring-plain-wordmark' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-original' },
    { name: 'Figma', icon: 'devicon-figma-plain' },
  ];
}
