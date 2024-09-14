function averageEvenNumbers(numbers) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const total = evenNumbers.reduce((acc, num) => acc + num, 0);
  return evenNumbers.length === 0 ? 0 : total / evenNumbers.length;
}

// Example usage:
console.log(averageEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 4
function longestWord(words) {
  return words.reduce(
    (longest, currentWord) =>
      currentWord.length > longest.length ? currentWord : longest,
    ""
  );
}

// Example usage:
console.log(longestWord(["apple", "banana", "cherry", "watermelon"])); // Output: "watermelon"
function averagePages(books) {
  const totalPages = books
    .map((book) => book.pages)
    .reduce((acc, pages) => acc + pages, 0);
  return totalPages / books.length;
}

// Example usage:
const books = [
  { title: "Book One", author: "Author One", pages: 200 },
  { title: "Book Two", author: "Author Two", pages: 300 },
  { title: "Book Three", author: "Author Three", pages: 250 },
];

console.log(averagePages(books)); // Output: 250
function stringFrequency(strings) {
  return strings.reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, {});
}

// Example usage:
console.log(stringFrequency(["hello", "world", "hello"])); // Output: { hello: 2, world: 1 }
function countPeopleByCity(people) {
  return people.reduce((acc, person) => {
    acc[person.city] = (acc[person.city] || 0) + 1;
    return acc;
  }, {});
}

// Example usage:
const people = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" },
];

console.log(countPeopleByCity(people)); // Output: { "New York": 2, "Chicago": 1 }
