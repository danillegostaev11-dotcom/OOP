function introduceYourself(name: string, age?: number): string {
    if (age !== undefined) {
        return `Привет, меня зовут ${name} и мне ${age} лет.`;
    } else {
        return `Привет, меня зовут ${name}.`;
    }
}

interface Book {
    title: string;
    author: string;
    year?: number;
}

const myLibrary: Book[] = [
    {
        title: "эта книга",
        author: "Я",
        year: 2026
    },
    {
        title: "печеньки",
        author: "снова Я",
        year: 1866
    },
    {
        title: "1984",
        author: "и тут Я"
    }
];

console.log("=== Демонстрация функции introduceYourself ===");
console.log(introduceYourself('Петр', 30));
console.log(introduceYourself('Анна'));
console.log(introduceYourself('Иван', 25));

console.log("\n=== Моя библиотека ===");
myLibrary.forEach((book, index) => {
    console.log(`${index + 1}. "${book.title}" - ${book.author}` + 
                (book.year ? ` (${book.year})` : ' (год издания не указан)'));
});
