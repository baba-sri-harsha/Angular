import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// OnChanges,
// DoCheck,
// AfterContentInit,
// AfterContentChecked,
// AfterViewInit,
// AfterViewChecked
export class AppComponent implements OnInit {
  title = 'Have a great';

  constructor() {
    console.log(`inside const -app ${this.title}`);
  }
  ngOnInit(): void {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(`On changes APP`);
  // }
  // ngOnInit(): void {
  //   console.log(`on intit -app`);
  // }

  // ngDoCheck(): void{
  //   console.log(`on do check  app `);

  // }
  // ngAfterContentInit(): void {
  //   console.log(`on after content app `);
  // }
  // ngAfterContentChecked(): void {
  //   console.log(`on after content checked app `);

  // }
  // ngAfterViewInit(): void {
  //   console.log(`on after view  init app `);

  // }
  // ngAfterViewChecked(): void {
  //   console.log(`on after view  checked app `);

  // }
}
