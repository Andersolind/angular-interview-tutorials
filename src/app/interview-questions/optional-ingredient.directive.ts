import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[optionalIngredient]',  // Use attribute selector 
  standalone:true
})
export class OptionalIngredientDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // Listen for the click event and toggle the class
  @HostListener('click') onClick() {
    const element = this.elRef.nativeElement;
    if (element.classList.contains('strikethrough')) {
      this.renderer.removeClass(element, 'strikethrough');
    } else {
      this.renderer.addClass(element, 'strikethrough');
    }
  }
}