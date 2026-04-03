import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class Custom implements OnInit{

  constructor() { }

  isDisabled:boolean = false;

  @HostBinding('style.opacity') opacity = '1';

  ngOnInit(): void {
    console.log("hi i am running");
    this.opacity = this.isDisabled ? "0.5" : "1";
  }


  

}
