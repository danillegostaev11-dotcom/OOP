function toArray<T>(...args: T[]): T[] {
    return args;
}

const numbers = toArray(1, 2, 3, 4, 5); 
const strings = toArray("a", "b", "c");
const booleans = toArray(true, false, true);

function parseInput(input: string): number;
function parseInput(input: string, radix: number): number;

function parseInput(input: string, radix?: number): number {
    if (radix !== undefined) {
        return parseInt(input, radix);
    } else {
        return parseInt(input);
    }
}

const decimalNumber = parseInput("123"); 
const hexNumber = parseInput("FF", 16); 
const binaryNumber = parseInput("1010", 2);

interface Book {
    isbn: string;
    title: string;
    author: string;
    pages: number;
    inStockCount: number;
}

type BookCatalogItem = Omit<Book, 'inStockCount'>;

type LibraryCatalog = Record<string, BookCatalogItem>;

const bookItem: BookCatalogItem = {
    isbn: "978-5-389-21499-1",
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    pages: 480
};

const libraryCatalog: LibraryCatalog = {
    "978-5-389-21499-1": {
        isbn: "978-5-389-21499-1",
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        pages: 480
    },
    "978-5-389-08283-8": {
        isbn: "978-5-389-08283-8",
        title: "Преступление и наказание",
        author: "Фёдор Достоевский",
        pages: 608
    }
};

console.log("Дженерики");
console.log("Массив чисел:", numbers);
console.log("Массив строк:", strings);
console.log("Массив булевых значений:", booleans);

console.log("Перегрузка функций");
console.log("parseInput('123'):", decimalNumber);
console.log("parseInput('FF', 16):", hexNumber);
console.log("parseInput('1010', 2):", binaryNumber);

console.log("Утилитные типы");
console.log("BookCatalogItem пример:", bookItem);
console.log("LibraryCatalog пример:", libraryCatalog);

const anotherBook: Book = {
    isbn: "978-5-17-090830-3",
    title: "1984",
    author: "Джордж Оруэлл",
    pages: 328,
    inStockCount: 15
};

console.log("Полная книга (Book):", anotherBook);

const catalogItemFromBook: BookCatalogItem = {
    isbn: anotherBook.isbn,
    title: anotherBook.title,
    author: anotherBook.author,
    pages: anotherBook.pages
};

console.log("BookCatalogItem из полной книги:", catalogItemFromBook);
