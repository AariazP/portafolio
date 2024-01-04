import { Component } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-desc',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './desc.component.html',
  styleUrl: './desc.component.css'
})
export class DescComponent {

  constructor( private _screenService:ScreenSizeService, public translate:TranslateService){}

  isMobile(): boolean {
    return this._screenService.isMobile();
  }
}
