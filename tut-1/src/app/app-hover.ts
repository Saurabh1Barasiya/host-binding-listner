import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHover]'
})
export class AppHover {

  constructor() {
    console.log("hi i am directive");
  }

  // host binding decorator binds the host element property to a property or a component or directive class.

  @HostBinding('style.color') backColor = "red";
  @HostBinding('style.width') width = '500px';
  @HostBinding('style.height') height = '100px';
  @HostBinding('style.border') border = "2px solid black";
  @HostBinding('style.backgroundColor') backgroundColor = '';
  @HostBinding('class.myClass') myClass = true;



  // if any event is happend in the So this method is going to run. 
  @HostListener("mouseenter") onMouseEnter(){
    this.backgroundColor = 'blue';
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.backgroundColor = 'cyan';
  }

}
