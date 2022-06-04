import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  
  // gives the ref to the element in which the directive is added
  //elemntRef is injected to Basic higlight directive
  constructor(private _elementRef:ElementRef) { }

  // this will be called 
  ngOnInit(): void {
    this._elementRef.nativeElement.style.color='green'
    this._elementRef.nativeElement.style.textTransForm='uppercase'

  }

}
