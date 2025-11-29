const book= {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
}

const { title, author, year } = book;

console.log(title, author, year);

const bookArray = [
    "The Hobbit",
    "J.R.R. Tolkien",
    1939
]

const [titleArray, authorArray, yearArray] = bookArray;

console.log(titleArray, authorArray, yearArray);

// Nested object destructuring
const person={
    name: "John",
    age: 30,
    adress: {
        city: "New York",
        state: "NY",
        country: "USA"
    }
}

const { adress: { city, state, country } } = person;
console.log(city, state, country);