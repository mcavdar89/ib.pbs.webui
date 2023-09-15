import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective {

  @Input() 
  public set color(value:string){
    this.changeColor(value);
  }


  constructor(private el:ElementRef) {
    this.changeColor("black");
   }


  changeColor(c:string){
    this.el.nativeElement.style.color = c;
    // this.el.nativeElement.style['font-size'] = "36px";
  }

}
