import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor: string;
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
