import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @HostListener('mouseenter') onMouseEnter(){
    console.log('Mouse enter');
    //this.el.nativeElement.style.backgroundColor = "red";
    this.changeColor("yellow");
  }

  @HostListener('mouseleave') onMouseLeave(){
    console.log('Mouse leave');
    //this.el.nativeElement.style.backgroundColor = "red";
    this.changeColor("red");
  }

  constructor(private el: ElementRef) {
    console.log('Element ref ', el)

    //this.el.nativeElement.style.backgroundColor = "red";
    this.changeColor("red"); 
  }

  changeColor(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}