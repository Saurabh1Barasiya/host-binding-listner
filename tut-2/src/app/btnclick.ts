import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBtnclick]'
})
export class Btnclick {

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor = ''; 
  @HostBinding('style.padding') padding = "1rem";

  arr = ["red","green","blue"];

  @HostListener("click",['$event']) onBtnClick(event:Event){
    console.log(Math.floor(Math.random() * this.arr.length));
    const color = Math.floor(Math.random() * this.arr.length);
    this.backgroundColor = this.arr[color];
    console.log(`this is the event ${event.target}`);
  }
}
