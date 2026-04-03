import { Component, HostBinding, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Custom } from './custom';
import { Btnclick } from './btnclick';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Custom,Btnclick],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-2';

}
