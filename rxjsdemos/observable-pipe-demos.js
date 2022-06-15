import {
  interval,
  take,
  of,
  map,
  from,
  reduce,
  filter,
  skip,
  skipLast,
} from "rxjs";

// let ob = interval(1000).pipe(take(10));

// ob.subscribe({
//   next: (data) => console.log(data),
// });

// let obs = of(1, 2, 3, 4, 5, 6, 7, 8)
//   .pipe(
//     take(3),
//     map((a) => a * 10)
//   )
//   .subscribe({
//     next: (data) => console.log(data),
//   });

// let courses = ["html", "css", "js", "angular"];
// let ob = from(courses)
//   .pipe(
//     take(courses.length),
//     map((course) => course.toUpperCase())
//   )
//   .subscribe({
//     next: (data) => console.log(data),
//   });

// of(1, 2, 3, 4, 5, 6, 7)
//   .pipe(reduce((acc, val) => acc + val, 0))
//   .subscribe({
//     next: (data) => console.log(data),
//   });

// let obs2 = of("apple", "orange", "mango", "pear", "peach", "grapes")
//   .pipe(filter((fruit) => fruit.startsWith("p")))
//   .subscribe({
//     next: (data) => console.log(data),
//   });

let obs3 = of(
  "pineapple",
  "apple",
  "orange",
  "mango",
  "pear",
  "peach",
  "grapes"
)
  .pipe(
    skip(2),
    filter((fruit) => fruit.startsWith("p"))
  )
  .subscribe({
    next: (data) => console.log(data),
  });

of("apple", "orange", "mango", "pear", "peach", "grapes")
  .pipe(skipLast())
  .subscribe({
    next: (data) => console.log(data),
  });

let books = [
  {
    title: "css",
    author: "sandeep",
    category: "tech",
    price: 110,
  },
  {
    title: "My Little Stars",
    author: "baba",
    category: "fiction",
    price: 168,
  },
  {
    title: "I Know Your are Worthy",
    author: "Narayan Murthy",
    category: "Inspirational",
    price: 77,
  },
  {
    title: "html",
    author: "baba",
    category: "tecg",
    price: 75,
  },
];

let ob = from(books)
  .pipe(filter((book) => book.author.toLowerCase() == "baba"))
  .subscribe({
    next: (data) => console.log(data),
  });
