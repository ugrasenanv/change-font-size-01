import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  fontSize = 14;
  @ViewChild('para', { static: true }) para: ElementRef;

  changeFont(operator) {
    operator === '+' ? this.fontSize++ : this.fontSize--;
    (this.para.nativeElement as HTMLParagraphElement).style.fontSize = `${this.fontSize}px`;
    
  }
}
