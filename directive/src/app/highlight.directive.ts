import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight('green');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
