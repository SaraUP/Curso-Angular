import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  constructor(el: ElementRef) {
    console.log('Element ref ', el)

    el.nativeElement.style.backgroundColor = "red"; 
  }

}