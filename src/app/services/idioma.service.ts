import { Injectable } from '@angular/core';
import { Inject, LOCALE_ID } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class IdiomaService{

  private idioma: string = "ES";
  

  constructor(@Inject(LOCALE_ID) public locale: string) { 

    if(locale === "en-US") this.idioma = "EN";
  
  }

  public getIdioma(): string{
    return this.idioma;
  }

}
