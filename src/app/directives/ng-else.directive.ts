import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective implements OnInit {

  @Input()

  @Input() 
  set ngElse(condition: boolean){
    if(condition){
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { 

  }

  ngOnInit(){}

}