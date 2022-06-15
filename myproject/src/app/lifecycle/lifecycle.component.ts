import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked{

  username = ''
  @Input() parentData=''
  constructor() {
    console.log(`in constructor life${this.username}`);
   }
  ngDoCheck(): void{
    console.log(`on do check  lifE ${this.username}`); 
    
  }
  ngAfterContentInit(): void {
    console.log(`on after content init life ${this.username}`); 
  }
  ngAfterContentChecked(): void {
    console.log(`on after content checked init  life${this.username}`); 

  }
  ngAfterViewInit(): void {
    console.log(`on after view init life${this.username}`); 

  }
  ngAfterViewChecked(): void {
    console.log(`on after view  checked init life ${this.username}`); 

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`on changes -life ${this.parentData}`);
  }

  ngOnInit(): void {
    console.log(` on init ${this.username}`);
    console.log(`on init life ${this.parentData}`);

  }

}
