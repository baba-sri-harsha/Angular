import { AsyncSubject } from "rxjs";

const bsub = new AsyncSubject();

bsub.subscribe({
  next: (data) => console.log(`first ${data}`),
  error: (error) => console.log(`error ${error}`),
  complete: () => console.log(` completed`),
});

bsub.next("hi");
bsub.next("hello");
bsub.next("welcome");

bsub.subscribe({
  next: (data) => console.log(`second ${data}`),
  error: (error) => console.log(`error ${error}`),
  complete: () => console.log(` completed`),
});

bsub.next("bye");
bsub.complete();
