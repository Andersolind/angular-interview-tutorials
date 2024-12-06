import { OptionalIngredientDirective } from './optional-ingredient.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

// Create a test component that will use the directive
@Component({
  template: `<div [optionalIngredient]></div>`,
})
class TestComponent {}

describe('OptionalIngredientDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directiveElement: HTMLElement;

  beforeEach(() => {
    // Set up the testing module with the directive imported
    TestBed.configureTestingModule({
      imports: [OptionalIngredientDirective],  // Import the standalone directive here
      declarations: [TestComponent],           // Declare the test component
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directiveElement = fixture.nativeElement.querySelector('div');
    
    // Trigger initial change detection to set up the DOM
    fixture.detectChanges();
  });

  it('should toggle "strikethrough" class on click', () => {
    // Ensure the element doesn't have the class initially
    expect(directiveElement.classList.contains('strikethrough')).toBeFalsy();

    // Simulate the click event
    directiveElement.click();
    fixture.detectChanges();

    // Verify the class was added after the first click
    expect(directiveElement.classList.contains('strikethrough')).toBeTruthy();

    // Simulate the click event again
    directiveElement.click();
    fixture.detectChanges();

    // Verify the class was removed after the second click
    expect(directiveElement.classList.contains('strikethrough')).toBeFalsy();
  });

  it('should not add strikethrough class initially', () => {
    // Ensure that the class is not added when the directive is first applied
    expect(directiveElement.classList.contains('strikethrough')).toBeFalsy();
  });
});
