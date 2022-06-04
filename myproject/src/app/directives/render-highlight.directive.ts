import { Directive ,ElementRef,Renderer2,OnInit} from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})
export class RenderHighlightDirective implements OnInit{

  constructor(private _elementRef:ElementRef,
                private _renderer:Renderer2) { }
                
  ngOnInit():  void {
    this._renderer.setStyle(this._elementRef.nativeElement,'color','blue')
    this._renderer.setStyle(this._elementRef.nativeElement,'text-transorm','lowercase')
    this._renderer.addClass(this._elementRef.nativeElement,"header")
  }



}
