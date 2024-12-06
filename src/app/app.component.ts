import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostComponent } from "./interview-questions/host/host.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interview-tests';
}
