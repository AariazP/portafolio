import { Component } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-desc',
  standalone: true,
  imports: [NgClass],
  templateUrl: './desc.component.html',
  styleUrl: './desc.component.css'
})
export class DescComponent {

  constructor( private _screenService:ScreenSizeService){}

  isMobile(): boolean {
    return this._screenService.isMobile();
  }
}
