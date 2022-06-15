import { of,interval, Observable } from "rxjs"



let obs = of(10,20,30);

// const observer ={
//     next: (data) => console.log(data),
//     error : (error) =>console.log(error),
//     complete : () => console.log(`completed`)
// }



// obs.subscribe({
//     next: (data) => console.log(data)
// })


// let obs1 = interval(10)
// obs1.subscribe({next:(data)=>console.log(data)})


let obs2 = new Observable((subscribe) => {
    subscribe.next("baba")
    subscribe.next("sri")
    subscribe.next("harsha")
    subscribe.next("laptop")
    subscribe.complete();
    subscribe.next("phone")
})

obs2.subscribe();