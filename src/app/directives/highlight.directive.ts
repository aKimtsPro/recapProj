import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') appHighlight: string;

  @HostListener('mouseenter')
  onMouseenter(){
    this.el.nativeElement.style.backgroundColor= this.appHighlight;
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.el.nativeElement.style.backgroundColor= null;
  }

  constructor(private el: ElementRef) {
  }

}
