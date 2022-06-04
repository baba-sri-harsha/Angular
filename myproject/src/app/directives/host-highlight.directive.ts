import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostHighlight]'
})
export class HostHighlightDirective implements OnInit {

  constructor(private _elementRef:ElementRef,
    private _renderer:Renderer2) { }
  
  
  ngOnInit(): void {
    this._renderer.setStyle(this._elementRef.nativeElement,'color','blue')
    this._renderer.setStyle(this._elementRef.nativeElement,'text-transorm','lowercase')
    this._renderer.addClass(this._elementRef.nativeElement,"header")
  }


  @HostListener("mouseenter")
  mouseEnter=()=>{
    this._renderer.setStyle(this._elementRef.nativeElement,'color','black')
    this._renderer.setStyle(this._elementRef.nativeElement,'text-decoration','line-through')
    this._renderer.removeClass(this._elementRef.nativeElement,"header")
  }

  @HostListener("mouseleave")
  mouseExit=()=>{
    this._renderer.setStyle(this._elementRef.nativeElement,'color','black')
    this._renderer.setStyle(this._elementRef.nativeElement,'text-decoration',"line-through")
    this._renderer.addClass(this._elementRef.nativeElement,"header")
 
  }
}
