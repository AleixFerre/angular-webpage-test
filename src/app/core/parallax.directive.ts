import { Directive, ElementRef, HostListener, Input, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[appParallax]',
})
export class ParallaxDirective {
  @Input('ratio') set parallaxRatio(val: number) {
    this.ratio = val ? val : 1;
  }

  @Input('mask') set mask(val: boolean) {
    this.isMask = val;
  }

  isMask: boolean = false;

  private ratio: number = 1;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.isMask) {
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        'style',
        `transform: translateY(${this.getTranslation()}); height: ${this.getHeight()};`
      );
    } else {
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        'style',
        `transform: translateY(${this.getTranslation()});`
      );
    }
  }

  private getTranslation(multiply: number = 1) {
    return `${((window.scrollY * this.ratio) / 10) * multiply}px`;
  }

  private getHeight() {
    return this.getTranslation(-0.79);
  }
}
