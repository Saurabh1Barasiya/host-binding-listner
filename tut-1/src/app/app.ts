import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHover } from './app-hover';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AppHover],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-1';
}
