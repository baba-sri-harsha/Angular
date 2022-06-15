import { BehaviorSubject } from "rxjs";

const sub1 = new BehaviorSubject("pop");
//
console.log("sub1");
sub1.subscribe({
  next: (data) => console.log(data),
  complete: () => console.log("completed 1"),
});

sub1.next("Hello");
//sub1.complete();
sub1.next("Great day");

console.log("sub2");
sub1.subscribe({
  next: (data) => console.log(data),
  complete: () => console.log("completed 2"),
});
sub1.next("Bye");
