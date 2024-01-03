import { IMAGE_CONFIG } from '@angular/common';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';


export const appConfig: ApplicationConfig = {
  providers: [{
    provide: IMAGE_CONFIG,
    useValue: {
      disableImageSizeWarning: true, 
      disableImageLazyLoadWarning: true
    }
  }]
};
