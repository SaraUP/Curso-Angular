import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @Input('appNgColor') color: string;
  @Input() secondColor:string;

  @HostListener('mouseenter') onMouseEnter(){
    console.log('Mouse enter');
    //this.el.nativeElement.style.backgroundColor = this.color;
    this.changeColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave(){
    console.log('Mouse leave');
    //this.el.nativeElement.style.backgroundColor = this.secondColor;
    this.changeColor(this.secondColor);
  }

  constructor(private el: ElementRef) {
    console.log('Element ref ', el)

    //this.el.nativeElement.style.backgroundColor = "red";
    this.changeColor(this.secondColor); 
  }

  changeColor(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}