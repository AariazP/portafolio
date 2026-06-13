import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-desc',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './desc.component.html',
  styleUrl: './desc.component.css'
})
export class DescComponent { }
