import { Directive, ElementRef,HostListener, Renderer, Input, OnInit  } from '@angular/core';

@Directive({
  selector : '[ratingBar]'
})
export class RatingDirective implements OnInit {
  @Input('ratingBar') rate : number;
  private ratio : number = 20;
  constructor(private element: ElementRef, private renderer: Renderer) {}
  ngOnInit() {
    this.visualizeRate();
  }
  private visualizeRate(){
    let barWidth = this.rate * this.ratio;
    //add renderer
    this.element.nativeElement.style.width = barWidth + '%';
  }
}
