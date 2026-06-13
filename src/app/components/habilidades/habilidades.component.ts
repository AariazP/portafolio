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
        { name: 'AWS', icon: 'devicon-amazonwebservices-original' },
        { name: 'Docker', icon: 'devicon-docker-plain' },
        { name: 'Linux', icon: 'devicon-linux-plain' },
        { name: 'Terraform', icon: 'devicon-terraform-plain' },
        { name: 'Bash', icon: 'devicon-bash-plain' },
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'Git', icon: 'devicon-git-plain' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      ],
    },
    {
      subtitle: 'HABILIDADES.SUBTITLE_2',
      items: [
        { name: 'Kubernetes', icon: 'devicon-kubernetes-plain' },
        { name: 'Ansible', icon: 'devicon-ansible-plain' },
        { name: 'Java', icon: 'devicon-java-plain' },
        { name: 'Spring', icon: 'devicon-spring-plain-wordmark' },
        { name: 'Angular', icon: 'devicon-angularjs-plain' },
        { name: 'Node', icon: 'devicon-nodejs-plain' },
        { name: 'Postgres', icon: 'devicon-postgresql-plain' },
        { name: 'Jenkins', icon: 'devicon-jenkins-plain' },
      ],
    },
  ];
}
