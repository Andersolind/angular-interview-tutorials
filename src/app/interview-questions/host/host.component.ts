import { Component } from '@angular/core';
import { OptionalIngredientDirective } from '../optional-ingredient.directive';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [OptionalIngredientDirective],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss'
})
export class HostComponent {

}


