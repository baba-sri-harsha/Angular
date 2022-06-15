// import {  Observable } from "rxjs"

// let obs2 = new Observable((subscribe) => {
//     console.log(`Welcome`);
//     subscribe.next("apple");
//     subscribe.next("orange");
//     subscribe.next("kiwi");
//     subscribe.next("grapes");
//     subscribe.error(new Error());
//     subscribe.complete();
//     subscribe.next("watermelon");
//     console.log(`Fruits...`);
// });
// console.log(`Hello....`);
// obs2.subscribe({
//     next:(data)=>{console.log(`inside next`);console.log(data);},
//     error:(error)=>console.log(error),
//     complete:()=>console.log(`Completed...`)
// })

import { Observable } from "rxjs";

let obs2 = new Observable((subscribe) => {
  console.log(`Welcome`);
  setTimeout(() => subscribe.next("kiwi"), 3000);
  subscribe.next("apple");
  subscribe.next("orange");
  setTimeout(() => subscribe.next("blue berry"), 5000);
  subscribe.next("kiwi");
  subscribe.next("grapes");
  subscribe.next("watermelon");
  console.log(`Fruits...`);
});

console.log(`Hello....`);

obs2.subscribe({
  next: (data) => {
    console.log(`inside next`);
    console.log(data);
  },
  error: (error) => console.log(error),
  complete: () => console.log(`Completed...`),
});

// check for from in observable and  and pipe observable

// observableInstace.pipe(operator());
// obs2.pipe(op1(), op2(), op3(), op4());
